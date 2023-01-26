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
  
  const EventCard = ({ coverImg, speaker, topic, date, time, venue}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  
    return (
      <Card sx={{ maxWidth: 300, m:"5px"}} style={{backgroundColor:colors.primary[400]}}>
        <CardMedia
          component="img"
          alt="Cover image"
          height="140"
          image={coverImg}
        />
        <CardContent>
          <Typography variant="h6" fontWeight={'bold'} color={colors.grey[400]}>
            {speaker}
          </Typography>
          <Typography gutterBottom variant="h4" component="div">
            {topic}
          </Typography>
          <Typography variant="body2" color={colors.grey[400]}>
            {date}
          </Typography>
          <Typography variant="body2" color={colors.grey[400]}>
            {venue} {venue === "Discord" &&  <img src="/public/assets/discord.png" alt="icon"/> }
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
  