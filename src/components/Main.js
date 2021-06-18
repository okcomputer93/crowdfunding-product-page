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

const Main = ({ content }) => {
  const { product, description, bookmarked, goal, actual, backers, daysLeft, about, rewards } =
    content;
  const descriptionContent = { product, description, bookmarked };
  const backContent = { goal, actual, backers, daysLeft };
  const aboutContent = { about, rewards };

  return (
    <StyledSection>
      <TranslatedSection>
        <Description content={descriptionContent} />
        <BackInformation content={backContent} />
        <About content={aboutContent} />
      </TranslatedSection>
    </StyledSection>
  );
};

export default Main;
