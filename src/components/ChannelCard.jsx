import React from 'react'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'

import { demoProfilePicture } from '../utils/constance'

const ChannelCard = ({channelDetail}) => {
  return (
    <Box
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '1.4rem 0',
      heigth: 180,
      width: '100%'
    
    }}
    >
        <CardContent
        sx={{
          display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: "center", textAlign: 'center', color: '#fff'
        }}
        >
          <CardMedia 
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{borderRadius: '50%', height: 190, width: '100%', border: '1px solid #eeee'}}
          />
          <Typography
          variant='h6'
          >
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{fontSize: 14, color: 'grey', ml: '5px'}} />
          </Typography>
         

        </CardContent>

  
    </Box>
  )
}

export default ChannelCard
