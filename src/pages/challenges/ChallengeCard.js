import { Badge, Grid, Paper, Typography, Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { takeUpChallenge } from "../../reducers/challengeSlice";
import Facebook from "@mui/icons-material/Facebook";

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export default function ChallengeCard({
  record = {},
  openProcessing,
  setOpenShare,
}) {
  const dispatch = useDispatch();

  const mockTakeUp = () => {
    if (!record.id) return false;

    openProcessing(true);

    delay(1000).then(() => {
      dispatch(takeUpChallenge({ id: record.id }));
      openProcessing(false);
    });
  };

  return (
    <Grid container item direction="row" sx={{ marginTop: "1rem" }} xs={12}>
      <Grid item xs={12}>
        <Paper elevation={3} sx={{ padding: "1rem", background: "#EAEFF0" }}>
          <Grid container item direction="row">
            <Grid item xs={10}>
              <Typography variant="h5">
                <b>{record?.title}</b>
              </Typography>
            </Grid>
            <Badge
              badgeContent={record?.points}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              sx={{
                "& .MuiBadge-badge": {
                  fontSize: 21,
                  height: 50,
                  minWidth: 90,
                  padding: "0.5rem",
                  background: "#A3C8ED",
                  color: "black",
                  border: "1px solid #666",
                },
              }}
            >
              <Grid item xs={2}>
                &nbsp;
              </Grid>
            </Badge>
          </Grid>
          <Grid
            container
            item
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Typography>{record?.description}</Typography>
            </Grid>
            <Grid item sx={{ marginTop: "0.5rem" }}>
              {record?.taken ? (
                <>
                  <Button variant="contained" disabled>
                    Taken Up!
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={<Facebook />}
                    sx={{ marginLeft: "1rem" }}
                    onClick={() => setOpenShare(true)}
                  >
                    Share
                  </Button>
                </>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => mockTakeUp()}
                >
                  Take up!
                </Button>
              )}
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
