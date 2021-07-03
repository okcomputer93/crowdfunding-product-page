import React from 'react';
import styled from 'styled-components';
import { bpSmall } from '../styles/breakpoints';

const StyledTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: -1px;
  color: var(--white);

  @media only screen and (max-width: ${bpSmall}) {
    font-size: 4rem;
  }

  .title__link {
    color: var(--white);
  }
`;

const Logo = () => {
  return (
    <StyledTitle>
      <a className="title__link" href="/">
        crowdfund
      </a>
    </StyledTitle>
  );
};

export default Logo;
