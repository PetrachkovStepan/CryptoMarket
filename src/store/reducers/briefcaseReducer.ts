import { createSlice } from "@reduxjs/toolkit";
import {
  briefcaseAction,
  briefcaseState,
} from "../../utils/types/redusersTypes/briefcareTypes";

const initialState: briefcaseState = {
  items: [],
};
export const briefcaseSlice = createSlice({
  name: "briefcase",
  initialState: initialState,
  reducers: {
    addBriefcaseItem(state: briefcaseState, action: briefcaseAction) {
      const index = state.items.find((item) => item.id == action.payload[0].id);
      if (index != undefined) {
        index.count += action.payload[0].count;
        state.items = state.items.filter((n) => n.id !== action.payload[0].id);
        state.items.push(index);
      } else {
        state.items.push(action.payload[0]);
      }
    },
    deleteBriefcaseItem(state: briefcaseState, action: briefcaseAction) {
      state.items = state.items.filter((n) => n.id !== action.payload[0].id);
      if (action.payload[0].count > 0) {
        state.items.push(action.payload[0]);
      }
    },
  },
});
export const { addBriefcaseItem, deleteBriefcaseItem } = briefcaseSlice.actions;
export default briefcaseSlice.reducer;
