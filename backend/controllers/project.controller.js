import mongoose from 'mongoose';
import Project from '../models/project.model.js';

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({});
    res.status(200).json({ success: true, data: projects });
  } catch (error) {
    console.log("error in fetching projects:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const createProjects = async (req, res) => {
  const project = req.body;

  if (!project.name || !project.category || !project.url || !project.image || !project.hotlist || !project.progress) {
    return res.status(400).json({ success:false, message: "Please provide all required fields" });
  }

  const newProject = new Project(project)

  try {
    await newProject.save();
    res.status(201).json({ success: true, data: newProject});
  } catch (error) {
    console.error("Error in creating project:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const updateProjects = async (req, res) => {
  const { id } = req.params;

  const project = req.body;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({success:false, message: "Invalid Project Id"});
  }

  try {
    const updatedProject = await Project.findByIdAndUpdate(id, project, {new:true});
    res.status(200).json({ success:true, data: updatedProject });
  } catch (error) {
    res.status(500).json({ success:false, message: "Server Error"});
  }
};

export const deleteProjects = async (req, res) => {
  const {id} = req.params
  console.log("id:", id);
  try{
    await Project.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Project deleted!" });
  } catch (error) {
    console.log("error in deleting project:", error.message);
    res.status(404).json({ success: false, message: "Project not found."});
  }
};
