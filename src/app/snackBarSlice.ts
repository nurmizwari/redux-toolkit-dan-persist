import { AlertColor } from "@mui/material/Alert";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface SnackbarState {
  isOpen: boolean;
  message: string;
  variant: AlertColor;
}
const initialState: SnackbarState = {
  isOpen: false,
  message: "xxxxx...",
  variant: "info",
};

const snackBar = createSlice({
  name: "snackBar",
  initialState,
  reducers: {
    showSnackbar: (state, action: PayloadAction<SnackbarState>) => {
      console.log(action, "action");

      state.isOpen = action.payload.isOpen;
      state.message = action.payload.message;
      state.variant = action.payload.variant;
    },
    closeSnackbar: (state) => {
      state.isOpen = false;
      state.message = "";
      state.variant = "info";
    },
  },
});

export const { showSnackbar, closeSnackbar } = snackBar.actions;
export default snackBar.reducer;
