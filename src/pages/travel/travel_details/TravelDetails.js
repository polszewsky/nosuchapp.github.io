import React from "react";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import TitleReturnBar from "../../../components/TitleReturnBar";
import { Button, CardMedia, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import map from "../../../components/img/map_small.jpg";
import { FacebookIcon } from "../../../components/img/FacebookIcon";

export default function TravelDetails() {
  let { travelId } = useParams();

  const { pastTravels = [] } = useSelector((state) => state.userTravel);

  const [selectedTravel, setSelectedTravel] = useState({});

  useEffect(() => {
    if (travelId) {
      const filteredTravel = pastTravels.find(
        (t) => Number(t.id) === Number(travelId)
      );

      setSelectedTravel(filteredTravel);
    }
  }, [travelId, pastTravels]);

  return (
    <Fragment>
      <TitleReturnBar site="Travel Details" />

      <Grid container direction="column">
        <Grid container item direction="row" spacing={2}>
          <Grid item xs={12} sx={{ marginTop: "0.5rem" }}>
            <CardMedia
              component="img"
              image={map}
              alt="Paella dish"
              sx={{ objectFit: "contain" }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <b>From</b>: {selectedTravel?.from}{" "}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <b>To</b>: {selectedTravel?.to}{" "}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <b>Date</b>: {selectedTravel?.date}{" "}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <b>Time</b>: 13:45{" "}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <b>Distance</b>: {selectedTravel?.distance} km{" "}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <b>Mode of transport</b>: {selectedTravel?.type}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <b>Fuel type</b>: benzine
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <b>Average speed</b>: 45kmh
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <b>Carbon emission</b>: {selectedTravel?.CO2} kg
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Button
              startIcon={<FacebookIcon />}
              variant="contained"
              color="primary"
            >
              Share on Facebook
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}
