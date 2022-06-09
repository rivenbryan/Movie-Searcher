import React from 'react'
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Search = ({ searchTerm, setSearchTerm, searchMovies }) => {

    return (
     
           <Box>
           <Typography variant="h2" align="center" style={{paddingTop: '20px'}}> Movie Searcher</Typography>

                <Box  sx={{padding: '20px', width: 300, margin: 'auto' }} >
                    <Input
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search for movies"
                    />
                    <Button sx={{ marginLeft: '10px' }} size="small" variant="contained" onClick={() => searchMovies(searchTerm)}>Search </Button>
                </Box>
            </Box>

        
    )
}


export default Search