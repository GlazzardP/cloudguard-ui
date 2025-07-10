import { Typography, Box } from "@mui/material";
import CommandDashboard from "../../features/Dashboard";

const DashboardPage = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Command Centre
      </Typography>
      <CommandDashboard />
    </Box>
  );
};

export default DashboardPage;
