import React from 'react';
import styled from 'styled-components';
import { bpSmall } from '../styles/breakpoints';

const calculatePadding = size => {
  if (size === 'medium') {
    return '1.5rem 3.5rem';
  }
  if (size === 'large') {
    return '1.8rem 4.2rem';
  }
  if (size === 'small') {
    return '1.6rem 2.4rem';
  }
};

const StyledButton = styled.button`
  padding: ${({ size }) => calculatePadding(size)};
  background-color: var(--moderate-cyan);
  color: var(--white);
  font-size: 1.4rem;
  font-weight: 700;
  border-radius: 10rem;
  transition: all 0.5s ease-in;

  &:hover {
    background-color: var(--dark-cyan);
  }

  &:disabled {
    background-color: var(--moderate-gray);
    cursor: not-allowed;
  }
`;

const Button = ({ onClick, children, size, isDisabled = false, type = 'button', className }) => {
  return (
    <StyledButton
      className={className}
      disabled={isDisabled}
      size={size}
      onClick={onClick}
      type={type}>
      {children}
    </StyledButton>
  );
};

export default Button;
