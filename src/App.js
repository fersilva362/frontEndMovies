import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout.js'
import Home from './components/Home/Home.js'
import Header from './components/header/Header.js';
import Trailer from './components/trailer/Trailer.js';
import Reviews from './components/reviewForm/reviews/Reviews.js';



function App() {
  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState()
  const [reviews, setReviews] = useState()
  const getMovies = async () => {
    try {
      const response = await api.get('/api/v1/movies');
      setMovies(response.data);
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  }
  const getMovieData = async (movieId) => {
    try {
      const response = await api.get(`/api/v1/movies/${movieId}`)
      const singleMovie = response.data

      setMovie(singleMovie)
      setReviews(singleMovie.reviewIds)

    } catch (error) {
      console.log(error)

    }


  }
  useEffect(() => { getMovies() }, [])

  return (

    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home movies={movies} />} />
          <Route path='/trailer/:ytTrailerId' element={<Trailer />} />
          <Route path='/reviews/:movieId' element={<Reviews getMovieData={getMovieData} movie={movie} setReviews={setReviews} reviews={reviews} />} />

        </Route>




      </Routes>

    </div>


  );
}

export default App;
