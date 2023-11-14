import {
  Alert,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Snackbar,
  Typography,
} from "@mui/material";
import React, { Fragment, useState } from "react";
import TitleReturnBar from "../../components/TitleReturnBar";
import RewardDialog from "./RewardDialog";
import { Check, AccessTime } from "@mui/icons-material";
import { FacebookIcon } from "../../components/img/FacebookIcon";

export default function MyRewards() {
  const [openClaim, setOpenClaim] = useState(false);
  const handleClickOpen = () => {
    setOpenClaim(true);
  };

  const handleClaimClose = () => {
    setOpenClaim(false);
  };

  const [openShare, setOpenShare] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenShare(false);
  };

  return (
    <Fragment>
      <TitleReturnBar site="My Rewards" />

      <Grid container direct="column" spacing={3}>
        <Grid container item direction="row" sx={{ marginTop: "1rem" }}>
          <Grid item xs={12}>
            <Card sx={{ maxWidth: "100%" }} onClick={() => handleClickOpen()}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="180"
                  image="https://www.finder.com/niche-builder/5f8f43b3eab58.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Grid
                    container
                    item
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                  >
                    <Grid item>
                      <Typography variant="h4">Plant a tree</Typography>{" "}
                    </Grid>
                    <Grid item>
                      <Chip label="claimed" color="success" icon={<Check />} />
                    </Grid>
                    <Grid
                      item
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setOpenShare(true);
                      }}
                    >
                      <FacebookIcon />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    item
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                  >
                    <Grid item>
                      <Typography variant="body2" color="text.secondary">
                        {/* Expiration date: 01.01.2025 */}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <Grid container item direction="row" sx={{ marginBottom: "1rem" }}>
          <Grid item xs={12}>
            <Card sx={{ maxWidth: "100%" }} onClick={() => handleClickOpen()}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="180"
                  image="https://cdn.vox-cdn.com/thumbor/8Df9mD_SJ-MfawE1JGGPZpWx5pQ=/0x0:2040x1360/2000x1333/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23935561/acastro_STK103__04.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Grid
                    container
                    item
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                  >
                    <Grid item>
                      <Typography variant="h4">$1 Discount</Typography>{" "}
                    </Grid>
                    <Grid item>
                      <Chip label="waiting" icon={<AccessTime />} />
                    </Grid>
                    <Grid
                      item
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setOpenShare(true);
                      }}
                    >
                      <FacebookIcon />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    item
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                  >
                    <Grid item>
                      <Typography variant="body2" color="text.secondary">
                        Minimal Order Value: USD 10.
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <Grid container item direction="row">
          <Grid item xs={12}>
            <Card sx={{ maxWidth: "100%" }} onClick={() => handleClickOpen()}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="180"
                  image="https://beecard.co.nz/Content/cms/CardInfo.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Grid
                    container
                    item
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                  >
                    <Grid item>
                      <Typography variant="h4">Adopt Bees!</Typography>{" "}
                    </Grid>
                    <Grid item>
                      <Chip label="waiting" icon={<AccessTime />} />
                    </Grid>
                    <Grid
                      item
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setOpenShare(true);
                      }}
                    >
                      <FacebookIcon />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    item
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                  >
                    <Grid item>
                      <Typography variant="body2" color="text.secondary">
                        Expiration date: 01.01.2026
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
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

      <RewardDialog open={openClaim} handleClose={handleClaimClose} />
    </Fragment>
  );
}
