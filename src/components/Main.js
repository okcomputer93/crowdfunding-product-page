import React from 'react';
import styled from 'styled-components';
import Description from './Description';
import BackInformation from './BackInformation';
import About from './About';

const StyledSection = styled.section`
  background-color: var(--light-gray);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TranslatedSection = styled.div`
  transform: translateY(-10rem);
  position: relative;

  & > :not(:first-child) {
    margin-top: 2rem;
  }
`;

const Main = () => {
  return (
    <StyledSection>
      <TranslatedSection>
        <Description />
        <BackInformation />
        <About />
      </TranslatedSection>
    </StyledSection>
  );
};

export default Main;
