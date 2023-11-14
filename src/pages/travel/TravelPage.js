import * as React from "react";
import { Fab, Grid, Tab, Tabs } from "@mui/material";
import PastAndFutureTravels from "./PastAndFutureTravels";
import FutureTravelsPage from "./future_travels/FutureTravelsPage";
import { Commute } from "@mui/icons-material";
import { Link } from "react-router-dom/cjs/react-router-dom";
import TodayTravels from "./today_travels/TodayTravels";

export default function TravelPage() {
  const [currentTab, setValue] = React.useState(1);

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      spacing={3}
    >
      <Grid container item direction="row">
        <Grid item xs={12}>
          <Tabs
            value={currentTab}
            onChange={handleChange}
            centered
            variant="fullWidth"
          >
            <Tab value={0} label="Completed" />
            <Tab value={1} label="Todays" />
            <Tab value={2} label="Future travels" />
          </Tabs>
        </Grid>
      </Grid>

      {currentTab === 0 && <PastAndFutureTravels showPoints />}
      {currentTab === 1 && <TodayTravels />}
      {currentTab === 2 && <FutureTravelsPage />}

      <Grid item>
        <Link to="/travel/add-travel">
          <Fab
            color="primary"
            aria-label="add"
            sx={{
              position: "fixed",
              bottom: (theme) => theme.spacing(9),
              right: (theme) => theme.spacing(2),
            }}
          >
            <Commute style={{ fontSize: 42 }} />
          </Fab>
        </Link>
      </Grid>
    </Grid>
  );
}
