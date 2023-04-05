import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material';
import Videos from './Videos';
import { useParams } from 'react-router-dom';

import { fetchFromAPI } from '../utils/fetchFromApi';


const SearchFeed = () => {

  const {searchTerm} = useParams()

  const [videos, setVideos] = useState([])

 
  useEffect(() =>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideos(data.items))
      .catch((error) => console.error(error)); 
  }, [searchTerm])

  return (
      <Box  sx={{
        overflowY: 'auto', height: '100vh', width: '90vw', margin: 'auto', flex: 2, padding: {md: '1rem 0', xs: '1rem 1rem'}, paddingLeft: {md: '1rem'}, paddingRight: {md: '1rem'}
      }}>
        <Typography variant="h4" fontWeight={700} mb={2} sx={{
          color: '#fff'
        }}>
          Search Results For: <span
            style={{ color: '#FC1503', marginLeft: '10px' ,fontSize: '30px' }}
            >{searchTerm}</span> Videos
        </Typography>
        <Videos videos={videos} />
      </Box>
  )
}

export default SearchFeed
