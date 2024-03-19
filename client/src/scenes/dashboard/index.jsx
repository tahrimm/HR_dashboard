import React from "react";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../context";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/RadarChart";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";
import JobsSection from "../../components/jobssection";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="10px" display="flex">
      {" "}
      {/* Adjusted to flex display */}
      {/* Left Section */}
      <Box flex="6">
        {/* HEADER */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          m="15px"
        >
          <Typography variant="h4">Good morning</Typography>
          <Box
            backgroundColor="#B9F2E5" // Set background color for the search box
            borderRadius="3px"
            display="flex"
            alignItems="center"
          >
            <InputBase
              sx={{ ml: 1, flex: 1, color: "#11998E" }} // Set color for the text input
              placeholder="Search"
            />
            <IconButton type="button" sx={{ p: 1, color: "#11998E" }}>
              {" "}
              {/* Set color for the search icon */}
              <SearchIcon />
            </IconButton>
          </Box>
        </Box>
        {/* GRID & CHARTS */}
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="140px"
          gap="10px"
        >
          {/* ROW 2 */}
          <Box
            gridColumn="span 4"
            gridRow="span 1"
            backgroundColor={colors.primary[400]}
          >
            <Box
              mt="25px"
              p="0 30px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                LineChart data
              </Typography>
              
            </Box>
            <Box height="250px" m="-20px 0 0 0">
              <LineChart isDashboard={true} />
            </Box>
          </Box>
          <Box
            gridColumn="span 4"
            gridRow="span 1"
            backgroundColor={colors.primary[400]}
            overflow="hidden"
          >
            <Typography
              variant="h5"
              fontWeight="600"
              sx={{ marginBottom: "15px" }}
            >
              Country Based Traffic
            </Typography>
            <Box height="200px">
              <GeographyChart isDashboard={true} />
            </Box>
          </Box>
          {/* ROW 3 */}
          <Box
            gridColumn="span 4"
            gridRow="span 1"
            backgroundColor={colors.primary[400]}
          >
            <Typography
              variant="h5"
              fontWeight="600"
              sx={{ padding: "30px 30px 0 30px" }}
            >
              Pie chart data
            </Typography>
            <Box height="250px" mt="-20px">
              <PieChart isDashboard={true} />
            </Box>
          </Box>
          <Box
            gridColumn="span 8"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
          >
            <Typography
              variant="h5"
              fontWeight="600"
              sx={{ padding: "30px 30px 0 30px" }}
            >
              Sales Quantity
            </Typography>
            <Box height="250px" mt="-20px">
              <BarChart isDashboard={true} />
            </Box>
          </Box>
          <Box
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
          >
            <Box
              mt="25px"
              p="0 30px"
              display="flex "
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                LineChart data
              </Typography>
              
            </Box>
            <Box height="250px" m="-20px 0 0 0">
              <LineChart isDashboard={true} />
            </Box>
          </Box>
          <Box
            gridColumn="span 8"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
          >
            <Box
              mt="25px"
              p="0 30px"
              display="flex "
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                LineChart data
              </Typography>
              
            </Box>
            <Box height="250px" m="-20px 0 0 0">
              <LineChart isDashboard={true} />
            </Box>
          </Box>
          <Box
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
          >
            <Box
              mt="25px"
              p="0 30px"
              display="flex "
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                LineChart data
              </Typography>
             
            </Box>
            <Box height="250px" m="-20px 0 0 0">
              <LineChart isDashboard={true} />
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Right Section */}
      <Box flex="1">
        <JobsSection /> {/* Integrating the JobsSection component */}
      </Box>
    </Box>
  );
};

export default Dashboard;
