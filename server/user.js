import mongoose from "mongoose";

// Define schemas for job applicants and jobs
const applicantSchema = new mongoose.Schema({
    name: String,
    years_of_experience: Number,
    expected_salary: Number,
    date_of_application: Date,
    status: String,
    photo: Buffer
});

const jobSchema = new mongoose.Schema({
    job_title: String,
    applicants: [applicantSchema]
});

// Create models based on the schemas
const Applicant = mongoose.model("Applicant", applicantSchema);
const Job = mongoose.model("Job", jobSchema);

export { Applicant, Job };
