import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';
import NavigationLinks from './NavigationLinks';

const StyledNavigation = styled.nav`
  max-width: var(--max-width);
  padding: 4rem var(--body-padding);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StyledLink = styled.a`
  flex-shrink: 0;
  display: block;
`;

const Navigation = () => {
  return (
    <StyledNavigation>
      <Logo />
      <NavigationLinks>
        <h3>
          <StyledLink href="#">About</StyledLink>
        </h3>
        <h3>
          <StyledLink href="#">Discover</StyledLink>
        </h3>
        <h3>
          <StyledLink href="#">Get Started</StyledLink>
        </h3>
      </NavigationLinks>
    </StyledNavigation>
  );
};

export default Navigation;
