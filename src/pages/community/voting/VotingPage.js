import React from "react";
import { Fragment } from "react";
import TitleReturnBar from "../../../components/TitleReturnBar";
import { CardMedia, Grid, Typography } from "@mui/material";
import voting from "../../../components/img/voting.jpg";

export default function VotingPage() {
  return (
    <Fragment>
      <TitleReturnBar site="Voting" />

      <Grid container direct="column" spacing={3}>
        <Grid container item direction="row" sx={{ marginTop: "1rem" }}>
          <Grid item>
            <Typography variant="h2">Tree of The Year</Typography>
          </Grid>

          <Grid item xs={12}>
            <CardMedia component="img" image={voting} alt="green iguana" />
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}
