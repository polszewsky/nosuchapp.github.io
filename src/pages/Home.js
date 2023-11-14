import { Grid } from "@mui/material";
import CommuteIcon from "@mui/icons-material/Commute";
import Fab from "@mui/material/Fab";
import { Link } from "react-router-dom";
import PointsIndex from "./home/PointsIndex";
import LastTravels from "./home/LastTravels";
import WeeklyDataCharts from "./home/WeeklyDataCharts";
import CommunityComparasion from "./home/CommunityComparasion";
import DidYouKnow from "./home/DidYouKnow";
import ChallengeHomeWidget from "./home/ChallengeHomeWidget";

export default function Home() {
  return (
    <Grid
      container
      spacing={3}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ paddingTop: "1rem" }}
    >
      <Grid container item direction="row" spacing={3}>
        {/** Points Index */}

        <Grid item xs={12}>
          <Grid
            container
            item
            direction="row"
            alignItems="flex-end"
            justifyContent="center"
          >
            <Grid item>
              <PointsIndex points={450} label="CarbonToken" scale={0.6} />
            </Grid>
            <Grid item>
              <PointsIndex
                points={27}
                label="CO2 reduce possible"
                scale={0.7}
                color="#56B896"
              />
            </Grid>
            <Grid item>
              <PointsIndex
                points={38}
                label="CO2 kg today"
                scale={0.5}
                color="#FF3232"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <LastTravels />

      <WeeklyDataCharts />

      <CommunityComparasion />

      <DidYouKnow />

      <ChallengeHomeWidget />

      <Grid item>
        <Link to="/travel/add-travel">
          <Fab
            color="primary"
            aria-label="add"
            sx={{
              position: "fixed",
              bottom: (theme) => theme.spacing(9),
              right: (theme) => theme.spacing(2),
            }}
          >
            <CommuteIcon style={{ fontSize: 42 }} />
          </Fab>
        </Link>
      </Grid>
    </Grid>
  );
}
