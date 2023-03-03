import { useTheme } from "@emotion/react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { tokens } from "../../theme";
import dateFormat from "dateformat";
import AttendeesTable from "./AttendeesTable";
import { getAttendees } from "../../helper/helper";
import { useState } from "react";

const Event = () => {
  const theme = useTheme();
  const location = useLocation();
  const { event } = location.state;
  const colors = tokens(theme.palette.mode);

  const [attendees, setAttendees] = useState([]);

  const getEventAttendees = async (eventId) => {
    const { attendees } = await getAttendees(eventId);
    setAttendees(attendees);
    console.log(attendees);
  };

  useEffect(() => {
    getEventAttendees(event._id);
  },[event._id]);

  return (
    <Box m={"20px"}>
      {/* <Header title={event.mentorName} subtitle={'Date: '+formatDate(event.createdAt)}/> */}
      <Box mt={"30px"}>
        <Card sx={{ display: "flex", background: colors.primary[400] }}>
          <CardMedia
            component="img"
            sx={{ width: "30%" }}
            image={event.mentorImage}
            alt="Live from space album cover"
          />
          <CardContent
            sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <Typography variant="h4" fontWeight={"bold"}>
              {event.title}
            </Typography>
            <Typography>{event.description}</Typography>
            <Box display={"flex"} gap="10px">
              <img src="/assets/discord.png" alt="discord" width={20} />{" "}
              <Typography>{event.venue}</Typography>
            </Box>
            <Box display={"flex"} gap="10px">
              <img src="/assets/microphone.png" alt="microphone" width={20} />{" "}
              <Typography>{event.mentorName}</Typography>
            </Box>
            <Box display={"flex"} gap="10px">
              <img src="/assets/schedule.png" alt="calendar" width={20} />{" "}
              <Typography>{dateFormat(event.createdAt, "fullDate")}</Typography>
            </Box>
            <Box display={"flex"} gap="10px">
              <img src="/assets/dollar.png" alt="dollar" width={20} />{" "}
              <Typography>{event.enrollmentFee} Dollars</Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box mt={"30px"}>
        <AttendeesTable attendees={attendees} />
      </Box>
    </Box>
  );
};

export default Event;
