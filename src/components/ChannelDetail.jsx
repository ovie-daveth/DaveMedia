import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import {ChannelCard, Videos} from './'
import { fetchFromAPI } from '../utils/fetchFromApi'



const ChannelDetail = () => {
  const {id} = useParams()
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data)=> setChannelDetail(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=> setVideos(data?.items))

    console.log(channelDetail, videos)
  }, [id])
  return (
    <Box sx={{minHeight: '95vh'}}>
      <Box>
        <div style={{
        background: 'linear-gradient(90deg, rgba(227,24,14,1) 0%, rgba(9,85,121,1) 62%, rgba(255,0,224,1) 100%)',
        zIndex: 10,
        height: '240px'
      }}></div>
      <div style={{marginTop: '-8rem', display: 'flex', flexDirection:'column', color: '#fff', justifyContent: 'center', alignItems: 'center', gap: 0}}>
        <ChannelCard channelDetail={channelDetail} />
           
      </div>
      </Box>
      <Box display="flex" p="2" sx={{marginTop: '20px'}}>
        <Box sx={{mr: {sm: '30px'}}} />
          <Videos  videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail
