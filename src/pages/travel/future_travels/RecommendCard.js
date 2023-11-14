import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";

export default function RecommendCard({ place = {} }) {
  return (
    <Card
      sx={{
        display: "flex",
        marginTop: "0.5rem",
        background: "#fafafa",
        maxWidth: "500px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {place?.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            <StarIcon color="warning" fontSize="small" />
            <StarIcon color="warning" fontSize="small" />
            <StarIcon color="warning" fontSize="small" />
            <StarIcon color="warning" fontSize="small" />
            <StarHalfIcon color="warning" fontSize="small" />({place?.reviews})
            - {place?.type} - $$
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {place?.address}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151, flex: "right" }}
        src={
          "https://cms.magnoliapark.pl/pl/wp-content/uploads/sites/2/2019/07/Starbucks_4-576x384.jpg"
        }
        alt="Live from space album cover"
      />
    </Card>
  );
}
