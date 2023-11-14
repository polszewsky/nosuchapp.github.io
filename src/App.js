import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Container,
  Paper,
} from "@mui/material";
import React from "react";
import { Garage, StackedBarChart } from "@mui/icons-material";
import TravelRoutrer from "./pages/travel/TravelRouter";
import RewardsRouter from "./pages/rewards/RewardsRouter";
import CommunityRouter from "./pages/community/CommunityRouter";
import StatisticRouter from "./pages/statistics/StatisticRouter";
import VehiclesPage from "./pages/vehicles/VehiclesPage";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import PeopleIcon from "@mui/icons-material/People";
import Login from "./pages/Login";
import HomeIcon from "@mui/icons-material/Home";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ChallengePage from "./pages/challenges/ChallengePage";

/**
 * This should be our main page where we login and create router for whole app
 * @returns
 */
export default function App() {
  const [value, setValue] = React.useState(0);

  return (
    <Container>
      <Switch>
        <Route path="/rewards">
          <RewardsRouter />
        </Route>
        <Route path="/statistic">
          <StatisticRouter />
        </Route>
        <Route path="/community">
          <CommunityRouter />
        </Route>
        <Route path="/travel">
          <TravelRoutrer />
        </Route>
        <Route path="/vehicles">
          <VehiclesPage />
        </Route>
        <Route path="/challenges">
          <ChallengePage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      <Box sx={{ minHeight: "74px" }} />

      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          sx={{
            backgroundColor: "#272A33",
          }}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            component={Link}
            to="/"
            label="Home"
            icon={<HomeIcon />}
            sx={{
              color: "#BEBFC1",
            }}
          />

          <BottomNavigationAction
            component={Link}
            to="/travel"
            label="Travels"
            icon={<FlightTakeoffIcon />}
            sx={{
              color: "#BEBFC1",
            }}
          />
          
          <BottomNavigationAction
            component={Link}
            to="/vehicles"
            label="Vehicles"
            icon={<Garage />}
            sx={{
              color: "#BEBFC1",
            }}
          />

          <BottomNavigationAction
            component={Link}
            to="/statistic"
            label="Statistic"
            icon={<StackedBarChart />}
            sx={{
              color: "#BEBFC1",
            }}
          />

          <BottomNavigationAction
            component={Link}
            to="/rewards"
            label="Rewards"
            icon={<EmojiEventsIcon />}
            sx={{
              color: "#BEBFC1",
            }}
          />

          <BottomNavigationAction
            component={Link}
            to="/community"
            label="Community"
            icon={<PeopleIcon />}
            sx={{
              color: "#BEBFC1",
            }}
          />

          
        </BottomNavigation>
      </Paper>
    </Container>
  );
}
