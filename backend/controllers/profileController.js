import db from "../config/db.js";

/* =====================================================
   CALCULATE PROFILE COMPLETION
===================================================== */

const calculateCompletion = ({
  phone,
  location,
  jobTitle,
  company,
  experience,
  education,
  availability,
  avatar,
  resume,
  skills,
}) => {
  const fields = [
    phone,
    location,
    jobTitle,
    company,
    experience,
    education,
    availability,
    avatar,
    resume,
  ];

  let completed = fields.filter(
    (field) =>
      field !== null &&
      field !== undefined &&
      String(field).trim() !== ""
  ).length;

  if (Array.isArray(skills) && skills.length > 0) {
    completed += 1;
  }

  const totalFields = 10;

  return Math.round(
    (completed / totalFields) * 100
  );
};

/* =====================================================
   GET PROFILE
   GET /api/profile/:userId
===================================================== */

export const getProfile = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "User ID is required.",
      });
    }

    /*
      Get basic user information from users table
      and professional information from user_profiles.
    */

    const [profiles] = await db.query(
      `
      SELECT
        u.id AS user_id,
        u.name,
        u.email,

        p.id,
        p.phone,
        p.location,
        p.job_title,
        p.company,
        p.experience,
        p.education,
        p.availability,
        p.avatar,
        p.resume,
        p.completion,
        p.created_at,
        p.updated_at

      FROM users AS u

      LEFT JOIN user_profiles AS p
        ON u.id = p.user_id

      WHERE u.id = ?

      LIMIT 1
      `,
      [userId]
    );

    if (profiles.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    const profile = profiles[0];

    /*
      Get user's skills
    */

    const [skillsRows] = await db.query(
      `
      SELECT skill
      FROM user_skills
      WHERE user_id = ?
      ORDER BY id ASC
      `,
      [userId]
    );

    const skills = skillsRows.map(
      (item) => item.skill
    );

    profile.skills = skills;

    /*
      If profile record does not exist yet,
      frontend can still display user's name/email.
    */

    profile.id = profile.id || null;
    profile.phone = profile.phone || "";
    profile.location = profile.location || "";
    profile.job_title =
      profile.job_title || "";
    profile.company = profile.company || "";
    profile.experience =
      profile.experience || "";
    profile.education =
      profile.education || "";
    profile.availability =
      profile.availability || "";
    profile.avatar = profile.avatar || "";
    profile.resume = profile.resume || "";
    profile.completion =
      profile.completion || 0;

    return res.status(200).json({
      success: true,
      profile,
    });
  } catch (error) {
    console.error(
      "Get profile error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Internal server error while loading profile.",
    });
  }
};

/* =====================================================
   CREATE / UPDATE PROFILE
   POST /api/profile
===================================================== */

export const saveProfile = async (
  req,
  res
) => {
  let connection;

  try {
    connection =
      await db.getConnection();

    await connection.beginTransaction();

    const {
      userId,

      name,
      email,

      phone,
      location,
      title,
      job_title,
      company,
      experience,
      education,
      availability,

      avatar,
      resume,

      skills = [],
    } = req.body;

    /* ---------------------------------------------
       VALIDATION
    --------------------------------------------- */

    if (!userId) {
      await connection.rollback();

      return res.status(400).json({
        success: false,
        message: "User ID is required.",
      });
    }

    /*
      Verify user exists.
    */

    const [users] =
      await connection.query(
        `
        SELECT id
        FROM users
        WHERE id = ?
        LIMIT 1
        `,
        [userId]
      );

    if (users.length === 0) {
      await connection.rollback();

      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    /*
      Frontend currently sends "title".
      Database column is "job_title".

      This supports both.
    */

    const jobTitle =
      title || job_title || "";

    /* ---------------------------------------------
       UPDATE USER BASIC INFORMATION
    --------------------------------------------- */

    if (name || email) {
      if (email) {
        const cleanEmail = email
          .trim()
          .toLowerCase();

        const [existingEmail] =
          await connection.query(
            `
            SELECT id
            FROM users
            WHERE email = ?
            AND id != ?
            LIMIT 1
            `,
            [cleanEmail, userId]
          );

        if (
          existingEmail.length > 0
        ) {
          await connection.rollback();

          return res.status(409).json({
            success: false,
            message:
              "This email is already registered.",
          });
        }
      }

      await connection.query(
        `
        UPDATE users
        SET
          name = COALESCE(?, name),
          email = COALESCE(?, email)
        WHERE id = ?
        `,
        [
          name
            ? name.trim()
            : null,

          email
            ? email
                .trim()
                .toLowerCase()
            : null,

          userId,
        ]
      );
    }

    /* ---------------------------------------------
       CALCULATE COMPLETION
    --------------------------------------------- */

    const completion =
      calculateCompletion({
        phone,
        location,
        jobTitle,
        company,
        experience,
        education,
        availability,
        avatar,
        resume,
        skills,
      });

    /* ---------------------------------------------
       CREATE OR UPDATE USER PROFILE
    --------------------------------------------- */

    await connection.query(
      `
      INSERT INTO user_profiles
      (
        user_id,
        phone,
        location,
        job_title,
        company,
        experience,
        education,
        availability,
        avatar,
        resume,
        completion
      )

      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)

      ON DUPLICATE KEY UPDATE

        phone = VALUES(phone),
        location = VALUES(location),
        job_title = VALUES(job_title),
        company = VALUES(company),
        experience = VALUES(experience),
        education = VALUES(education),
        availability = VALUES(availability),

        avatar = CASE
          WHEN VALUES(avatar) IS NULL
          OR VALUES(avatar) = ''
          THEN avatar
          ELSE VALUES(avatar)
        END,

        resume = CASE
          WHEN VALUES(resume) IS NULL
          OR VALUES(resume) = ''
          THEN resume
          ELSE VALUES(resume)
        END,

        completion = VALUES(completion)
      `,
      [
        userId,
        phone || null,
        location || null,
        jobTitle || null,
        company || null,
        experience || null,
        education || null,
        availability || null,
        avatar || null,
        resume || null,
        completion,
      ]
    );

    /* ---------------------------------------------
       UPDATE SKILLS
    --------------------------------------------- */

    await connection.query(
      `
      DELETE FROM user_skills
      WHERE user_id = ?
      `,
      [userId]
    );

    /*
      Remove empty/duplicate skills.
    */

    const cleanSkills = [
      ...new Set(
        skills
          .map((skill) =>
            String(skill).trim()
          )
          .filter(Boolean)
      ),
    ];

    for (const skill of cleanSkills) {
      await connection.query(
        `
        INSERT INTO user_skills
        (
          user_id,
          skill
        )
        VALUES (?, ?)
        `,
        [userId, skill]
      );
    }

    await connection.commit();

    /* ---------------------------------------------
       RETURN UPDATED PROFILE
    --------------------------------------------- */

    return res.status(200).json({
      success: true,
      message:
        "Profile saved successfully.",
      completion,
    });
  } catch (error) {
    if (connection) {
      await connection.rollback();
    }

    console.error(
      "Save profile error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Internal server error while saving profile.",
    });
  } finally {
    if (connection) {
      connection.release();
    }
  }
};