import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/movies-api';

import { CastList, CastItem, IdCard } from './MovieCredits.styled';

const MovieCredits = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchCast = async () => {
      try {
        const result = await getMovieCast(movieId);
        setCast(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <>
      {isLoading && 'Loading...'}
      {error && <div>{error}</div>}
      <CastList>
        {cast.map(castItem => {
          return (
            <CastItem key={castItem.id}>
              <img
                src={`https://image.tmdb.org/t/p/w300${castItem.profile_path}`}
                alt={`${castItem.name} portrait`}
              />
              <IdCard>
                <p>Name: {castItem.name}</p>
                <p>Role: {castItem.character}</p>
              </IdCard>
            </CastItem>
          );
        })}
      </CastList>
    </>
  );
};

export default MovieCredits;
