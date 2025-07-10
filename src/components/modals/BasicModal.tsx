import React, { type Dispatch, type SetStateAction } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  useTheme,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { closeModal } from "../../app/redux/slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../app/redux/store";

interface CustomModalProps {
  title: string;
  children?: React.ReactNode;
  open: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

const CustomModal = ({
  title,
  children,
}: // open,
// setModalOpen,
CustomModalProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { open } = useSelector((state: RootState) => state.modal);
  const { custom } = useTheme();

  return (
    <Dialog
      open={open}
      maxWidth="md"
      fullWidth={false}
      slotProps={{
        paper: {
          sx: {
            backgroundColor: custom.colors.backgroundDark,
            borderRadius: 2,
            padding: 2,
          },
        },
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        px={1}
      >
        <DialogTitle sx={{ p: 0 }}>{title}</DialogTitle>
        <IconButton
          onClick={() => {
            console.log("CLOSE");
            // setModalOpen(false);
            dispatch(closeModal());
          }}
          aria-label="close"
          size="small"
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <DialogContent>
        <Box>{children}</Box>
      </DialogContent>
    </Dialog>
  );
};

export default CustomModal;
