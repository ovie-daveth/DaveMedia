import React from 'react'
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import  SearchBar  from './SearchBar'

import { logo } from '../utils/constance'

const Navbar = () => (
   <Stack direction="row" alignment="center" p={2} sx={{position: 'sticky', top: '0', background: '#000', justifyContent: 'space-between'}}>
    <Link to="/" style={{display: 'flex', alignItems: 'center'}}>
    <img src={logo} alt="logo" height={40}/>
    </Link>
    <SearchBar />

   </Stack>
  )

export default Navbar
