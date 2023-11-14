import { Grid } from "@mui/material";
import React from "react";
import PointsIndex from "../../home/PointsIndex";
import ImportCallendar from "./ImportCallendar";
import FutureTravelsTable from "./FutureTravelsTable";
import futureTravels from "./../FutureTravelJSON";

export default function FutureTravelsPage({
  listOfTravels,
  showPoints = false,
}) {
  const travels = futureTravels.travels;

  const calculatePlanedEms = (t) => {
    let planned = 0;
    t.forEach((t) => (planned += t?.CO2));
    return planned;
  };

  const calculateLowEms = (t) => {
    let recom = 0;
    t.forEach((t) => (recom += t?.recommendCO2));
    return recom;
  };

  return (
    <Grid container item direction="row" spacing={3}>
      {/** Points Index */}

      <Grid item xs={12}>
        <Grid
          container
          item
          direction="row"
          justifyContent="space-around"
          alignItems="flex-end"
        >
          <Grid item>
            <PointsIndex
              points={calculatePlanedEms(travels)}
              label="Kg emissions"
              scale={0.7}
              color="#FF3232"
            />
          </Grid>
          <Grid item>
            <PointsIndex
              points={calculateLowEms(travels)}
              label="possible"
              scale={0.5}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <ImportCallendar />
      </Grid>

      <Grid item xs={12}>
        {travels.map((record, index) => (
          <FutureTravelsTable key={index} record={record} />
        ))}
      </Grid>
    </Grid>
  );
}
