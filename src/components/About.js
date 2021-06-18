import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import Reward from './Reward';

const StyledContent = styled.div`
  .about__title {
    font-size: 2rem;
    font-weight: 700;
    color: var(--black);
  }

  .about__description {
    margin-top: 3rem;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 2;
    color: var(--dark-gray);
  }
`;

const StyledRewardList = styled.div`
  margin-top: 4rem;

  & > :not(:first-child) {
    margin-top: 2rem;
  }
`;

const About = ({ content }) => {
  const { about, rewards } = content;
  
  const rewardsList = rewards.map(({ title, pledge, description, left }, index) => (
    <Reward title={title} pledge={pledge} content={description} left={left} key={index} />
  ));

  const descriptionsList = about.split('\n').map((description, index) => {
    return (
      <p className="about__description" key={index}>
        {description}
      </p>
    );
  });

  return (
    <Card border={'dark'}>
      <StyledContent>
        <h2 className="about__title">About this project</h2>
        <>{descriptionsList}</>
      </StyledContent>
      <StyledRewardList>{rewardsList}</StyledRewardList>
    </Card>
  );
};

export default About;
