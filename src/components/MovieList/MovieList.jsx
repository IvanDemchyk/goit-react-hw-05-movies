import { useLocation } from 'react-router-dom';

import { List, Item } from './MovieList.syled';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <List>
        {movies.map(({ id, original_title }) => (
          <li key={id}>
            <Item to={`/movies/${id}`} state={{ from: location }}>
              {original_title}
            </Item>
          </li>
        ))}
      </List>
    </>
  );
};

export default MovieList;
