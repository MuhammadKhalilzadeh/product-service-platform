import {
  Button,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import logo from "../../assets/logos/tm-logo-png-black.png";
import { SidebarMainItems, SidebarSecondaryItems } from "./sidebar-items";
const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Stack className="tr-sidebar" sx={{ padding: 2 }}>
      <Button
        variant="outlined"
        size="large"
        sx={{
          backgroundColor: "#F4F4F4",
          border: "1px solid #DCDCDC",
          borderRadius: "8px",
          color: "#000",
        }}
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </Button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Stack className="tr-sidebar-drawer" sx={{ padding: 2 }}>
          <Stack className="tr-sidebar-drawer-logo" sx={{ marginBottom: 2 }}>
            <img
              src={logo}
              alt="logo"
              style={{ width: "100px", margin: "auto" }}
            />
          </Stack>
          <List>
            {SidebarMainItems.map((item) => (
              <ListItemButton key={item.id} sx={{ gap: 2 }}>
                <ListItemIcon sx={{ minWidth: "fit-content" }}>
                  {<item.icon />}
                </ListItemIcon>
                <ListItemText>
                  <Typography sx={{ fontSize: 13 }}>{item.label}</Typography>
                </ListItemText>
              </ListItemButton>
            ))}
          </List>
          <Divider />
          <List>
            {SidebarSecondaryItems.map((item) => (
              <ListItemButton key={item.id} sx={{ gap: 2 }}>
                <ListItemIcon sx={{ minWidth: "fit-content" }}>
                  {<item.icon />}
                </ListItemIcon>
                <ListItemText>
                  <Typography sx={{ fontSize: 13 }}>{item.label}</Typography>
                </ListItemText>
              </ListItemButton>
            ))}
          </List>
        </Stack>
      </Drawer>
    </Stack>
  );
};

export default Sidebar;
