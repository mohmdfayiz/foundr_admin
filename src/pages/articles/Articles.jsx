import React from "react";
import { Box } from '@mui/material'
import Header from '../../components/Header'
import ArticleCard from '../../components/ArticleCard'

const Articles = () => {
  return (
    <Box m={"20px"}>
      <Header title={"Articles"} subtitle={"Head into daily articles"}/>

      <Box mt={"40px"} display='flex' flexWrap={'wrap'} justifyContent={'space-evenly'}>
        <ArticleCard heading={'Should you start a startup?'} coverImg={'/assets/pexels-fauxels-3184292.jpg'} date={"25-01-2022"}/>
        <ArticleCard heading={'Should you start a startup?'} coverImg={'/assets/pexels-fauxels-3184292.jpg'} date={"25-01-2022"}/>
        <ArticleCard heading={'Should you start a startup?'} coverImg={'/assets/pexels-fauxels-3184292.jpg'} date={"25-01-2022"}/>
      </Box>

    </Box>
  )
}

export default Articles