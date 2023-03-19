import { useParams, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from 'services/movies-api';

import { Container } from 'components/Layout/Layout.styled';
import { Title, BackLink, InfoLink } from './MovieDetail.syled';

const MovieCard = () => {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const backLink = location?.state?.from ?? '/';
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const fetchMovie = async () => {
      try {
        const result = await getMovieDetails(movieId);
        setMovie(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovie();
  }, [movieId]);

  const releaseYear = () => new Date(movie.release_date).getFullYear();

  return (
    <Container>
      <BackLink to={backLink}>Back</BackLink>
      {movie && <Title>{movie.title}</Title>}
      {isLoading && 'Loading...'}
      {error && <div>{error}</div>}
      {movie && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={movie.title}
          />
          <h3>{movie.original_title}</h3>
          <p>({releaseYear()})</p>
          <p>User score: {movie.popularity}</p>
          <div>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </div>
        </div>
      )}
      <hr />
      <div>
        <h2>Additional information</h2>
        <InfoLink to={`/movies/${movieId}/cast`} state={location.state}>
          Cast
        </InfoLink>
        <InfoLink to={`/movies/${movieId}/reviews`} state={location.state}>
          Reviews
        </InfoLink>
        <hr />
        <Outlet />
      </div>
    </Container>
  );
};

export default MovieCard;
