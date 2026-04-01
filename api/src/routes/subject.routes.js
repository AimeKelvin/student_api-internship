import express from "express";
import { addSubject, getAllSubjects, getSubjectById } from "../controllers/subject.controller.js";

// Create router instance
const router = express.Router();

// Define POST route for adding subject
router.post("/subject", addSubject);
router.get("/subjects", getAllSubjects )
router.get("/subject/:id",getSubjectById );

// Export router
export default router;