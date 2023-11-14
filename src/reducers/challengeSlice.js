import { createSlice } from "@reduxjs/toolkit";

export const challengeSlice = createSlice({
  name: "challenge",
  initialState: {
    monthly: 5,
    challenges: [
      {
        id: 1,
        title: "EcoDrive",
        description: "Reduce your car's combustion by 10% over the next 100km.",
        taken: false,
        points: "50pkt",
      },
      {
        id: 2,
        title: "Reduce electricity",
        description:
          "Reduce household electricity consumption by 5% in the next 30 days.",
        taken: false,
        points: "25pkt",
      },
      {
        id: 3,
        title: "Reduce water using",
        description: "Reduce water consumption by 7% in the next 30 days.",
        taken: false,
        points: "25pkt",
      },
      {
        id: 4,
        title: "Walk or Bike, Not Drive",
        description:
          "Go for a walk or bike ride instead of driving at least twice a week.",
        taken: false,
        points: "75pkt",
      },
    ],
  },
  reducers: {
    takeUpChallenge: (state, action) => {
      state.challenges = state.challenges.map((record) =>
        record.id === action.payload.id ? { ...record, taken: true } : record
      );

      state.monthly = state.monthly + 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { takeUpChallenge } = challengeSlice.actions;

export default challengeSlice.reducer;
