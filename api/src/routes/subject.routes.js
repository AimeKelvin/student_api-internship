import express from "express";
import { addSubject, getAllSubjects, getSubjectById, deleteSubjectById, updateSubjectById } from "../controllers/subject.controller.js";

// Create router instance
const router = express.Router();

// Define POST route for adding subject
router.post("/subject", addSubject);
router.get("/subjects", getAllSubjects )
router.get("/subject/:id",getSubjectById );
router.delete("/subject/:id",deleteSubjectById );
router.put("/subject/:id",updateSubjectById );

// Export router
export default router;