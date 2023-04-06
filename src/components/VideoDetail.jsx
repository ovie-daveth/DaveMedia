import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import ReactPlayer from 'react-player'
import { useParams, Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'
import Videos from './Videos'
import { useState, useEffect } from 'react'
import { fetchFromAPI } from '../utils/fetchFromApi'

const VideoDetail = () => {
  const {id} = useParams()
  const [videoDetails, setVideoDetails] = useState(null)
  const [videos, setVideos] = useState(null)

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data) => setVideoDetails(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data)=> setVideos(data.items))

    console.log(videos)
  }, [])
  if(!videoDetails?.snippet) return 'Loading...'
  const {snippet: {title, channelId, channelTitle}, statistics: {viewCount, likeCount}} = videoDetails

  return (
    <Box minHeight="95vh"  width="100vw" pl={{xs: 0, sm: 5}} >
      <Stack direction={{xs: 'column', sm: 'row'}} gap="20px" >
        <Box  width={{xs: "100%", sm: '75%'}}>
            <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
                <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls 
                 width="100%" height="70vh"
                />
                <Typography sx={{color: '#fff',}} variant='h5' fontWeight='bold' p={2}>
                 {title}
                </Typography>
                <Stack direction="row" justifyContent="space-between" color="#fff" py={1} px={2}>
                    <Link to={`/channel/${channelId}`}>
                      <Typography color="#fff" variant={{sm: 'subtitle1', md: 'h6'}}>
                        {channelTitle}
                        <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px'}} />
                      </Typography>
                    </Link>
                    <Stack direction="row" gap='20px' alignSelf='center'>
                      <Typography variant='body1' sx={{ opacity: 0.7 }}>
                          {parseInt(viewCount).toLocaleString()} Views
                      </Typography>
                      <Typography variant='body1' sx={{ opacity: 0.7 }}>
                          {parseInt(likeCount).toLocaleString()} Likes
                      </Typography>
                    </Stack>
                </Stack>
            </Box>
        </Box>
        <Box width={{xs: '100%', sm: '20%'}}>
          <Videos videos={videos}  />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail
