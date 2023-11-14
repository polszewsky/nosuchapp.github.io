import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterReducer";
import homeInformationsReducer from "./reducers/homeInformationsSlice";
import userVehiclesReducer from "./reducers/userVehiclesSlice";
import loginReducer from "./reducers/loginSlice";
import challengeReducer from "./reducers/challengeSlice";
import userTravelReducer from "./reducers/userTravelSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    homeInformations: homeInformationsReducer,
    userVehicles: userVehiclesReducer,
    login: loginReducer,
    challenge: challengeReducer,
    userTravel: userTravelReducer,
  },
});
