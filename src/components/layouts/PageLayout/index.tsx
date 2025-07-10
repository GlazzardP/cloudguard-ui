import React from "react";
import { Box, CssBaseline } from "@mui/material";

import SideBar from "../SideBar";
import Header from "../Header";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../app/redux/store";
import { closeModal } from "../../../app/redux/slices/modalSlice";

const drawerWidth = 150;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { open } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header sideBarWidth={drawerWidth} />
      <SideBar />
      <Box
        component="main"
        sx={{
          position: "relative",
          flexGrow: 1,
          p: 3,
          width: `calc(100vw - ${drawerWidth + 50}px)`,
          height: "90vh",
          marginTop: "10vh",
          overflow: "hidden",
        }}
      >
        {children}

        {open && (
          <Box
            onClick={() => {
              console.log("CLICK CLOSE");

              dispatch(closeModal());
            }}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              bgcolor: "rgba(255, 255, 255, 0.6)", // semi-transparent white
              backdropFilter: "blur(4px)", // blurred effect
              zIndex: 10,
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default Layout;
