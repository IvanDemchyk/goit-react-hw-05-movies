import { useState, useEffect } from 'react';
import { getMovies } from 'services/movies-api';
import MovieList from 'components/MovieList/MovieList';

import { Container, Title } from 'components/Layout/Layout.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchTrends = async () => {
      try {
        const result = await getMovies();
        setMovies(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTrends();
  }, []);

  return (
    <Container>
      <Title>Trending movies</Title>
      {isLoading && 'Loading...'}
      {error && <div>{error}</div>}
      {movies && <MovieList movies={movies} />}
    </Container>
  );
};

export default Home;
