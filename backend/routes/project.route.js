import express from "express";

import { getProjects, createProjects, updateProjects, deleteProjects } from "../controllers/project.controller.js"

const router = express.Router();

router.get("/", getProjects);
router.post("/", createProjects);
router.put("/:id", updateProjects);
router.delete("/:id", deleteProjects);

export default router;
