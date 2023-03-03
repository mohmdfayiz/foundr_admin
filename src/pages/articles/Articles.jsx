import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import ArticleCard from "../../components/ArticleCard";
import { getArticles } from "../../helper/helper";
import LoadingSkeleton from "../../components/LoadingSkeleton";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [action, setAction] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getArticles().then((data) => {
      setLoading(false);
      setArticles(data);
    });
  }, [action]);

  return (
    <Box m={"20px"}>
      <Header title={"Articles"} subtitle={"Head into daily articles"} />

      <Box
        mt={"40px"}
        display="flex"
        flexWrap={"wrap"}
        justifyContent={"center"}
      >
        {loading
          ? <LoadingSkeleton/>
          : articles.map((article, index) => {
              return (
                <ArticleCard
                  key={index}
                  article={article}
                  action={action}
                  setAction={setAction}
                />
              );
            })}
      </Box>
    </Box>
  );
};

export default Articles;
