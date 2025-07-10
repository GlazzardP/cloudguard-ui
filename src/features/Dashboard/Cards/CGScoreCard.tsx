import { Box, Typography } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import CustomModal from "../../../components/modals/BasicModal";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../app/redux/store";
import CGScoreIssues from "../../../components/modals/CGScoreModalContent";
import { useState } from "react";
import { closeModal } from "../../../app/redux/slices/modalSlice";

const CGScoreCard = () => {
  const { open } = useSelector((state: RootState) => state.modal);
  // const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const score = 89;
  const segments = 8;
  const filledSegments = 6;

  const renderSegments = () => {
    const radius = 45;
    const center = 50;
    const segmentAngle = (2 * Math.PI) / segments;

    return Array.from({ length: segments }).map((_, i) => {
      const angle = i * segmentAngle - Math.PI / 2;
      const x1 = center + radius * Math.cos(angle);
      const y1 = center + radius * Math.sin(angle);
      const x2 = center + (radius - 6) * Math.cos(angle);
      const y2 = center + (radius - 6) * Math.sin(angle);

      return (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={i < filledSegments ? "#5ee3e2" : "#2e3a57"}
          strokeWidth={4}
          strokeLinecap="round"
        />
      );
    });
  };

  return (
    <>
      <Box onClick={() => dispatch(closeModal())}>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            style={{ position: "absolute" }}
          >
            {renderSegments()}
          </svg> */}
          <Box sx={{ zIndex: 1, textAlign: "center" }}>
            <Typography
              variant="h4"
              fontSize={80}
              fontWeight="bold"
              color="white"
            >
              {score}
              <ArrowUpwardIcon
                sx={{ color: "#48ff87", fontSize: 18, ml: 0.5 }}
              />
            </Typography>
          </Box>
        </Box>

        <Typography variant="caption" sx={{ opacity: 0.7 }}>
          Your CG Score is average
        </Typography>
      </Box>
      <CustomModal
        // open={modalOpen}
        title="Your CG Score"
        children={<CGScoreIssues />}
        // setModalOpen={setModalOpen}
      />
    </>
  );
};

export default CGScoreCard;
