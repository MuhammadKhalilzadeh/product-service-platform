import MapIcon from "@mui/icons-material/Map";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import HistoryIcon from "@mui/icons-material/History";
import BusinessIcon from "@mui/icons-material/Business";

import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
export const SidebarMainItems = [
  {
    id: 1,
    icon: MapIcon,
    label: "Global Map",
    path: "/",
  },
  {
    id: 2,
    icon: HourglassBottomIcon,
    label: "Orders",
    path: "/orders",
  },
  {
    id: 3,
    icon: HistoryIcon,
    label: "History",
    path: "/history",
  },
  {
    id: 4,
    icon: BusinessIcon,
    label: "Business",
    path: "/business",
  },
];

export const SidebarSecondaryItems = [
  {
    id: 5,
    icon: SettingsIcon,
    label: "Settings",
    path: "/settings",
  },
  {
    id: 6,
    icon: PersonIcon,
    label: "Profile",
    path: "/profile",
  },
];
