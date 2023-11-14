import styled from "@emotion/styled";
import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const ColorButton = styled(Button)(({ theme }) => ({
  color: "white",
  backgroundColor: "#6D919B",
  "&:hover": {
    backgroundColor: "#58818d",
  },
}));

export default function PaperCard(props) {
  const {
    actionOnClick,
    buttonLabel = "",
    title = "",
    completed = "",
    future = "",
    noAction = false,
    background = "#2f6271",
  } = props;

  return (
    <Paper
      sx={{
        padding: "1rem",
        background: background,
      }}
      onClick={actionOnClick}
    >
      <Grid
        container
        item
        direction="column"
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Typography
              sx={{
                color: "white",
                textTransform: "uppercase",
                fontWeight: 200,
                fontSize: "28pt",
                letterSpacing: "2px",
              }}
            >
              {title}
            </Typography>
          </Grid>
        </Grid>
        {!noAction && (
          <>
            <Grid
              item
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <Typography variant="h4">
                  {completed} {future}
                </Typography>
              </Grid>
            </Grid>
            {buttonLabel !== "" && (
              <Grid
                item
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <ColorButton fullWidth>{buttonLabel}</ColorButton>
                </Grid>
              </Grid>
            )}
          </>
        )}
      </Grid>
    </Paper>
  );
}
