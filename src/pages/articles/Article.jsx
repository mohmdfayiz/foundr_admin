import React from "react";
import { Box, Card, CardContent, CardMedia } from "@mui/material";
import Header from "../../components/Header";
import { useLocation } from "react-router-dom";
import dateFormat from "dateformat";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";

const Article = () => {
  const location = useLocation();
  const { article } = location.state;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m={"20px"}>
      <Header title={article.title} subtitle={"Publised on : " + dateFormat(article.createdAt, "longDate")} />

      <Box mt={'30px'}>
        <Card
          sx={{ width: "100%" }}
          style={{ backgroundColor: colors.primary[400] }}
        >
          <CardMedia
            component={"img"}
            src={article.coverImage}
            height="250px"
            alt="coverImage"
          />
          <CardContent dangerouslySetInnerHTML={{ __html: article.content }} />
        </Card>
      </Box>
    </Box>
  );
};

export default Article;
