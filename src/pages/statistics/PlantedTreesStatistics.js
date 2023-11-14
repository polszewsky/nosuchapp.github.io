import { CardMedia, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import nature from "../../components/img/nature.jpg";

export default function PlantedTreesStatistics() {
  return (
    <Grid
      container
      item
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Paper
          sx={{ padding: "0.5rem", border: "1px solid #2f6271" }}
          elevation={3}
        >
          <Grid container item direction="row">
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              TreeCard
            </Typography>
          </Grid>
          <Grid
            container
            item
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <CardMedia
                component="img"
                height="156"
                image={nature}
                alt="Paella dish"
                sx={{ objectFit: "contain" }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ paddingLeft: "1rem", paddingRight: "1rem" }}
            >
              <Typography
                variant="h5"
                sx={{ textAlign: "justify", fontWeight: 300 }}
              >
                Thanks to You & Community, we have planted over{" "}
                <b style={{ letterSpacing: "1px" }}>10000</b> trees in Poland!
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
