import { createSlice } from "@reduxjs/toolkit";
import {
  currentBriefcaseAction,
  currentBriefcaseState,
} from "utils/types/redusersTypes/briefcareTypes";

const initialState: currentBriefcaseState = {
  items: [],
};
export const currentBriefcaseSlice = createSlice({
  name: "briefcase",
  initialState: initialState,
  reducers: {
    addBriefcaseCurrent(
      state: currentBriefcaseState,
      action: currentBriefcaseAction,
    ) {
      const index = state.items.find((item) => item.id == action.payload.id);
      if (index == undefined) {
        state.items.push(action.payload);
      } else {
        if (index.priceUsd != action.payload.priceUsd) {
          state.items = state.items.filter((n) => n.id !== action.payload.id);
          state.items.push(action.payload);
        }
      }
    },
    deleteBriefcaseCurrent(
      state: currentBriefcaseState,
      action: currentBriefcaseAction,
    ) {
      state.items = state.items.filter((n) => n.id !== action.payload.id);
    },
  },
});
export const { addBriefcaseCurrent, deleteBriefcaseCurrent } =
  currentBriefcaseSlice.actions;
export default currentBriefcaseSlice.reducer;
