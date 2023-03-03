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
import { updateArticleVisibility } from "../helper/helper";
import { toast } from "react-hot-toast";

const ArticleCard = ({ article, setAction, action }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const viewArticle = (article) => {
    navigate("/article", { state: { article } });
  };

  const updateVisibility = async (articleId, isHide) => {
    const { status } = await updateArticleVisibility(articleId);
    const message = isHide ? "Article Published" : "Article Hided";
    if (status === 200) toast.success(message);
    setAction(!action)
  };

  return (
    <Card sx={{ width: 300 }} style={{ backgroundColor: colors.primary[400] }}>
      <CardMedia
        component="img"
        alt="Cover image"
        height="140"
        image={article.coverImage}
      />
      <CardContent sx={{ height: 100 }}>
        <Typography
          gutterBottom
          variant="h4"
          fontWeight={"bold"}
          component="div"
        >
          {article.title}
        </Typography>
        <Typography variant="body2" color={colors.grey[400]}>
          {dateFormat(article.createdAt, "mediumDate")}
        </Typography>
      </CardContent>
      <CardActions sx={{}}>
        <Button
          onClick={() => viewArticle(article)}
          size="small"
          sx={{ color: "#4d91ff" }}
        >
          View
        </Button>
        <Button
          onClick={() => updateVisibility(article._id, article.isHide)}
          size="small"
          sx={{ color: "#4d91ff" }}
        >
          {article.isHide ? "Publish Article" : "Hide Article"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ArticleCard;
