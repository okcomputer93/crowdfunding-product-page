import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  width: 68rem;
  background-color: var(--white);
  border-radius: 15px;
  padding: 5rem 4rem;
  position: relative;
  border: var(--medium-gray) solid 1px;
`;

const Card = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};

export default Card;
