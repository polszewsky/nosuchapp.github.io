import {
  Alert,
  AlertTitle,
  Button,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalGridLines,
  XAxis,
  XYPlot,
  YAxis,
} from "react-vis";

export default function WeeklyDataCharts() {
  const history = useHistory();

  //TODO: what scale ?
  const blueData = [
    { x: "Mon", y: 6 },
    { x: "Tue", y: 8 },
    { x: "Wed", y: 5 },
    { x: "Thu", y: 9 },
    { x: "Fir", y: 11 },
    { x: "Sat", y: 10 },
    { x: "Sun", y: 7 },
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
              Your last week CO2 emissions [kg]
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
          <Grid item xs={12}>
            <Alert severity="info">
              <AlertTitle>
                {" "}
                We see you're driving your cars every day
              </AlertTitle>
              We've created a new challenge for you - start using your bike!
              <Grid item xs={10}>
                <Button
                  variant="outlined"
                  color="primary"
                  fullWidth
                  onClick={() => history.push("/challenges")}
                >
                  See the challenge
                </Button>
              </Grid>
            </Alert>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
