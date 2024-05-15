import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const MentorCard = () => {
  return (
    <Card sx={{ display: "flex", flexDirection: "column", p: 2, width: 430 }}>
      <CardContent sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <CardMedia
          component="img"
          sx={{ width: 80, height: 80, borderRadius: "50%" }}
          image="https://via.placeholder.com/80"
          alt="Mentor"
        />

        <div>
          <Typography component="div" variant="h6">
            Emily Shine
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            UX/UI design
          </Typography>
        </div>
      </CardContent>
      <CardContent
        sx={{ display: "flex", flexDirection: "column", gap: "10px", pt: 0 }}
      >
        <Typography variant="body2" color="text.secondary" component="p">
          Korem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        <Typography
          variant="body2"
          color="text.primary"
          component="p"
          sx={{ textAlign: "right" }}
        >
          ⭐ 5 (750 Reviews)
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MentorCard;
