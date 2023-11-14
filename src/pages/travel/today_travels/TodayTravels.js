import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import NoDataPlaceholder from "../../../components/NoDataPlaceholder";

export default function TodayTravels() {
  const { todayTravels = [] } = useSelector((state) => state.userTravel);

  return (
    <Grid container item direction="row" spacing={3}>
      {/** Tables */}
      {todayTravels.length > 0 ? (
        <Grid item xs={12}>
          {todayTravels.length > 0 &&
            todayTravels.map((element) => (
              <Accordion spacing={3}>
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography item>
                    {element.date}: {element.from} - {element.to}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <b>C02: </b>
                    {element.CO2} kg
                  </Typography>
                  <Typography>
                    <b>Transportation:</b> {element.type}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
        </Grid>
      ) : (
        <NoDataPlaceholder label="No Travels" />
      )}
    </Grid>
  );
}
