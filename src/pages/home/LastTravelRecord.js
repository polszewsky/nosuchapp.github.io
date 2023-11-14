import { Grid, Typography } from "@mui/material";
import React from "react";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import {
  ArrowRight,
  ArrowRightAlt,
  PedalBike,
  Train,
} from "@mui/icons-material";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

export default function LastTravelRecord({ record = {} }) {
  const navigate = useHistory();

  return (
    <Grid
      container
      item
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      sx={{
        minHeight: "54px",
        border: "0px solid #f8f8f8",
        marginTop: "0.5rem",
        background: "#F1F7FA",
      }}
      onClick={() => navigate.push(`/travel/${record?.id}`)}
    >
      <Grid item>
        {record?.type === "plane" && <AirplanemodeActiveIcon color="primary" />}
        {record?.type === "bike" && <PedalBike color="primary" />}
        {record?.type === "train" && <Train color="primary" />}
      </Grid>
      <Grid item>
        <Typography>
          {record?.from} {<ArrowRightAlt />} {record?.to}
        </Typography>
      </Grid>
      <Grid item>{record?.date}</Grid>
      <Grid item>{record?.CO2}kg CO₂</Grid>
      <Grid item>
        <ArrowRight />
      </Grid>
    </Grid>
  );
}
