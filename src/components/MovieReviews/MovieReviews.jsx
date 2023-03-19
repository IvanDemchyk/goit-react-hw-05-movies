import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/movies-api';

import { ReviewList, ReviewItem } from './MovieReviews.styled';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchReviews = async () => {
      try {
        const result = await getMovieReviews(movieId);
        setReviews(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <>
      {isLoading && 'Loading...'}
      {error && <div>{error}</div>}
      <ReviewList>
        {reviews.map(review => {
          return (
            <ReviewItem key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </ReviewItem>
          );
        })}
      </ReviewList>
    </>
  );
};

export default MovieReviews;
