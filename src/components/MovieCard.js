import React from 'react'

import { Box, Card, CardContent, Typography, CardMedia} from "@mui/material/"


const MovieCard = ({ movie }) => {
    console.log(movie)

    return (

        <>
            <Box width='360px' align='center'>

                <Card>
                    <CardContent>
                        <Typography gutterBottom variant='h6'>{movie.Title}</Typography>
    
                        <CardMedia sx={{marginBottom: '10px'}} component='img' height='140' image={movie.Poster === 'N/A'  ? 'https://via.placeholder.com/400' : movie.Poster  }/>
                        <Typography variant="h8">
                            {movie.Year}
                        </Typography>

                    </CardContent>
                </Card>
            </Box>

        </>


    )
}

export default MovieCard