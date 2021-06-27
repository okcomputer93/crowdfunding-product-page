import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import Reward from './Reward';

const StyledContent = styled.div`
  width: var(--width-base);
  .about__description {
    margin-top: 3rem;
  }
`;

const StyledRewardList = styled.div`
  margin-top: 4rem;

  & > :not(:first-child) {
    margin-top: 2rem;
  }
`;

const About = ({ content, onOpenModal }) => {
  const { about, rewards } = content;

  const rewardsList = rewards
    .sort((firstReward, secondReward) => secondReward.left - firstReward.left)
    .map(({ title, minPledge, description, left }, index) => (
      <Reward
        title={title}
        minPledge={minPledge}
        content={description}
        left={left}
        onOpenModal={onOpenModal}
        key={index}
      />
    ));

  const descriptionsList = about.split('\n').map((description, index) => {
    return (
      <p className="about__description text-primary--normal" key={index}>
        {description}
      </p>
    );
  });

  return (
    <Card border={'dark'}>
      <StyledContent>
        <h2 className="title-secondary">About this project</h2>
        <>{descriptionsList}</>
        <StyledRewardList>{rewardsList}</StyledRewardList>
      </StyledContent>
    </Card>
  );
};

export default About;
