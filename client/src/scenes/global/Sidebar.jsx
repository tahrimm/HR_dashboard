import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../context";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background:'white !important',
          width: isCollapsed ? "64px !important" : "250px !important", // Adjust width

        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 25px 5px 15px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#11998E !important",
        },
        "& .pro-menu-item.active": {
          color: "#11998E !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "5px 0 5px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="8px"
              >
               
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
                <Typography variant="h3" color='#11998E'>
                  Ayykori
                </Typography>
              </Box>
            )}
          </MenuItem>


          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
          <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "8px 0 5px 8px" }}
            >
              Manu
            </Typography>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="All Data & filters"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "8px 0 5px 8px" }}
            >
              Recruitment
            </Typography>
            <Item
              title="Jobs"
              to="/jobs"
              icon={<WorkOutlineIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Massages"
              to="/line"
              icon={<MailOutlineIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Career sites"
              to="/geography"
              icon={< AccountTreeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
             <Item
              title="My Referral"
              to="/pie"
              icon={<BookOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "8px 0 5px 8px" }}
            >
              Organization
            </Typography>
            
            <Item
              title="Employee"
              to="/pie"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            
            
            

            
            <Item
              title="Stucture"
              to="/form"
              icon={<StarsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Report"
              to="/faq"
              icon={< PieChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Setting"
              to="/faq"
              icon={<SettingsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Logout"
              to="/faq"
              icon={< LoginOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
