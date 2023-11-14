import {
  Alert,
  Grid,
  LinearProgress,
  Paper,
  Snackbar,
  Typography,
  linearProgressClasses,
} from "@mui/material";
import React, { Fragment, useState } from "react";
import TitleReturnBar from "../../components/TitleReturnBar";
import { useSelector } from "react-redux";
import ChallengeCard from "./ChallengeCard";
import ProcessDialog from "./ProcessDialog";
import styled from "@emotion/styled";
import { grey } from "@mui/material/colors";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: grey[300],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
  },
}));

export default function ChallengePage() {
  const { challenges = [], monthly = 0 } = useSelector(
    (state) => state.challenge
  );

  const [openProcess, setOpenProcess] = useState(false);

  const [openShare, setOpenShare] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenShare(false);
  };

  return (
    <Fragment>
      <TitleReturnBar site="Challenges" />
      <Grid container direction="column">
        <Grid container item direction="row" sx={{ marginTop: "1rem" }} xs={12}>
          <Grid item xs={12}>
            <Paper
              elevation={3}
              sx={{ padding: "1rem", background: "#2f6271" }}
            >
              <Grid
                container
                item
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ color: "white" }}
              >
                <Grid item>
                  <Typography variant="h5">
                    <b>Monthly Badges</b>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h5">{monthly} / 30</Typography>
                </Grid>
              </Grid>
              <Grid container item direction="row" sx={{ marginTop: "0.5rem" }}>
                <Grid item xs={12}>
                  <BorderLinearProgress variant="determinate" value={27} />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        {challenges.length > 0 &&
          challenges.map((ch, index) => (
            <ChallengeCard
              record={ch}
              key={index}
              openProcessing={setOpenProcess}
              setOpenShare={setOpenShare}
            />
          ))}
      </Grid>

      <Snackbar
        open={openShare}
        onClose={() => setOpenShare(false)}
        handleClose={handleClose}
        autoHideDuration={1500}
        message="Shared on Facebook - Thanks!"
        sx={{ bottom: "65px" }}
      >
        <Alert
          severity="info"
          sx={{ width: "100%", border: "1px solid #4c88c2" }}
        >
          Shared on Facebook - Thanks!
        </Alert>
      </Snackbar>
      <ProcessDialog open={openProcess} />
    </Fragment>
  );
}
