import React from 'react';
import styled from 'styled-components';
import Description from './Description';

const StyledSection = styled.section`
  background-color: var(--light-gray);
  padding-bottom: 10rem;
`;

const Main = () => {
  return (
    <StyledSection>
      <Description />
    </StyledSection>
  );
};

export default Main;
