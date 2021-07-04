import React from 'react';
import styled from 'styled-components';

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
  width: auto;
  background-color: var(--white);
  border-radius: 15px;
  position: relative;
  border: ${({ border }) => calculateBorder(border)} solid 1px;
`;

const Card = ({ children, className, padding = 'large', border = 'light' }) => {
  return (
    <StyledCard padding={padding} border={border} className={className}>
      {children}
    </StyledCard>
  );
};

export default Card;
