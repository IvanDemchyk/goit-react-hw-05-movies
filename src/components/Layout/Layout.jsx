import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { GlobalStyle } from 'components/GlobalStyles';
import { Container, Header, Link } from './Layout.styled';

export const Layout = () => {
  return (
    <div>
      <Header>
        <Container>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </Container>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
      <GlobalStyle />
    </div>
  );
};
