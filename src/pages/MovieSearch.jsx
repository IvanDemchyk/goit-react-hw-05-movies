import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieList from 'components/MovieList/MovieList';
import SearchBar from 'components/SearchBar/SearchBar';
import { getMovieSearch } from 'services/movies-api';

import { Container, Title } from 'components/Layout/Layout.styled';

const MovieSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const searchRequest = searchParams.get('query');

  useEffect(() => {
    if (!searchRequest) {
      return;
    }

    setIsLoading(true);
    const fetchMovie = async () => {
      try {
        const result = await getMovieSearch(searchRequest);
        if (!result.length) {
          alert('No movies found!');
        }
        setMovies(result);
      } catch (error) {
        setError('Ooops. Something went wrong...');
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovie();
  }, [searchRequest]);

  const onSubmit = value => {
    setSearchParams({ query: `${value}` });
  };

  return (
    <Container>
      <Title>Movie Search</Title>
      {isLoading && 'Loading...'}
      {error && <div>{error}</div>}
      <SearchBar onSearch={onSubmit} />
      {movies && <MovieList movies={movies} />}
    </Container>
  );
};

export default MovieSearch;
