import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../theme";
import dateFormat from "dateformat";
import { useNavigate } from "react-router-dom";

const EventCard = ({ event }) => {

  const navigate = useNavigate()
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const viewEvent = (event) => {
    navigate('/event',{state:{event}})
  } 

  return (
    <Card
      sx={{ width: 300, m: "5px" }}
      style={{ backgroundColor: colors.primary[400] }}
    >
      <CardMedia
        component="img"
        alt="Cover image"
        height="160"
        image={event.mentorImage}
      />
      <CardContent>
        <Typography variant="h6" fontWeight={"bold"} color={colors.grey[200]}>
          {event.mentorName}
        </Typography>
        <Typography gutterBottom variant="h4" component="div">
          {event.title}
        </Typography>
        <Typography
          variant="body2"
          color={colors.grey[400]}
          display={"flex"}
          alignItems={"center"}
        >
          <img
            src="/assets/schedule.png"
            alt="calendar icon"
            width={20}
            style={{ marginRight: "5px" }}
          />
          {dateFormat(event.dateAndTime, "mmm d, h:MM TT")}
        </Typography>
        <Typography
          variant="body2"
          color={colors.grey[400]}
          display={"flex"}
          alignItems={"center"}
          mt={"10px"}
        >
          {event.venue === "Discord" && (
            <img
              src="/assets/discord.png"
              alt="Discord icon"
              width={20}
              style={{ marginRight: "5px" }}
            />
          )}{" "}
          {event.venue}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => viewEvent(event)}
          size="small"
          sx={{ color: "#4d91ff" }}
        >
          View
        </Button>
        <Button size="small" sx={{ color: "#4d91ff" }}>
          Edit details
        </Button>
      </CardActions>
    </Card>
  );
};

export default EventCard;
