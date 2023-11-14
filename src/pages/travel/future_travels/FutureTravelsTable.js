import {
  AirplanemodeActive,
  BusAlert,
  CarRental,
  ExpandMore,
  PedalBike,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  AlertTitle,
  CardMedia,
  Chip,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React from "react";
import RecommendCard from "./RecommendCard";
import { surpCoffes } from "../../../components/jsons/SurpApiCoffee";
import {
  HorizontalBarSeries,
  HorizontalGridLines,
  VerticalGridLines,
  XAxis,
  XYPlot,
  YAxis,
} from "react-vis";
import mapsGoogle from "../../../components/img/map.jpg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function FutureTravelsTable(props) {
  const { record = {} } = props;

  const recommens = surpCoffes.places;

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>
          {record?.type === "Bike" && <PedalBike color="primary" />}
          {record?.type === "Car" && <CarRental color="primary" />}
          {record?.type === "Plane" && <AirplanemodeActive color="primary" />}
          {record?.type === "Bus" && <BusAlert color="primary" />}
          <span style={{ marginLeft: "1rem", marginRight: "1rem" }}>
            {record?.from}
          </span>
          <ArrowRightAltIcon color="default" sx={{ marginRight: "1rem" }} />
          {record?.to}{" "}
          <span style={{ marginLeft: "1rem" }}> <CalendarMonthIcon color="default" sx={{ marginLeft: 3}} />{record?.date}</span>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container item direction="row" spacing={3}>
          <Grid item xs={12}>
            <Typography>
              <b>CO2 Emmisions</b> : {record?.CO2 ?? 0} kg
            </Typography>
            <Typography>
              <b>Comfort</b> : Medium+
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Alert severity="info">
              <AlertTitle>Recommended: {record?.recommend}</AlertTitle>
              This transport will emmit only{" "}
              <strong>{record?.recommendCO2} kg</strong> of CO2
            </Alert>
          </Grid>

          <Grid item xs={12}>
            <XYPlot
              width={380}
              height={150}
              stackBy="x"
              yType="ordinal"
              xDistance={10}
            >
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis />
              <YAxis />
              <HorizontalBarSeries
                data={[
                  { y: "P", x: record?.CO2 ?? 0 },
                  { y: "R", x: 0 },
                ]}
              />
              <HorizontalBarSeries
                data={[
                  { y: "P", x: 0 },
                  { y: "R", x: record?.recommendCO2 ?? 0 },
                ]}
              />
            </XYPlot>
          </Grid>

          {/** GOOGLE MAPS */}
          <Grid item xs={12}>
            <CardMedia
              component="img"
              sx={{ width: 450 }}
              src={mapsGoogle}
              alt="Live from space album cover"
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h5">See our recommendations</Typography>

            <ToggleButtonGroup
              color="primary"
              value={0}
              exclusive
              aria-label="Platform"
              sx={{ marginTop: "0.5rem" }}
            >
              <ToggleButton value={0}>Coffee</ToggleButton>
              <ToggleButton value={1}>Restaurant</ToggleButton>
              <ToggleButton value={2}>Museum</ToggleButton>
              <ToggleButton value={3}>Park</ToggleButton>
              <ToggleButton value={3}>Cinema</ToggleButton>
            </ToggleButtonGroup>

            {recommens.map((place, index) => (
              <RecommendCard key={index} place={place} />
            ))}

            <Chip
              sx={{ marginTop: "0.5rem" }}
              label="Provided with SerpApi: Google Search API"
              color="primary"
            />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}
