import { Chip, Fab, Grid } from "@mui/material";
import React, { useState } from "react";
import PointsIndex from "../home/PointsIndex";
import { Check } from "@mui/icons-material";
import CachedIcon from "@mui/icons-material/Cached";

export default function HomeStatistics() {
  const [elect, setElectr] = useState(1.87);
  const [water, setWater] = useState(0.092);

  const syncData = () => {
    setElectr(elect + 0.001);
    setWater(water + 0.001);
  };

  return (
    <Grid
      container
      item
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={5}
    >
      <Grid item xs={12} sx={{ marginTop: "50px" }}>
        <PointsIndex points={water.toFixed(3)} label="WODA - m³" />
      </Grid>
      <Grid item xs={12}>
        <PointsIndex
          points={elect.toFixed(3)}
          label="PRĄD - kWh"
          color="#cca101"
        />
      </Grid>

      <Grid item>
        <Chip
          icon={<Check />}
          label="Synchronized with Smart Home"
          color="info"
          variant="contained"
          sx={{
            position: "fixed",
            bottom: (theme) => theme.spacing(9),
            left: (theme) => theme.spacing(2),
          }}
        />

        <Fab
          color="primary"
          aria-label="add"
          sx={{
            position: "fixed",
            bottom: (theme) => theme.spacing(9),
            right: (theme) => theme.spacing(2),
          }}
          onClick={() => syncData()}
        >
          <CachedIcon style={{ fontSize: 36 }} />
        </Fab>
      </Grid>
    </Grid>
  );
}
