import React from 'react';
import styled from 'styled-components';

const calculatePadding = padding => {
  if (padding === 'large') {
    return '5rem 4rem';
  }
  if (padding === 'medium') {
    return '3rem';
  }
};

const StyledCard = styled.div`
  width: ${({ full }) => (full ? '100%' : '68rem')};
  background-color: var(--white);
  border-radius: 15px;
  padding: ${({ padding }) => calculatePadding(padding)};
  position: relative;
  border: ${({ border }) => (border === 'light' ? 'var(--light-gray)' : 'var(--medium-gray)')} solid
    1px;
`;

const Card = ({ children, full = false, padding = 'large', border = 'light' }) => {
  return (
    <StyledCard padding={padding} full={full} border={border}>
      {children}
    </StyledCard>
  );
};

export default Card;