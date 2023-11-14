import { Grid, Tab, Tabs } from "@mui/material";
import React from "react";
import YourProfile from "./YourProfile";
import CommunityPage from "./CommunityPage";

export default function CommunityTabWrapper() {
  const [currentTab, setValue] = React.useState(0);

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid
      container
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
            <Tab value={0} label="Community" />
            <Tab value={1} label="Your Profile" />
          </Tabs>
        </Grid>
      </Grid>

      {currentTab === 0 && <CommunityPage />}
      {currentTab === 1 && <YourProfile />}
    </Grid>
  );
}
