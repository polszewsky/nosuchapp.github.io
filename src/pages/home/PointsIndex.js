import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import React from "react";

const StyledCircle = styled("span")(({ scale = 1.0, color }) => ({
  height: `${250 * scale}px`,
  width: `${250 * scale}px`,
  backgroundColor: `${color}`,
  borderRadius: "50%",

  fontSize: `${54 * scale}pt`,
  color: `#fbfbfb`,

  /* its children will be flex items */
  display: "flex",
  /* place items in column */
  flexDirection: "column",
  /* center flex items horizontally */
  alignItems: "center",
  /* center all content vertically */
  justifyContent: "center",

  webkitBoxShadow: `4px 4px 63px -8px ${color}`,
  mozBoxShadow: `4px 4px 63px -8px ${color}`,
  boxShadow: `4px 4px 63px -8px ${color}`,
}));

export default function PointsIndex({
  points = 0,
  label = "",
  scale = 1.0,
  color = "#2f6271",
}) {
  return (
    <Grid
      container
      item
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <StyledCircle scale={scale} color={color}>
          {points}
          {label !== "" && (
            <>
              <br />
              <span
                style={{
                  fontSize: "11pt",
                  fontWeight: 200,
                  letterSpacing: "1px",
                }}
              >
                {label}
              </span>
            </>
          )}
        </StyledCircle>
      </Grid>
    </Grid>
  );
}
