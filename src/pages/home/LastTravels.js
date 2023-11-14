import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import LastTravelRecord from "./LastTravelRecord";
import { useSelector } from "react-redux";

export default function LastTravels() {
  const { pastTravels = [] } = useSelector((state) => state.userTravel);

  return (
    <Grid
      container
      item
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Paper sx={{ padding: "0.5rem" }} elevation={3}>
          <Grid container item direction="row">
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              Last Travels
            </Typography>
          </Grid>
          <Grid container item direction="row">
            <Grid item xs={12}>
              <Grid
                container
                item
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                {pastTravels.length > 0 &&
                  pastTravels
                    .slice(0, 3)
                    .map((r, index) => (
                      <LastTravelRecord record={r} key={index} />
                    ))}
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
