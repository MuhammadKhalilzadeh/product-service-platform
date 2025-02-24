import "./index.css";
import { Stack } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <Stack
      className="dashbaord-layout"
      sx={{
        flexDirection: "row",
        gap: 14,
        position: "relative",
        minHeight: "100vh",
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      <Sidebar />
      <Outlet />
    </Stack>
  );
};

export default Dashboard;
