import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const StyledNavigation = styled.nav`
  max-width: var(--max-width);
  padding: 4rem var(--body-padding);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .links {
    font-size: 1.6rem;
    flex-basis: 24rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const StyledLink = styled.a`
  font-size: 1.4rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  flex-shrink: 0;
  display: block;
  letter-spacing: -1px;
  color: var(--white);
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
