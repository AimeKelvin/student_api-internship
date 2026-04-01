import express from "express";
import { addSubject } from "../controllers/subject.controller.js";

// Create router instance
const router = express.Router();

// Define POST route for adding subject
router.post("/subject", addSubject);

// Export router
export default router;