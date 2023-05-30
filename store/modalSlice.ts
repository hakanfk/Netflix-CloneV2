import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface InfoState {
  isVisible: boolean;
  movieId: number | any;
}

const initialState: InfoState = {
  isVisible: false,
  movieId: null,
};

export const counterSlice = createSlice({
  name: "infoModal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isVisible = true;
      state.movieId = action.payload;
    },
    closeModal: (state) => {
      state.isVisible = false;
      state.movieId = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openModal, closeModal } = counterSlice.actions;

export default counterSlice.reducer;
