import { createSlice } from "@reduxjs/toolkit";
import { SidebarState } from "../interfaces/sidebarState";

const initialState: SidebarState = {
  isCollapsed: false,
};

const sidebarSlice = createSlice({
  name: "TMSidebar",
  initialState,
  reducers: {
    toggleSidebar: (state: SidebarState) => {
      state.isCollapsed = !state.isCollapsed;
    },
    collapseSidebar: (state: SidebarState) => {
      state.isCollapsed = true;
    },
    expandSidebar: (state: SidebarState) => {
      state.isCollapsed = false;
    },
  },
});

export const { collapseSidebar, toggleSidebar, expandSidebar } =
  sidebarSlice.actions;
export default sidebarSlice.reducer;
