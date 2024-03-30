import express from "express";
import {
  handelRedirectLink,
  handelTelegramRedirectLink,
} from "../controllers/linkRedirectController.js";

const router = express.Router();

// This will redirect to user to the original link
router.route("/:id").get(handelRedirectLink);
router.route("/tg/:id").get(handelTelegramRedirectLink);
export default router;
