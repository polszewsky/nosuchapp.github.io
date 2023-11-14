import { Grid, Tab, Tabs } from "@mui/material";
import CarsStats from "./CarsStats";
import LastMonthEmissions from "./LastMonthEmissions";
import React from "react";
import HomeStatistics from "./HomeStatistics";
import PlantedTreesStatistics from "./PlantedTreesStatistics";

export default function StatisticPage() {
  const [currentTab, setValue] = React.useState(0);

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid
      container
      spacing={3}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid container item direction="row">
        <Grid item xs={12}>
          <Tabs
            value={currentTab}
            onChange={handleChange}
            centered
            variant="fullWidth"
          >
            <Tab value={0} label="Travel" />
            <Tab value={1} label="Home" />
          </Tabs>
        </Grid>
      </Grid>

      {currentTab === 0 && (
        <>
          <LastMonthEmissions />
          <PlantedTreesStatistics />
          <CarsStats />
          
        </>
      )}
      {currentTab === 1 && <HomeStatistics />}
    </Grid>
  );
}
