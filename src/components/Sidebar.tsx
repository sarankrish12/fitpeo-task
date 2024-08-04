import { Box } from "@mui/material";
import TooltipSidebar from "@mui/material/Tooltip";
import {
  Home,
  MenuBook,
  AssignmentTurnedIn,
  RestaurantMenu,
} from "@mui/icons-material";
import { styled } from "@mui/system";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";

const Sidebar: React.FC = () => {
  const SidebarItem = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1),
    color: "white",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#333",
    },
  }));
  return (
    <Box
      sx={{
        width: "auto",
        backgroundColor: "#2c2c3e",
        height: "100vh",
        padding: "16px 5px",
      }}
    >
      <SidebarItem sx={{ marginBottom: "20px", alignItems: "center" }}>
        <TooltipSidebar title="Fitpeo">
          <BreakfastDiningIcon sx={{ marginRight: 1, color: "#3f51b5" }} />
        </TooltipSidebar>
      </SidebarItem>
      <SidebarItem>
        <TooltipSidebar title="Dashboard">
          <Home
            sx={{
              marginRight: 1,
              color: "#3f51b5",
            }}
          />
        </TooltipSidebar>
      </SidebarItem>
      <SidebarItem sx={{ marginBottom: "8px", alignItems: "center" }}>
        <TooltipSidebar title="Popular Dishes">
          <MenuBook sx={{ marginRight: 1 }} />
        </TooltipSidebar>
      </SidebarItem>
      <SidebarItem sx={{ marginBottom: "8px", alignItems: "center" }}>
        <TooltipSidebar title="Goals">
          <AssignmentTurnedIn sx={{ marginRight: 1 }} />
        </TooltipSidebar>
      </SidebarItem>
      <SidebarItem sx={{ marginBottom: "8px", alignItems: "center" }}>
        <TooltipSidebar title="Menus">
          <RestaurantMenu sx={{ marginRight: 1 }} />
        </TooltipSidebar>
      </SidebarItem>
      <SidebarItem sx={{ marginBottom: "8px", alignItems: "center" }}>
        <TooltipSidebar title="Shopping">
          <AddShoppingCartIcon sx={{ marginRight: 1 }} />
        </TooltipSidebar>
      </SidebarItem>
    </Box>
  );
};

export default Sidebar;
