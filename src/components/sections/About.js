import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../Card';
import Reward from './Reward';

const StyledCard = styled.div`
  .about__card {
    padding: var(--padding-card-base);
  }
`;

const StyledContent = styled.div`
  width: 100%;
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

const About = ({ content, onOpenModal, onSelection }) => {
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
        onSelection={onSelection}
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
    <StyledCard>
      <Card border={'dark'} className="about__card">
        <StyledContent>
          <h2 className="title-secondary">About this project</h2>
          <>{descriptionsList}</>
          <StyledRewardList>{rewardsList}</StyledRewardList>
        </StyledContent>
      </Card>
    </StyledCard>
  );
};

export default About;
