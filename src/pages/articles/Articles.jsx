import React,{useEffect, useState} from "react";
import { Box } from '@mui/material'
import Header from '../../components/Header'
import ArticleCard from '../../components/ArticleCard'
import { getArticles } from "../../helper/helper";

const Articles = () => {

  const [articles, setArticles] = useState([])

  useEffect(()=>{
    getArticles().then(data => {
      setArticles(data)
    });
  },[])

  return (
    <Box m={"20px"}>
      <Header title={"Articles"} subtitle={"Head into daily articles"}/>

      <Box mt={"40px"} display='flex' flexWrap={'wrap'} justifyContent={'space-evenly'}>
      {articles.map((article) => 
      {return (
        <ArticleCard heading={article?.title} coverImg={article?.coverImage} date={article?.createdAt}/>
      )}
      )}

      </Box>

    </Box>
  )
}

export default Articles