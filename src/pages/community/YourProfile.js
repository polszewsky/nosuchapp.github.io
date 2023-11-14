import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import paypal from "../../components/img/paypal.jpg";

export default function YourProfile() {
  return (
    <Grid container item direction="row" spacing={2}>
      <Grid item xs={12}>
        <Card
          elevation={3}
          sx={{
            minWidth: 300,
            marginTop: 2,
            backgroundColor: "#2f6271",
            color: "#f4f4f4",
          }}
        >
          <CardContent>
            <Grid
              container
              item
              direction="row"
              justifyContent="space-around"
              alignItems="center"
            >
              <Avatar
                alt="Remy Sharp"
                src={`https://i.pravatar.cc/150?img=${1 * 15}`}
                sx={{ width: 56, height: 56 }}
              />
              <Typography sx={{ fontSize: 22 }} gutterBottom>
                <b>{"JOHN DOE"}</b>
              </Typography>
            </Grid>
            <Divider />
            <Grid
              container
              item
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>johndoe@gmail.com</Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Paper
          sx={{
            padding: "1rem",
            background: `#40A5F3`,
          }}
          elevation={3}
        >
          <Grid container item direction="row">
            <Grid item xs={12} sx={{ marginTop: "1rem" }}>
              <Typography variant="subtitle2">Did You Know?</Typography>
            </Grid>
            <Grid item xs={12} sx={{ marginTop: "1rem" }}>
              <Typography
                variant="body2"
                sx={{ textTransform: "uppercase", fontSize: "31pt" }}
              >
                $1 Special Offer!
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ marginTop: "1rem" }}>
              <Typography sx={{ fontWeight: 200 }}>
                {"Verify your profile for special price!"}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={3}>
          <Grid
            container
            item
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={8}>
              <CardMedia
                component="img"
                image={paypal}
                alt="Paella dish"
                sx={{ objectFit: "contain" }}
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
