import React from "react";
import "../assets/css/Dashboard.css"; // Import your custom CSS file
import { ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import RedeemSharpIcon from "@mui/icons-material/RedeemSharp";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { selectUser } from "./redux/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import './Dashboard.css'
import {removeCustomer } from './customerSlice'
const Dashboard = () => {
  const drawerWidth = "250px";
  const user = useSelector(selectUser);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  const customers = useSelector((state) => state.customers.customers);

  return (
    <div className="dashboard-container">
      {/* Navbar */}
      <div className="navbar">
        {/* Navbar content */}
        <ul>
          <li>
            <a href="#organization">{email}</a>
          </li>
          <li>
            <a href="#volunteer">About</a>
          </li>
          <li>
            <a href="/">Logout</a>
          </li>
        </ul>
      </div>

      <div className="sidebar">
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: "rgb(49, 49, 48)",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto", color: "white" }}>
            <List>
              {[
                {
                  text: "Dashboard",
                  icon: <DashboardIcon sx={{ color: "white" }} />,
                },
                {
                  text: "Volunteers",
                  icon: <HomeIcon sx={{ color: "white" }} />,
                  route: "/home",
                },
                {
                  text: "Users",
                  icon: <RedeemSharpIcon sx={{ color: "white" }} />,
                },
                {
                  text: "Analytics",
                  icon: <AccountCircleRoundedIcon sx={{ color: "white" }} />,
                },
              ].map((item, index) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </div>

      {/* Main Content */}
      <table className="custom-table">
        <thead>
          <tr className="custom-header">
            <th className="custom-header-cell">First Name</th>
            <th className="custom-header-cell">Last Name</th>
            <th className="custom-header-cell">Email</th>
            {/* <th className="p-4">Phone</th> */}
            <th className="custom-header-cell">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id} className="custom-row">
              <td className="custom-cell">{customer.fname}</td>
              <td className="custom-cell">{customer.lname}</td>
              <td className="custom-cell">{customer.un}</td>
              <td className="custom-cell">
                <button
                  onClick={() => dispatch(removeCustomer(customer.id))}
                  className="custom-button"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        
      </table>
    </div>
  );
};

export default Dashboard;
