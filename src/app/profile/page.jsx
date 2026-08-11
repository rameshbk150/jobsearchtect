"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Pencil,
  FileText,
  Lock,
  Bell,
  ShieldCheck,
  CheckCircle2,
  UserRound,
  Download,
  Upload,
  ChevronRight,
  Award,
  CalendarDays,
  Building2,
  Loader2,
} from "lucide-react";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /* ================================= */
  /* GET PROFILE FROM DATABASE */
  /* ================================= */

  useEffect(() => {
    const getProfile = async () => {
      try {
        setLoading(true);
        setError("");

        // TEMPORARY:
        // Later replace this with logged-in user's ID
        const userId = 1;

        const response = await fetch(
          `http://localhost:5000/api/profile/${userId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || "Failed to load profile"
          );
        }

        const profile = data.profile;

        setUser({
          id: profile.id,
          userId: profile.user_id,

          name: profile.name || "",
          email: profile.email || "",
          phone: profile.phone || "",
          location: profile.location || "",

          title: profile.job_title || "",
          company: profile.company || "",
          experience: profile.experience || "",
          education: profile.education || "",
          availability: profile.availability || "",

          skills: profile.skills || [],

          resume:
            profile.resume || "No resume uploaded",

          avatar:
            profile.avatar ||
            "https://i.pravatar.cc/300?img=12",

          completion:
            profile.completion || 0,
        });
      } catch (error) {
        console.error(
          "Profile fetch error:",
          error
        );

        setError(
          error.message ||
            "Unable to load profile"
        );
      } finally {
        setLoading(false);
      }
    };

    getProfile();
  }, []);

  /* ================================= */
  /* LOADING */
  /* ================================= */

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f7f9fc]">
        <div className="flex flex-col items-center gap-4">
          <Loader2
            size={36}
            className="animate-spin text-blue-600"
          />

          <p className="text-sm font-medium text-slate-500">
            Loading profile...
          </p>
        </div>
      </main>
    );
  }

  /* ================================= */
  /* ERROR */
  /* ================================= */

  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f7f9fc] px-4">
        <div className="w-full max-w-md rounded-2xl border border-red-100 bg-white p-6 text-center shadow-sm">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-500">
            <UserRound size={22} />
          </div>

          <h2 className="mt-4 text-xl font-bold text-slate-950">
            Profile Not Available
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            {error}
          </p>

          <Link
            href="/profile/edit"
            className="mt-5 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            <Pencil size={16} />
            Create Profile
          </Link>
        </div>
      </main>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <main className="min-h-screen bg-[#f7f9fc]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">

        {/* ================================= */}
        {/* PAGE HEADER */}
        {/* ================================= */}

        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-500">
              <span>Account</span>

              <ChevronRight size={14} />

              <span className="text-blue-600">
                Profile
              </span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              My Profile
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Keep your profile updated to improve your chances of getting
              discovered by top employers.
            </p>
          </div>

          <Link
            href="/profile/edit"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md"
          >
            <Pencil size={16} />
            Edit Profile
          </Link>
        </div>

        {/* ================================= */}
        {/* PROFILE HERO */}
        {/* ================================= */}

        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="relative h-40 overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600">
            <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-white/10" />

            <div className="absolute right-32 top-14 h-28 w-28 rounded-full bg-white/10" />

            <div className="absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-black/10 to-transparent" />
          </div>

          <div className="px-5 pb-7 sm:px-8">
            <div className="-mt-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

              {/* PROFILE DETAILS */}

              <div className="flex flex-col gap-5 sm:flex-row sm:items-end">
                <div className="relative w-fit">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="h-32 w-32 rounded-3xl border-[5px] border-white bg-white object-cover shadow-lg"
                  />

                  <div className="absolute -bottom-2 -right-2 flex h-9 w-9 items-center justify-center rounded-full border-4 border-white bg-emerald-500 text-white">
                    <CheckCircle2 size={16} />
                  </div>
                </div>

                <div className="pb-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
                      {user.name}
                    </h2>

                    <span className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                      Active
                    </span>
                  </div>

                  <p className="mt-1 text-base font-semibold text-slate-600">
                    {user.title || "Job title not added"}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
                    <span className="flex items-center gap-2">
                      <MapPin
                        size={16}
                        className="text-blue-600"
                      />

                      {user.location ||
                        "Location not added"}
                    </span>

                    <span className="flex items-center gap-2">
                      <Briefcase
                        size={16}
                        className="text-blue-600"
                      />

                      {user.experience ||
                        "Experience not added"}
                    </span>

                    <span className="flex items-center gap-2">
                      <Building2
                        size={16}
                        className="text-blue-600"
                      />

                      {user.company ||
                        "Company not added"}
                    </span>
                  </div>
                </div>
              </div>

              {/* PROFILE COMPLETION */}

              <div className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 lg:max-w-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Profile strength
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Complete your profile for better visibility
                    </p>
                  </div>

                  <span className="text-xl font-bold text-blue-600">
                    {user.completion}%
                  </span>
                </div>

                <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-slate-200">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-500"
                    style={{
                      width: `${user.completion}%`,
                    }}
                  />
                </div>

                <Link
                  href="/profile/edit"
                  className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700"
                >
                  Complete profile
                  <ChevronRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ================================= */}
        {/* MAIN CONTENT */}
        {/* ================================= */}

        <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_360px]">

          {/* LEFT */}

          <div className="space-y-6">

            {/* PERSONAL */}

            <SectionCard
              eyebrow="Personal"
              title="Personal Information"
              icon={
                <UserRound size={21} />
              }
              actionHref="/profile/edit"
              actionText="Edit"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <DetailBox
                  icon={<Mail size={18} />}
                  label="Email Address"
                  value={
                    user.email ||
                    "Not added"
                  }
                />

                <DetailBox
                  icon={<Phone size={18} />}
                  label="Phone Number"
                  value={
                    user.phone ||
                    "Not added"
                  }
                />

                <DetailBox
                  icon={<MapPin size={18} />}
                  label="Current Location"
                  value={
                    user.location ||
                    "Not added"
                  }
                />

                <DetailBox
                  icon={
                    <CalendarDays
                      size={18}
                    />
                  }
                  label="Availability"
                  value={
                    user.availability ||
                    "Not added"
                  }
                />
              </div>
            </SectionCard>

            {/* PROFESSIONAL */}

            <SectionCard
              eyebrow="Career"
              title="Professional Details"
              icon={
                <Briefcase size={21} />
              }
              actionHref="/profile/edit"
              actionText="Edit"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <DetailBox
                  icon={
                    <Briefcase size={18} />
                  }
                  label="Current Job Title"
                  value={
                    user.title ||
                    "Not added"
                  }
                />

                <DetailBox
                  icon={
                    <Building2 size={18} />
                  }
                  label="Current Company"
                  value={
                    user.company ||
                    "Not added"
                  }
                />

                <DetailBox
                  icon={<Award size={18} />}
                  label="Total Experience"
                  value={
                    user.experience ||
                    "Not added"
                  }
                />

                <DetailBox
                  icon={
                    <GraduationCap
                      size={18}
                    />
                  }
                  label="Highest Education"
                  value={
                    user.education ||
                    "Not added"
                  }
                />
              </div>
            </SectionCard>

            {/* SKILLS */}

            <SectionCard
              eyebrow="Expertise"
              title="Skills"
              icon={<Award size={21} />}
              actionHref="/profile/edit"
              actionText="Manage Skills"
            >
              {user.skills.length > 0 ? (
                <div className="flex flex-wrap gap-2.5">
                  {user.skills.map(
                    (skill) => (
                      <span
                        key={skill}
                        className="rounded-xl border border-blue-100 bg-blue-50 px-3.5 py-2 text-sm font-semibold text-blue-700 transition hover:border-blue-200 hover:bg-blue-100"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              ) : (
                <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-5 text-center">
                  <p className="text-sm text-slate-500">
                    No skills added yet.
                  </p>

                  <Link
                    href="/profile/edit"
                    className="mt-2 inline-flex text-sm font-semibold text-blue-600"
                  >
                    Add Skills
                  </Link>
                </div>
              )}
            </SectionCard>

            {/* RESUME */}

            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-500">
                    <FileText size={25} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                      Resume
                    </p>

                    <h3 className="mt-1 truncate text-base font-bold text-slate-900">
                      {user.resume}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      Your currently uploaded resume
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {user.resume !==
                    "No resume uploaded" && (
                    <button
                      type="button"
                      className="inline-flex h-10 items-center gap-2 rounded-xl border border-slate-200 px-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                    >
                      <Download size={16} />
                      Download
                    </button>
                  )}

                  <Link
                    href="/profile/edit"
                    className="inline-flex h-10 items-center gap-2 rounded-xl bg-blue-600 px-4 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    <Upload size={16} />

                    {user.resume ===
                    "No resume uploaded"
                      ? "Upload"
                      : "Update"}
                  </Link>
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT */}

          <div className="space-y-6">

            {/* PROFILE TIPS */}

            <section className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                <CheckCircle2 size={21} />
              </div>

              <h3 className="mt-4 text-lg font-bold text-slate-950">
                Improve your profile
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Complete all important information to improve your visibility
                to recruiters.
              </p>

              <div className="mt-5 space-y-3">
                <ProfileTip
                  label="Personal information"
                  completed={
                    Boolean(
                      user.name &&
                        user.email &&
                        user.phone
                    )
                  }
                />

                <ProfileTip
                  label="Professional details"
                  completed={
                    Boolean(
                      user.title &&
                        user.experience
                    )
                  }
                />

                <ProfileTip
                  label="Add skills"
                  completed={
                    user.skills.length > 0
                  }
                />

                <ProfileTip
                  label="Upload resume"
                  completed={
                    user.resume !==
                    "No resume uploaded"
                  }
                />
              </div>
            </section>

            {/* SETTINGS */}

            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                Account
              </p>

              <h2 className="mt-1 text-xl font-bold text-slate-950">
                Settings
              </h2>

              <div className="mt-5 space-y-2">
                <SettingItem
                  icon={<Lock size={18} />}
                  title="Change Password"
                />

                <SettingItem
                  icon={<Bell size={18} />}
                  title="Job Notifications"
                />

                <SettingItem
                  icon={
                    <ShieldCheck size={18} />
                  }
                  title="Privacy Settings"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

/* ================================= */
/* SECTION CARD */
/* ================================= */

function SectionCard({
  eyebrow,
  title,
  icon,
  actionHref,
  actionText,
  children,
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            {icon}
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
              {eyebrow}
            </p>

            <h2 className="mt-1 text-xl font-bold text-slate-950">
              {title}
            </h2>
          </div>
        </div>

        <Link
          href={actionHref}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
        >
          <Pencil size={14} />
          {actionText}
        </Link>
      </div>

      {children}
    </section>
  );
}

/* ================================= */
/* DETAIL BOX */
/* ================================= */

function DetailBox({
  icon,
  label,
  value,
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-xs font-medium text-slate-500">
          {label}
        </p>

        <p className="mt-1 break-words text-sm font-semibold text-slate-900">
          {value}
        </p>
      </div>
    </div>
  );
}

/* ================================= */
/* PROFILE TIP */
/* ================================= */

function ProfileTip({
  label,
  completed = false,
}) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`flex h-5 w-5 items-center justify-center rounded-full ${
          completed
            ? "bg-emerald-500 text-white"
            : "border-2 border-slate-300 bg-white"
        }`}
      >
        {completed && (
          <CheckCircle2 size={13} />
        )}
      </div>

      <span
        className={`text-sm ${
          completed
            ? "font-medium text-slate-700"
            : "text-slate-500"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

/* ================================= */
/* SETTING ITEM */
/* ================================= */

function SettingItem({
  icon,
  title,
}) {
  return (
    <button
      type="button"
      className="group flex w-full items-center justify-between rounded-xl px-3 py-3 text-left transition hover:bg-slate-50"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition group-hover:bg-blue-50 group-hover:text-blue-600">
          {icon}
        </div>

        <span className="text-sm font-semibold text-slate-700">
          {title}
        </span>
      </div>

      <ChevronRight
        size={17}
        className="text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-blue-600"
      />
    </button>
  );
}