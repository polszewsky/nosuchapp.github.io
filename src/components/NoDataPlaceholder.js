import { CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import notravel from "../components/img/notravel.jpg";

export default function NoDataPlaceholder({ label = "No Data Available" }) {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ paddingTop: "1rem" }}
    >
      {/** IMPORT SECTION */}
      <Grid
        container
        item
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12}>
          <CardMedia
            component="img"
            height="298"
            width="298"
            image={notravel}
            alt="Paella dish"
            sx={{ objectFit: "contain" }}
          />
        </Grid>
      </Grid>
      {/** YOUR CARS SECTION */}
      <Grid
        container
        item
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ marginTop: "2rem" }}
      >
        <Grid item>
          <Typography variant="h2">{label}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
