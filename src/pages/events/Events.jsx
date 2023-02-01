import React from "react";
import { Box } from '@mui/material'
import Header from '../../components/Header'
import EventCard from '../../components/EventCard'

const Events = () => {
  return (
    <Box m={"20px"}>
      <Header title={"Events"} subtitle={"Let's Inspire people."}/>

      <Box mt={"40px"} display='flex' flexWrap={'wrap'} justifyContent={'space-evenly'}>
        <EventCard speaker={'Anna marry'} topic={'Should you start a startup?'} coverImg={'/assets/pexels-igreja-dimensão-10401268.jpg'} date={"25-01-2022"} time={'10:00 AM'} venue={'Discord'}/>
        <EventCard speaker={'Anna marry'} topic={'Should you start a startup?'} coverImg={'/assets/pexels-igreja-dimensão-10401268.jpg'} date={"25-01-2022"} time={'10:00 AM'} venue={'Discord'}/>
        <EventCard speaker={'Anna marry'} topic={'Should you start a startup?'} coverImg={'/assets/pexels-igreja-dimensão-10401268.jpg'} date={"25-01-2022"} time={'10:00 AM'} venue={'Discord'}/>
      </Box>

    </Box>
  )
}

export default Events