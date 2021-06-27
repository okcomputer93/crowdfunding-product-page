import React from 'react';
import styled from 'styled-components';

const calculatePadding = padding => {
  if (padding === 'large') {
    return '5rem 4rem';
  }
  if (padding === 'medium') {
    return '3rem';
  }
  if (padding === 'small') {
    return '2rem';
  }
};

const calculateBorder = border => {
  if (border === 'light') {
    return 'var(--light-gray)';
  }
  if (border === 'dark') {
    return 'var(--medium-gray)';
  }
  if (border === 'cyan') {
    return 'var(--moderate-cyan)';
  }
};

const StyledCard = styled.div`
  width: 100%;
  background-color: var(--white);
  border-radius: 15px;
  padding: ${({ padding }) => calculatePadding(padding)};
  position: relative;
  border: ${({ border }) => calculateBorder(border)} solid 1px;
`;

const Card = ({ children, padding = 'large', border = 'light' }) => {
  return (
    <StyledCard padding={padding} border={border}>
      {children}
    </StyledCard>
  );
};

export default Card;
