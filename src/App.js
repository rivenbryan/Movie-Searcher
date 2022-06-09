import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import MovieCard from "./components/MovieCard";
import { Grid, Box, Typography } from "@mui/material/"
import background from './img/background.jpg';
const API_URL = "https://www.omdbapi.com?apikey=b6003d8a";


const App = () => {

  var sectionStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'auto',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',

  }

  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Superman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  return (
    <>
      <Box sx={sectionStyle}>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchMovies={searchMovies} />

        {
          movies?.length > 0
            ? (
              <Grid container rowSpacing={3} sx={
                { marginLeft: '10px' }
              } >
                {movies && movies.map(movie => (
                  <Grid item md='4' sm='4'>
                    <MovieCard movie={movie} />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Typography sx={{ paddingTop: '10px' }} variant="body2" align="center">Result not found. Please use input field.</Typography>
            )

        }
      </Box>

    </>
  );
};

export default App;