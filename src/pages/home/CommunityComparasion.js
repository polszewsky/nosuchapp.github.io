import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import {
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalGridLines,
  XAxis,
  XYPlot,
  YAxis,
} from "react-vis";

export default function CommunityComparasion() {
  const blueData = [
    { x: "1-2 kg", y: 10 },
    { x: "2-5 kg", y: 20 },
    { x: "5-10 kg", y: 10 },
    { x: "10-15 kg", y: 30 },
    { x: "15-20 kg", y: 20 },
    
  ];

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
              Percent of your friends in different emission buckets [%]
            </Typography>
          </Grid>
          <Grid
            container
            item
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <XYPlot xType="ordinal" height={300} width={400} xDistance={100}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <VerticalBarSeries data={blueData} />
              </XYPlot>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
