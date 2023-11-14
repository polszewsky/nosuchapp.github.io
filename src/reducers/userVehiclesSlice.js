import { createSlice } from "@reduxjs/toolkit";

const defaultCar = {
  id: "01",
  brand: "Audi",
  model: "A4",
  year: 2014,
  engine: "benzynowy",
  fuelUsage: 6.5,
  CO2: 0.15,
  electricityUsage: 0,
};

const userVehiclesSlice = createSlice({
  name: "userVehicles",
  initialState: {
    user_id: 1234,
    vehicles: [defaultCar],
  },
  reducers: {
    addUserVehicles: (state, action) => {
      state.vehicles = action.payload;
    },
    //Action.payload should be array index
    removeUserVehicle: (state, action) => {
      state.vehicles.splice(action.payload, 1);
    },
  },
});

export const { addUserVehicles, removeUserVehicle } = userVehiclesSlice.actions;

export default userVehiclesSlice.reducer;
