import { CircularProgress, Dialog, DialogContent, Grid } from "@mui/material";
import React from "react";

export default function ProcessDialog({ open }) {
  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="md"
      fullWidth
      PaperProps={{
        style: {
          backgroundColor: "transparent",
          boxShadow: "none",
        },
      }}
    >
      <DialogContent>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item>
            <CircularProgress sx={{ color: "white" }} />
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
