import { Box, Chip, Typography } from "@mui/material";

import {
  FAKE_TRIAGE_DATA,
  type Incident,
  type IncidentLevel,
} from "../../../data";

const TriageCard = () => {
  const getChipColor = (level: IncidentLevel) =>
    level === "high" ? "error" : level === "med" ? "warning" : "info";
  const formatWarningText = (level: IncidentLevel) =>
    level === "high" ? "HIGH" : level === "med" ? "MED" : "LOW";
  return (
    <>
      <Box>
        {FAKE_TRIAGE_DATA.map((tri: Incident) => (
          <Box
            key={tri.incidentName}
            sx={{
              backgroundColor: "#151C28",
              padding: 1,
              margin: 1,
              borderRadius: 1,
            }}
          >
            <Box
              display={"flex"}
              alignItems="center"
              justifyContent="space-evenly"
            >
              <Chip
                label={formatWarningText(tri.level)}
                color={getChipColor(tri.level)}
                sx={{ borderRadius: "6px" }}
              />

              <Typography fontWeight={300} fontSize={12}>
                {tri.code}
              </Typography>
              <Typography fontWeight={300} fontSize={12}>
                {tri.date}
              </Typography>
            </Box>
            <Typography mt={1} fontWeight={400}>
              {tri.incidentName}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default TriageCard;
