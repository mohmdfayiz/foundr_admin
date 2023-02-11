import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import EventCard from "../../components/EventCard";
import { tokens } from "../../theme";
import { getEvents } from "../../helper/helper";
import { Toaster } from "react-hot-toast";
import { NewEvent } from "./NewEvent";
import {useSelector, useDispatch } from "react-redux";
import { setShow } from "../../features/eventModal/modalSlice"

const Events = () => {

  // const [open, setOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch()
  const {show} = useSelector((state)=>state.showModal)

  useEffect(() => { 
    getEvents().then(data =>  setEvents(data)
    )},[]);


  const handleClickOpen = () => {
    dispatch(setShow())
  };



  return (
    <Box m={"20px"}>
      <Toaster position="top-right" reverseOrder="false" />
      <Header title={"Events"} subtitle={"Let's Inspire people."} />
      <Button
        variant="filled"
        sx={{ background: colors.primary[400] }}
        onClick={handleClickOpen}
      >
        Host A New Event
      </Button>
      <Box
        mt={"40px"}
        display="flex"
        flexWrap={"wrap"}
        justifyContent={"space-evenly"}
      >
        {events.map((event) => {
          return (
            <EventCard
              key={event?._id}
              speaker={event?.mentorName}
              topic={event?.title}
              coverImg={event?.mentorImage}
              date={event?.dateAndTime}
              venue={event?.venue}
            />
          );
        })}
      </Box>

        <NewEvent show={show}/>

    </Box>
  );
};

export default Events;
