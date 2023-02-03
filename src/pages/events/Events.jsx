import React,{useState} from "react";
import { 
  Box,
  Button, 
  TextField, 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogContentText, 
  DialogTitle
 } from '@mui/material'
import Header from '../../components/Header'
import EventCard from '../../components/EventCard'

const Events = () => {

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box m={"20px"}>
      <Header title={"Events"} subtitle={"Let's Inspire people."}/>
      <Button variant="contained" onClick={handleClickOpen}>Host A New Event</Button>
      <Box mt={"40px"} display='flex' flexWrap={'wrap'} justifyContent={'space-evenly'}>
        <EventCard speaker={'Anna marry'} topic={'Should you start a startup?'} coverImg={'/assets/pexels-igreja-dimensão-10401268.jpg'} date={"25-01-2022"} time={'10:00 AM'} venue={'Discord'}/>
        <EventCard speaker={'Anna marry'} topic={'Should you start a startup?'} coverImg={'/assets/pexels-igreja-dimensão-10401268.jpg'} date={"25-01-2022"} time={'10:00 AM'} venue={'Discord'}/>
        <EventCard speaker={'Anna marry'} topic={'Should you start a startup?'} coverImg={'/assets/pexels-igreja-dimensão-10401268.jpg'} date={"25-01-2022"} time={'10:00 AM'} venue={'Discord'}/>
      </Box>


      <Dialog open={open} maxWidth={'lg'}>
        <DialogTitle sx={{fontWeight:"bold"}}>New Event</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill all the fields below.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title of Event"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Mentor"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>

    </Box>
  )
}

export default Events