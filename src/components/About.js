import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import Reward from './Reward';
import rewards from '../rewards';

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

const About = () => {
  const rewardsList = rewards.map(({ title, pledge, description, left }, index) => (
    <Reward title={title} pledge={pledge} content={description} left={left} key={index} />
  ));

  return (
    <Card border={'dark'}>
      <StyledContent>
        <h2 className="about__title">About this project</h2>
        <p className="about__description">
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your
          screen to a more comfortable viewing height. Placing your monitor at eye level has the
          potential to improve your posture and make you more comfortable while at work, helping you
          stay focused on the task at hand.
        </p>
        <p className="about__description">
          Featuring artisan craftsmanship, the simplicity of design creates extra desk space below
          your computer to allow notepads, pens, and USB sticks to be stored under the stand.
        </p>
      </StyledContent>
      <StyledRewardList>{rewardsList}</StyledRewardList>
    </Card>
  );
};

export default About;
