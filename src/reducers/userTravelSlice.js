import { createSlice } from "@reduxjs/toolkit";
import pastTravels from "../pages/travel/PastTravelJSON";

const pastTravelsJson = pastTravels;

const userTravelSlice = createSlice({
  name: "userTravel",
  initialState: {
    todayTravels: [],
    pastTravels: [...pastTravelsJson.travels],
  },
  reducers: {
    addUserTodayTravel: (state, action) => {
      state.todayTravels = [...state.todayTravels, action.payload];
    },
    initUserPastTravels: (state, action) => {
      state.pastTravels = action.payload;
    },
  },
});

export const { addUserTodayTravel, initUserPastTravels } =
  userTravelSlice.actions;

export default userTravelSlice.reducer;
