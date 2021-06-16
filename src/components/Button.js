import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 2rem 4rem;
  background-color: var(--moderate-cyan);
  color: var(--white);
  font-size: 1.4rem;
  font-weight: 700;
  border-radius: 10rem;
  transition: all 0.5s ease-in;

  &:hover {
    background-color: var(--dark-cyan);
  }
`;

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
