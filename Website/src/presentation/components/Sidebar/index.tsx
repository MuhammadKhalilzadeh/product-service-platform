import {
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material";
import { toggleSidebar } from "../../../application/slicers/sidebarSlice";
import logo from "../../assets/logos/tm-logo-png-black.png";
import { SidebarMainItems, SidebarSecondaryItems } from "./sidebar-items";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Sidebar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const collapsed = useSelector((state: any) => state.sidebar?.isCollapsed);

  return (
    <Stack
      component="aside"
      className={`sidebar-menu ${collapsed ? "collapsed" : "expanded"}`}
      sx={{
        width: collapsed ? "80px" : "280px",
        height: "100vh",
        transition: "width 0.2s ease",
        borderRight: 1,
        borderColor: theme.palette.divider,
        position: "relative",
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2),
        px: 0,
      }}
    >
      {/* Logo section */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap={2}
        sx={{ mb: 4, pl: collapsed ? 1 : 2 }}
      >
        <img src={logo} alt="Logo" style={{ width: collapsed ? 40 : 150 }} />
      </Stack>
      {/* Toggle button */}
      <IconButton
        sx={{
          position: "absolute",
          top: 40,
          right: 0,
          transform: `translate(50%, 0)`,
          backgroundColor: theme.palette.background.default,
          border: 1,
          borderColor: theme.palette.divider,
          p: theme.spacing(0.5),
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        }}
        onClick={() => dispatch(toggleSidebar())}
      >
        {collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </IconButton>

      {/* Main menu items */}
      <List sx={{ px: collapsed ? 1 : 2 }}>
        {SidebarMainItems.map((item) => (
          <Tooltip
            key={item.id}
            title={collapsed ? item.label : ""}
            placement="right"
            disableInteractive
          >
            <ListItemButton
              onClick={() => navigate(item.path)}
              sx={{
                gap: 2,
                borderRadius: 1,
                minHeight: "40px",
                backgroundColor:
                  location.pathname === item.path ? "#F9F9F9" : "transparent",
                "&:hover": { backgroundColor: "#F9F9F9" },
                justifyContent: collapsed ? "center" : "flex-start",
                px: collapsed ? 1 : 2,
              }}
            >
              <ListItemIcon
                sx={{ minWidth: collapsed ? "auto" : "fit-content" }}
              >
                {<item.icon />}
              </ListItemIcon>
              {!collapsed && (
                <ListItemText>
                  <Typography sx={{ fontSize: 13 }}>{item.label}</Typography>
                </ListItemText>
              )}
            </ListItemButton>
          </Tooltip>
        ))}
      </List>

      <Divider sx={{ my: 2 }} />

      {/* Secondary menu items */}
      <List sx={{ px: collapsed ? 1 : 2 }}>
        {SidebarSecondaryItems.map((item) => (
          <Tooltip
            key={item.id}
            title={collapsed ? item.label : ""}
            placement="right"
            disableInteractive
          >
            <ListItemButton
              onClick={() => navigate(item.path)}
              sx={{
                gap: 2,
                borderRadius: 1,
                minHeight: "40px",
                backgroundColor:
                  location.pathname === item.path ? "#F9F9F9" : "transparent",
                "&:hover": { backgroundColor: "#F9F9F9" },
                justifyContent: collapsed ? "center" : "flex-start",
                px: collapsed ? 1 : 2,
              }}
            >
              <ListItemIcon
                sx={{ minWidth: collapsed ? "auto" : "fit-content" }}
              >
                {<item.icon />}
              </ListItemIcon>
              {!collapsed && (
                <ListItemText>
                  <Typography sx={{ fontSize: 13 }}>{item.label}</Typography>
                </ListItemText>
              )}
            </ListItemButton>
          </Tooltip>
        ))}
      </List>
    </Stack>
  );
};

export default Sidebar;
