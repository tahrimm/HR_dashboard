import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { jobdata } from './exampledata.js'; // Importing the jobdata array
import { Applicant, Job } from "./user.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`Connected to MongoDB`);
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
   
    // jobdata.jobs.forEach(async (job) => {
    //   // Replace photo URLs with your own URLs
    //   job.applicants.forEach(applicant => {
    //     // Assuming you have 3 photos and you want to rotate them
    //     applicant.photo = `C:/Users/Tahrim/Documents/Project/HR dashboard/server/${Math.floor(Math.random() * 3) + 1}.jpg`;
    //   });

    //   const newJob = new Job({ job_title: job.job_title, applicants: job.applicants });
    //   try {
    //     await newJob.save();
    //     console.log(`Inserted job: ${job.job_title}`);
    //   } catch (error) {
    //     console.error(`Error inserting job: ${job.job_title}`, error);
    //   }
    // });
  
  })
  .catch((error) => console.error(`${error} did not connect`));

  app.get("/jobs", async (req, res) => {
    try {
      // Fetch all jobs from the database
      const jobs = await Job.find();
      res.json(jobs);
    } catch (error) {
      console.error("Error fetching job data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
