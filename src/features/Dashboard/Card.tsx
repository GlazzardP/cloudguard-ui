import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import { Box, Typography, useTheme } from "@mui/material";
import type { SxProps, Theme } from "@mui/system";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../app/redux/store";
import { openModal } from "../../app/redux/slices/modalSlice";

interface CardProps {
  children: React.ReactNode;
  onClick?: () => void;
  title: string;
  sx?: SxProps<Theme>;
}

const CardBase = ({ children, onClick, title, sx = {} }: CardProps) => {
  const theme = useTheme();
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Box
      onClick={onClick}
      sx={{
        minHeight: "10rem",
        height: "100%",
        p: 2,
        borderRadius: 1,
        backgroundColor: theme?.custom?.colors?.backgroundLight || "#1a1d2e",
        ...sx,
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={1}
      >
        <Typography variant="caption" sx={{ opacity: 0.7 }}>
          {title}
        </Typography>
        <InfoIcon sx={{ fontSize: 16, opacity: 0.6 }} />
      </Box>

      {children}
    </Box>
  );
};

export default CardBase;
