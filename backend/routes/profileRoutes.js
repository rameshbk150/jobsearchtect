import express from "express";

import {
  getProfile,
  saveProfile,
} from "../controllers/profileController.js";

const router = express.Router();

/* =========================================
   GET USER PROFILE
   GET /api/profile/:userId
========================================= */

router.get("/:userId", getProfile);

/* =========================================
   CREATE / UPDATE USER PROFILE
   POST /api/profile
========================================= */

router.post("/", saveProfile);

/* =========================================
   IMPORTANT DEFAULT EXPORT
========================================= */

export default router;