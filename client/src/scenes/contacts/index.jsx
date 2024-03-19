import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  TextField,
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

const DataTable = () => {
  const [filter, setFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
const [rowdata, setRowdata] = useState([])
const api_url = "http://localhost:5001/jobs"
useEffect(() => {
  fetch(api_url)
    .then((response) => response.json())
    .then((data) => {
      const formattedData = data.flatMap((job) =>
        job.applicants.map((applicant, index) => ({
          id: `${job._id}_${index}`, // Generate unique ID using job ID and index
          job_title: job.job_title,
          ...applicant,
          date_of_application: new Date(applicant.date_of_application).toLocaleDateString(), // Format date
        }))
      );
      setRowdata(formattedData);
    })
    .catch((error) => console.error("Error fetching data:", error));
}, [api_url]);


  

  const columns = [
    { field: "photo", headerName: "Picture", width: 200, renderCell: (params) => <img src={params.value} alt="applicant" style={{ width: '100%', height: '100%' }} /> },
    { field: "name", headerName: "Name", width: 150 },
    { field: "years_of_experience", headerName: "Experience (years)", width: 150 },
    { field: "expected_salary", headerName: "Expected Salary", width: 180 },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      cellClassName: "cellclass",
    },
    { field: "date_of_application", headerName: "Date", width: 150 }, // Added Date column
  ];
  // Filtering function
  const filteredRows = rowdata.filter((rowdata) => {
    const nameMatches = rowdata.name.toLowerCase().includes(filter.toLowerCase());
    const statusMatches = statusFilter === "all" || rowdata.status === statusFilter;
    return nameMatches && statusMatches;
  });
  

  return (
    <div style={{ margin: "5px", display: "flex", flexDirection: "column" }}>
      <h2>Applications</h2>
      <p>On Going Recruitment</p>
      <form style={{ marginBottom: "10px" }}>
        <FormControl>
          <Select
            labelId="job-select-label"
            id="job-select"
            style={{ backgroundColor: "#B9F2E5", color: "black" }}
          >
            <MenuItem value="all">All Going Recruitment</MenuItem>
            <MenuItem value="shortlisted">Software Developer</MenuItem>
            <MenuItem value="in process">UI/UX Designer</MenuItem>
            {/* Add more job options as needed */}
          </Select>
        </FormControl>
      </form>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: 400,
          width: "100%",
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          marginBottom={2}
        >
          <Box display="flex" alignItems="center">
            <Button
              onClick={() => setStatusFilter("all")}
              style={{ fontWeight: 600, fontSize: 14 }}
            >
              All
            </Button>
            <Button
              onClick={() => setStatusFilter("shortlisted")}
              style={{ fontWeight: 530, fontSize: 14 }}
            >
              Shortlisted
            </Button>
            <Button
              onClick={() => setStatusFilter("in_process")}
              style={{ fontWeight: 530, fontSize: 14 }}
            >
              In Process
            </Button>
            <Button
              onClick={() => setStatusFilter("on_hold")}
              style={{ fontWeight: 530, fontSize: 14 }}
            >
              On Hold
            </Button>
            <Button
              onClick={() => setStatusFilter("rejected")}
              style={{ fontWeight: 530, fontSize: 14 }}
            >
              Rejected
            </Button>
          </Box>
          <Box display="flex" alignItems="center">
            <TextField
              label="Search"
              variant="outlined"
              size="small"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
            <Box variant="contained" style={{ marginLeft: 8 }}>
              <FilterListIcon />
              Filter
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            height: 360,
            width: "100%",
            "& .cellclass": {
              color: "#11998E",
              fontWeight: "530",
            },
          }}
        >
          <DataGrid
            rows={filteredRows}
            columns={columns}
            pageSize={20}
            rowsPerPageOptions={[20, 20, 20]}
          />
        </Box>
      </div>
    </div>
  );
};

export default DataTable;
