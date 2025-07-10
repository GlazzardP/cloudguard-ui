import { Box, Typography } from "@mui/material";
import CardBase from "./Card";
import CGScoreCard from "./Cards/CGScoreCard";
import TriageCard from "./Cards/TriageCard";
import { openModal } from "../../app/redux/slices/modalSlice";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../app/redux/store";

const cardStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const CommandDashboard = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: 2.5,
        p: 2,
        width: "100%",
        "& > *": {
          transition: "box-shadow 0.2s ease, border 0.2s ease",
          cursor: "default",

          "&:hover": {
            boxShadow: `
            0 0 8px 2px rgba(64, 224, 208, 0.6), 
            0 0 12px 4px rgba(64, 224, 208, 0.4),
            0 0 16px 6px rgba(64, 224, 208, 0.2)
          `,
            cursor: "pointer",
          },
        },
      }}
    >
      <CardBase
        onClick={() => dispatch(openModal())}
        children={<CGScoreCard />}
        title="Your CG Score"
      />

      <CardBase children={<div></div>} title="Incidents by Severity" />

      <CardBase
        children={
          <Box sx={cardStyles}>
            <Typography fontSize={60}>22%</Typography>
          </Box>
        }
        title="Automation Impact"
      />

      <CardBase
        children={
          <Box sx={cardStyles}>
            {" "}
            <Typography fontSize={60}>55</Typography>
          </Box>
        }
        title="Monitored Assets"
      />

      <Box sx={{ gridRow: "span 2" }}>
        <CardBase children={<TriageCard />} title="Triage Feed" />
      </Box>
      <Box sx={{ gridColumn: "span 2" }}>
        <CardBase
          children={<div>{/* <FunnelChartHorizontal /> */}</div>}
          title="Incident Summary"
        />
      </Box>

      <CardBase
        children={
          <Box display={"flex"} alignItems={"baseline"}>
            <Typography fontSize={60}>22 </Typography>
            <Typography>minutes</Typography>
          </Box>
        }
        title="Mean Time to Respond"
      />

      <CardBase
        children={
          <Box sx={cardStyles}>
            {" "}
            <Typography fontSize={60}>2.2</Typography>
          </Box>
        }
        title="Data Consumed"
      />
    </Box>
  );
};

export default CommandDashboard;
