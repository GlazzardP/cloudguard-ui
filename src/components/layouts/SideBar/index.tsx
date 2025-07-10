import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";

import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useNavigate } from "react-router-dom";

import CGIcon from "../../../assets/icons/CGIcon.png";
import { useTheme } from "@mui/material";

const drawerWidth = 175;

const LINKS = [
  {
    path: "/",
    icon: <DashboardIcon fontSize="large" />,
    hoverText: "Dashboard",
  },
  {
    path: "/warnings",
    icon: <WarningAmberIcon fontSize="large" />,
    hoverText: "Warnings",
  },
  {
    path: "/settings",
    icon: <SettingsIcon fontSize="large" />,
    hoverText: "Settings",
  },
];
const Sidebar = () => {
  const navigate = useNavigate();
  const { custom } = useTheme();

  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
        backgroundColor: custom.colors.backgroundLight,
      }}
    >
      <Drawer
        variant="permanent"
        sx={{
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            border: "none",
          },
        }}
        open
      >
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyItems: "center",
            gap: "3rem",
          }}
        >
          <ListItem disablePadding>
            <ListItemButton sx={{ display: "flex", justifyContent: "center" }}>
              <ListItemIcon>
                <img
                  src={CGIcon}
                  alt="CloudGuard icon"
                  width={44}
                  height={44}
                />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          {LINKS.map((page) => (
            <ListItem
              key={page.path}
              disablePadding
              onClick={() => navigate(page.path)}
            >
              <ListItemButton
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <ListItemIcon>{page.icon}</ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
