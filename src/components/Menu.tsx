import React from "react";
import {
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import GoalIcon from "@mui/icons-material/EmojiEvents";
import DishesIcon from "@mui/icons-material/Fastfood";
import MenuIcon from "@mui/icons-material/MenuBook";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Badge } from "flowbite-react";

const Menu: React.FC = () => {
  return (
    <Paper
      style={{
        padding: "20px",
        backgroundColor: "rgb(55 55 72)",
        color: "white",
      }}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
              {" "}
              <GoalIcon />
            </span>
          </ListItemIcon>
          <ListItemText
            primary={<Typography style={{ color: "white" }}>Goals</Typography>}
          />
          <ArrowForwardIosIcon style={{ color: "white" }} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <span className="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">
              <DishesIcon />
            </span>
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography style={{ color: "white" }}>Popular Dishes</Typography>
            }
          />
          <ArrowForwardIosIcon style={{ color: "white" }} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
              <MenuIcon />
            </span>
          </ListItemIcon>
          <ListItemText
            primary={<Typography style={{ color: "white" }}>Menus</Typography>}
          />
          <ArrowForwardIosIcon style={{ color: "white" }} />
        </ListItem>
      </List>
    </Paper>
  );
};

export default Menu;
