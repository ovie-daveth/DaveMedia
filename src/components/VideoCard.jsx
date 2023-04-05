import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoThumbnailUrl, demoVideoUrl, demoChannelTitle, demoChannelUrl, demoVideoTitle } from '../utils/constance'

const VideoCard = ({video: {id: { videoId }, snippet }}) => {
   console.log(videoId, snippet)
  return (
    <Card sx={{ boxShadow: 'none', borderRadius: '0', border: 'none', width: {lg: 270, md: 320} }}>
      <Link to={videoId  ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia 
        image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} 
        alt={snippet?.title}
        sx={{width: '100%', height: 180}}
        />
      </Link>
      <CardContent sx={{backgroundColor: '#1e1e1e', height: '106px'}}>
      <Link to={videoId  ? `/video/${videoId}` : demoVideoUrl}>

        <Typography sx={{color: '#ffff', fontSize:{lg:'14px', sm: '16px'} }} variant='subtitle1' fontWeight='bold'>
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={snippet?.channelId  ? `/channel/${snippet?.channelId}` : demoChannelUrl}>

        <Typography sx={{color: 'gray', fontSize: '13px'}} variant='subtitle1' fontWeight='bold'>
            {snippet?.channelTitle || demoChannelTitle.slice(0, 60)}
            <CheckCircle sx={{fontSize: 12, color:'gray', ml: '5px'}} />
        </Typography>
      </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard
