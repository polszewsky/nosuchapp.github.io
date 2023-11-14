import { ArrowLeft } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { Fragment } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function TitleReturnBar(props) {
  let history = useHistory();

  const { site = "" } = props;

  return (
    <Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            color: "#BEBFC1",
            backgroundColor: "#272A33",
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => history.goBack()}
            >
              <ArrowLeft />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {site}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid sx={{ marginBottom: "54px" }} />
    </Fragment>
  );
}
