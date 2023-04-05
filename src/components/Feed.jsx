import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material';
import SideBar from './SideBar';
import Videos from './Videos';

import { fetchFromAPI } from '../utils/fetchFromApi';


const Feed = () => {

  const [selectedCategory, setselectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

 
  useEffect(() =>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items))
      .catch((error) => console.error(error)); 
  }, [selectedCategory])

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row"} }}>
      <Box sx={{ height: { sm: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d',
       px: { sm: 0, md: 2 }, width: {sx: '', md:'160px'} }}>

          <SideBar 
          selectedCategory={selectedCategory}
          setselectedCategory={setselectedCategory}
          />

          <Typography className="copyright"
          variant="body2" sx={{ mt: 1.5,  color: '#fff' }}>
            Copyright 2023 Daveton Academy
          </Typography>
      </Box>
      <Box  sx={{
        overflowY: 'auto', height: '100vh', flex: 2, padding: {md: '1rem 0', xs: '1rem 1rem'}, paddingLeft: {md: '1rem'}, paddingRight: {md: '4rem'}
      }}>
        <Typography variant="h4" fontWeight={700} mb={2} sx={{
          color: '#fff'
        }}>
          {selectedCategory}<span
            style={{ color: '#FC1503', marginLeft: '10px' ,fontSize: '30px' }}
            >Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed
