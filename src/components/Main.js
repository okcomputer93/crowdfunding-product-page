import React from 'react';
import styled from 'styled-components';
import Description from './Description';
import BackInformation from './BackInformation';
import About from './About';

const StyledSection = styled.section`
  background-color: var(--light-gray);
  padding-bottom: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > :not(:first-child) {
    margin-top: 2rem;
  }
`;

const Main = () => {
  return (
    <StyledSection>
      <Description />
      <BackInformation />
      <About />
    </StyledSection>
  );
};

export default Main;
