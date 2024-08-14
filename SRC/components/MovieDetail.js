// src/components/MovieDetail.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const MovieDetail = ({ movies }) => {
  const { id } = useParams();
  const movie = movies[id];

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-detail">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerURL}
        title={`${movie.title} Trailer`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Link to="/">Back</Link>
    </div>
  );
};

export default MovieDetail;
