import React, { useState, useEffect } from "react";
import { Box, Button, useTheme } from "@mui/material";
import Header from "../../components/Header";
import EventCard from "../../components/EventCard";
import { tokens } from "../../theme";
import { getEvents } from "../../helper/helper";
import { NewEvent } from "./NewEvent";
import { useSelector, useDispatch } from "react-redux";
import { setShow } from "../../features/eventModal/modalSlice";
import LoadingSkeleton from "../../components/LoadingSkeleton";

const Events = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { show } = useSelector((state) => state.showModal);
 
  useEffect(() => {
    setLoading(true);
    getEvents().then((data) => {
      setLoading(false);
      setEvents(data);
    });
  }, []);

  const handleClickOpen = () => {
    dispatch(setShow());
  };

  return (
    <Box m={"20px"}>
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
        justifyContent={"center"}
      >
        {loading ? (
          <LoadingSkeleton/>
        ) : (
          events.map((event, index) => {
            return <EventCard key={index} event={event} />;
          })
        )}
      </Box>

      <NewEvent show={show} />
    </Box>
  );
};

export default Events;
