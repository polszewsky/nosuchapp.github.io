import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function ChallengeHomeWidget() {
  const history = useHistory();

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
          sx={{
            padding: "1rem",
            background: `#2f6271`,
            color: "white",
          }}
          elevation={3}
        >
          <Grid
            container
            item
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} sx={{ marginTop: "1rem", color: "#fedf33" }}>
              <Typography sx={{ display: "inline" }}>
                <EmojiEventsIcon fontSize="large" color="inherit" />
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  display: "inline",
                  marginLeft: "1rem",
                  verticalAlign: "top",
                }}
              >
                Hey, fancy a challange?
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ marginTop: "1rem" }}>
              <Typography
                variant="body2"
                sx={{ textTransform: "uppercase", fontSize: "24pt" }}
              >
                We have added some challenges for you to complete and compete!
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ flex: "end", marginTop: "0.5rem" }}>
              <Button
                startIcon={<EmojiEventsIcon />}
                color="warning"
                variant="contained"
                sx={{ backgroundColor: "#fedf33", color: "#2f6271" }}
                onClick={() => history.push("/challenges")}
              >
                see Challenges
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
