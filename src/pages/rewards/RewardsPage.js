import { Fastfood, Check, CardGiftcard } from "@mui/icons-material";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Grid, Typography } from "@mui/material";
import FlagIcon from "@mui/icons-material/Flag";
import {
  useHistory,
  useRouteMatch,
} from "react-router-dom/cjs/react-router-dom";
import { useCallback } from "react";
import PaperCard from "../../components/PaperCard";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import PointsIndex from "../home/PointsIndex";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import SportsScoreIcon from "@mui/icons-material/SportsScore";

export default function RewardsPage() {
  let match = useRouteMatch();

  const history = useHistory();
  const handleOnClick = useCallback(
    () => history.push(`${match.path}/my-rewards`),
    [history, match]
  );

  return (
    <Grid
      container
      alignItems="center"
      direction="column"
      sx={{ padding: "1rem" }}
    >
      <Grid container direction="row" alignItems="center">
        <Grid item xs={12} sx={{ marginTop: "0.5rem" }}>
          <PaperCard
            noAction
            actionOnClick={() => history.push("/challenges")}
            color="blue"
            title={
              <span style={{ color: "#fedf33" }}>
                See&nbsp;&nbsp;&nbsp;Challenges&nbsp;&nbsp;
                <NavigateNextIcon color="green" />
              </span>
            }
          />
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        alignItems="center"
        sx={{ marginTop: "1rem" }}
      >
        <Grid item xs={12}>
          <PaperCard
            actionOnClick={handleOnClick}
            color="blue"
            noAction
            title={
              <>
                My&nbsp;&nbsp;&nbsp;rewards&nbsp;&nbsp;
                <NavigateNextIcon color="green" />
              </>
            }
          />
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        alignItems="center"
        sx={{ marginTop: "1rem" }}
      >
        <Grid item xs={12}>
          <PointsIndex points="212" label="tokens" scale={0.8} />
        </Grid>
      </Grid>
      <Grid container direction="row">
        <Timeline position="right">
          {/** item */}
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              2023-01-01
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "green" }} />
              <TimelineDot color="success">
                <FlagIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "green" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography component="span">
                <b>Rewards are waiting!</b>
              </Typography>
            </TimelineContent>
          </TimelineItem>
          {/** item */}
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              2023-02-01
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "green" }} />
              <TimelineDot color="success">
                <Check />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "green" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Plant a tree!
              </Typography>
              <Typography fontSize={12}>50 Tokens</Typography>
            </TimelineContent>
          </TimelineItem>
          {/** item */}
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              2023-03-12
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="success">
                <Check />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "green" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                $1 Gift Card
              </Typography>
              <Typography fontSize={12}>100 Tokens</Typography>
            </TimelineContent>
          </TimelineItem>
          {/** item */}
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              2023-03-31
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "green" }} />
              <TimelineDot color="success">
                <Check />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "green" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Adopt 10 bees!
              </Typography>
              <Typography fontSize={12}>200 Tokens</Typography>
            </TimelineContent>
          </TimelineItem>
          {/** item */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <Fastfood />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                10% Off Glovo
              </Typography>
              <Typography fontSize={12}>500 Tokens</Typography>
            </TimelineContent>
          </TimelineItem>
          {/** item */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <CreditScoreIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                mBank bargain code
              </Typography>
              <Typography fontSize={12}>700 Tokens</Typography>
            </TimelineContent>
          </TimelineItem>
          {/** item */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <CardGiftcard />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                $5 Off Card
              </Typography>
              <Typography fontSize={12}>1000 Tokens</Typography>
            </TimelineContent>
          </TimelineItem>
          {/** item */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <Fastfood />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                15% Off Glovo
              </Typography>
              <Typography fontSize={12}>1500 Tokens</Typography>
            </TimelineContent>
          </TimelineItem>
          {/** item */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <CardGiftcard />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                $10 Off CCC footgear
              </Typography>
              <Typography fontSize={12}>2000 Tokens</Typography>
            </TimelineContent>
          </TimelineItem>
          {/** item */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <CheckroomIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                15% Off Reserved
              </Typography>
              <Typography fontSize={12}>3000 Tokens</Typography>
            </TimelineContent>
          </TimelineItem>
          {/** item */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <SportsScoreIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                That's final surprise!
              </Typography>
              <Typography fontSize={12}>5000 Tokens</Typography>
            </TimelineContent>
          </TimelineItem>

          {/** // end */}
        </Timeline>
      </Grid>
    </Grid>
  );
}
