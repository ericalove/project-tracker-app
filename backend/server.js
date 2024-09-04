import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import projectRoutes from "./routes/project.route.js"

dotenv.config();

const app = express();

app.use(express.json());

app.use ("/api/projects", projectRoutes);

app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});
