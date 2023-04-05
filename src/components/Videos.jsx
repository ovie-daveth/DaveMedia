import React from 'react'
import { Stack, Box } from '@mui/material'
import {VideoCard, ChannelCard} from './'
import { Link } from 'react-router-dom'

const Videos = ({videos}) => {
  return (
    <Stack sx={{display: 'grid', gridTemplateColumns: {lg: 'repeat(4, 1fr)', md: 'repeat(3, 1fr)', sm: 'repeat(2, 1fr)'}, gap: '1rem', margin: 'auto', flexWrap: 'wrap'}}>
      {
        videos.map((item, index) => (
          <Box key={index}>
            {
              item.id.channelId && (  <Link to={`/channel/${item?.id?.channelId}`}><ChannelCard channelDetail ={item} /> </Link>)
            }
            {
              item.id.videoId && <VideoCard video ={item} /> 
            }
          </Box>
        ))
      }
    </Stack>
  )
}

export default Videos
