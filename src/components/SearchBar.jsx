import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';


const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(searchTerm) {
            navigate(`/search/${searchTerm}`);
            setSearchTerm('')
        }
    }

    return(
    <Paper
        components="form"
        sx={{
            borderRadius: 10,
            border: '1px solid grey',
            pl: 2,
            boxShadow: 'none',
            mr: { sm: 5 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '33px',
            
        }}
    >
        <input
         className="search-bar"
         placeholder='search...'
         value={searchTerm}
         onChange={(e) => setSearchTerm(e.target.value)}
         style={{color: 'gray', fontSize: '16px'}}
         
        />
        <IconButton type ='submit' sx={{ p: '10px', color: 'red'}} onClick={handleSubmit}>
            <Search />
        </IconButton>
    </Paper>
  )

    }


export default SearchBar
