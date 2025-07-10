import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  open: boolean;
}

const initialState: ModalState = {
  open: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state) {
      console.log("OPEN - REDUX");
      state.open = true;
    },
    closeModal(state) {
      console.log("CLOSE - REDUX");

      state.open = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
