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
  
  const EventCard = ({ coverImg, speaker, topic, date, venue, key}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  
    return (
      <Card key={key} sx={{ width: 300, m:"5px"}} style={{backgroundColor:colors.primary[400]}}>
        <CardMedia
          component="img"
          alt="Cover image"
          height="160"
          image={coverImg}
        />
        <CardContent>
          <Typography variant="h6" fontWeight={'bold'} color={colors.grey[200]}>
            {speaker}
          </Typography>
          <Typography gutterBottom variant="h4" component="div">
            {topic}
          </Typography>
          <Typography variant="body2" color={colors.grey[400]} display={'flex'} alignItems={'center'}>
            <img src="/assets/schedule.png" alt="calendar icon" width={20} style={{marginRight:'5px'}}/>{date}
          </Typography>
          <Typography variant="body2" color={colors.grey[400]} display={'flex'} alignItems={'center'} mt={'10px'}>
            {venue === "Discord" &&  <img src="/assets/discord.png" alt="Discord icon" width={20} style={{marginRight:'5px'}}/>} {venue}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" sx={{color:"#4d91ff"}}>View</Button>
          <Button size="small" sx={{color:"#4d91ff"}}>Edit details</Button>
        </CardActions>
      </Card>
    );
  };
  
  
  export default EventCard
  