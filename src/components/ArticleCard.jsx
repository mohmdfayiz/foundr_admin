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

const ArticleCard = ({ coverImg, heading, date }) => {
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
        <Typography gutterBottom variant="h4" fontWeight={'bold'} component="div">
          {heading}
        </Typography>
        <Typography variant="body2" color={colors.grey[400]}>
          {date}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{color:"#4d91ff"}}>View</Button>
        <Button size="small" sx={{color:"#4d91ff"}}>Edit Article</Button>
      </CardActions>
    </Card>
  );
};


export default ArticleCard
