import { CircularProgress } from "@mui/material";

const TMLoadingPage = () => {
  return (
    <CircularProgress
      color="secondary"
      size={100} // Increased size for width
      sx={{
        borderRadius: "50%",
        padding: 2,
        boxShadow: "0 0 50px #fff",
      }}
    />
  );
};

export default TMLoadingPage;
