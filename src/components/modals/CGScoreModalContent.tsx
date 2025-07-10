import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  useTheme,
} from "@mui/material";

const issues = [
  {
    title: "Example",
    scoreDifference: "-2.31%",
    example: "Y",
    lastLog: "01/01/25",
  },
  {
    title: "Example",
    scoreDifference: "-2.12%",
    example: "Y",
    lastLog: "01/01/25",
  },
  {
    title: "Example",
    scoreDifference: "-1.98%",
    example: "Y",
    lastLog: "01/01/25",
  },
  {
    title: "Example",
    scoreDifference: "-1.87%",
    example: "Y",
    lastLog: "01/01/25",
  },
  {
    title: "Example",
    scoreDifference: "-1.75%",
    example: "Y",
    lastLog: "01/01/25",
  },
];

const CGScoreIssues = () => {
  const { custom } = useTheme();
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box sx={{ backgroundColor: "#2c2c44", width: "40%", borderRadius: 1 }}>
        <Typography fontSize={120} textAlign={"center"}>
          89
        </Typography>
        <Typography textAlign={"center"}>
          Your score is <strong>average</strong>
        </Typography>
      </Box>
      <Box
        sx={{
          width: "55%",
        }}
      >
        <Typography
          variant="h6"
          fontSize={20}
          sx={{ color: "#ffffff", marginBottom: "20px", fontWeight: 300 }}
        >
          Top 5 issues affecting your CG Score
        </Typography>
        <TableContainer sx={{ backgroundColor: "transparent" }}>
          <Table
            sx={{ minWidth: 650, backgroundColor: "transparent" }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow
                sx={{
                  "& th": {
                    border: 0,
                    color: "#a9a9b3",
                    backgroundColor: "transparent",
                  },
                  backgroundColor: "transparent",
                }}
              >
                <TableCell>Title</TableCell>
                <TableCell>Score difference</TableCell>
                <TableCell>Example</TableCell>
                <TableCell>Last Log</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {issues.map((issue, index) => (
                <TableRow
                  key={index}
                  sx={{
                    backgroundColor: custom.colors.backgroundLight,
                    margin: "10px",
                    borderRadius: 12,
                    display: "table-row",
                    borderSpacing: "0 8px",
                    borderCollapse: "separate",
                    "& td, & th": { border: 0, backgroundColor: "transparent" },
                  }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      color: "#ffffff",
                      backgroundColor: "transparent",
                      width: "auto",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {issue.title}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#ffffff",
                      backgroundColor: "transparent",
                      width: "auto",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {issue.scoreDifference}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#ffffff",
                      backgroundColor: "transparent",
                      width: "auto",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {issue.example}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#ffffff",
                      backgroundColor: "transparent",
                      width: "auto",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {issue.lastLog}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default CGScoreIssues;
