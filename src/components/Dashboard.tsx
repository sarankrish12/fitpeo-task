// src/components/Dashboard.tsx

import React from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  IconButton,
  CircularProgress,
  Badge,
} from "@mui/material";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  AccountCircle,
  Notifications,
  Email,
  Search,
} from "@mui/icons-material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CancelIcon from "@mui/icons-material/Cancel";
import Menu from "./Menu";
import ActivityChart from "./ActivityChart";
import Sidebar from "./Sidebar";
import RecentOrders from "./RecentOrders";
import CustomerFeedback from "./CustomerFeedback";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard: React.FC = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box
        sx={{
          flexGrow: 1,
          padding: 3,
          backgroundColor: "#1e1e2f",
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <Box display="flex" alignItems="center">
            <Search style={{ color: "white", marginRight: 8 }} />
            <input
              type="text"
              placeholder="Search..."
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "white",
              }}
            />
          </Box>
          <Box display="flex" alignItems="center">
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <Email style={{ color: "white" }} />
              </Badge>
            </IconButton>
            <IconButton>
              <Notifications style={{ color: "white" }} />
            </IconButton>
            <IconButton>
              <AccountCircle style={{ color: "white" }} />
            </IconButton>
          </Box>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={2}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                backgroundColor: "rgb(55 55 72)",
                color: "#fff",
              }}
            >
              <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                <ShoppingCartIcon sx={{ fontSize: 40, mb: 1 }} />
              </span>
              <Typography width={"100%"} variant="body1">
                Total Orders
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Typography variant="body2">
                  <b>75</b>
                </Typography>
                <Typography
                  variant="body2"
                  color="green"
                  sx={{ marginLeft: 1 }}
                >
                  ▲ 3%
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                backgroundColor: "rgb(55 55 72)",
                color: "#fff",
              }}
            >
              <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                <LocalShippingIcon sx={{ fontSize: 40, mb: 1 }} />
              </span>
              <Typography variant="body1">Total Delivered</Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Typography variant="body2">70</Typography>
                <Typography variant="body2" color="red">
                  ▼ 3%
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                backgroundColor: "rgb(55 55 72)",
                color: "#fff",
              }}
            >
              <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                <CancelIcon sx={{ fontSize: 40, mb: 1 }} />
              </span>

              <Typography variant="body1">Total Cancelled</Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Typography variant="body2">05</Typography>
                <Typography variant="body2" color="green">
                  ▲ 3%
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                backgroundColor: "rgb(55 55 72)",
                color: "#fff",
              }}
            >
              <span className="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">
                <MonetizationOnIcon sx={{ fontSize: 40, mb: 1 }} />
              </span>

              <Typography variant="body1">Total Revenue</Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Typography variant="body2">$12k</Typography>
                <Typography variant="body2" color="red">
                  ▼ 3%
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "rgb(55 55 72)",
                color: "#fff",
              }}
            >
              <Box>
                <Typography>Net Profit</Typography>
                <Typography variant="h4">$6759.25</Typography>
                <Typography variant="body1" color="green">
                  ▲ 3%
                </Typography>
              </Box>
              <Box sx={{ position: "relative", display: "inline-flex" }}>
                <CircularProgress
                  variant="determinate"
                  value={70}
                  size={80}
                  thickness={4}
                />
                <Box
                  sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="caption"
                    component="div"
                    color="textSecondary"
                  >
                    70%
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        <Grid container marginTop={"5px"} spacing={3}>
          <Grid item xs={12} md={8}>
            <Paper
              style={{
                backgroundColor: "rgb(55 55 72)",
                color: "white",
                fontSize: "14px",
              }}
            >
              <ActivityChart />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Menu />
          </Grid>
        </Grid>
        <Grid marginTop={"5px"} container spacing={3}>
          <RecentOrders />
          <CustomerFeedback />
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
