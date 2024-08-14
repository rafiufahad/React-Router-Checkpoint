// src/components/MovieList.js
import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <div key={index} className="movie-card">
          <Link to={`/movies/${index}`}>
            <img src={movie.posterURL} alt={movie.title} />
            <h3>{movie.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
