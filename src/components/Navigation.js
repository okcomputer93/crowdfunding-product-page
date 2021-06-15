import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const StyledNavigation = styled.nav`
  max-width: var(--max-width);
  padding: 0 var(--body-padding) 0;
  margin: 4rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .links {
    font-size: 1.6rem;
    flex-basis: 25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const StyledLink = styled.a`
  font-size: 1.5rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  flex-shrink: 0;
  display: block;
`;

const Navigation = () => {
  return (
    <StyledNavigation>
      <Logo />
      <div className="links">
        <StyledLink>About</StyledLink>
        <StyledLink>Discover</StyledLink>
        <StyledLink>Get Started</StyledLink>
      </div>
    </StyledNavigation>
  );
};

export default Navigation;
