import { Grid, Paper, Typography, Button } from "@mui/material";
import {React, useState} from "react";
import { VerticalBarSeries, XAxis, XYPlot, YAxis } from "react-vis";

export default function LastMonthEmissions() {

    //TODO: what scale ?
  const month = [
    { x: "1", y: 42 },
    { x: "2", y: 57 },
    { x: "3", y: 22 },
    { x: "4", y: 70 },
    { x: "5", y: 13 },
    { x: "6", y: 67 },
    { x: "7", y: 32 },
    { x: "8", y: 25 },
    { x: "9", y: 57 },
    { x: "10", y: 11 },
    { x: "11", y: 52 },
    { x: "12", y: 28 },
    { x: "13", y: 15 },
    { x: "14", y: 63 },
    { x: "15", y: 17 },
    { x: "16", y: 39 },
    { x: "17", y: 51 },
    { x: "18", y: 74 },
    { x: "19", y: 10 },
    { x: "20", y: 5 },
    { x: "21", y: 53 },
    { x: "22", y: 69 },
    { x: "23", y: 58 },
    { x: "24", y: 31 },
    { x: "25", y: 64 },
    { x: "26", y: 73 },
    { x: "27", y: 46 },
    { x: "28", y: 29 },
    { x: "29", y: 61 },
    { x: "30", y: 50 },
  ];

  const week = [
    { x: "1", y: 42 },
    { x: "2", y: 57 },
    { x: "3", y: 22 },
    { x: "4", y: 70 },
    { x: "5", y: 13 },
    { x: "6", y: 67 },
    { x: "7", y: 32 },
  ];

  const year = [
    { x: "1", y: 420 },
    { x: "2", y: 570 },
    { x: "3", y: 220 },
    { x: "4", y: 700 },
    { x: "5", y: 130 },
    { x: "6", y: 670 },
    { x: "7", y: 320 },
    { x: "8", y: 250 },
    { x: "9", y: 570 },
    { x: "10", y: 110 },
    { x: "11", y: 520 },
    { x: "12", y: 280 },
  ];
  const [element, setelement] = useState(30);
  const [jump, setjump] = useState(3);
  const [data, setdata] = useState(month);
  const [info, setinfo] = useState("month")

  const  handleDays = (element, jump, data, info) => {
    setelement(element);
    setjump(jump);
    setdata(data);
    setinfo(info);
  };

  const tickValues = [];
  for (let i = 1; i <= element; i += jump) {
    tickValues.push(i.toString());
  }

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
              Your {info} CO2 emissions [kg]
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
                <XAxis tickValues={tickValues} />
                <YAxis />
                <VerticalBarSeries data={data} />
              </XYPlot>
              <Grid item xs={12} alignItems="center" >
                <Button onClick={() => handleDays(7, 1, week,"week")} sx={{border: "2px dashed #0091ea", bgcolor: "#80d8ff", marginLeft: 6, marginRight: 6}}>Week</Button>
                <Button onClick={() => handleDays(30, 3, month, "month")} sx={{border: "2px dashed #0091ea", bgcolor: "#80d8ff", marginRight: 6}}>Month</Button>
                <Button onClick={() => handleDays(12, 1, year, "year")} sx={{border: "2px dashed #0091ea", bgcolor: "#80d8ff", marginRight: 6}}>Year</Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
