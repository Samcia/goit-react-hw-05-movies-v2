import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: white;
  padding: 1rem;
  border: 1px solid #aaa;
  margin-right: 1rem;
  border-radius: 0.5rem;
  background-color: #7fffd4;

  &.active {
    border: 2px solid magenta;
    color: gray;
  }
`;

export const TopMenu = () => {
  return (
    <>
      <nav className="navigation">
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
      <Outlet />
    </>
  );
};
