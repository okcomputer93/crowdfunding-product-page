import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const StyledContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledSection = styled.div`
  flex: 1;

  &:not(:last-child) {
    border-right: var(--medium-gray) solid 2px;
    margin-right: 3rem;
  }
`;

const StyledBar = styled.div`
  width: 100%;
  height: 10px;
  margin-top: 4rem;
  background-color: var(--medium-gray);
  border-radius: 100px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${({ percentage }) => percentage + '%'};
    background-color: var(--moderate-cyan);
    border-radius: 100px;
  }
`;

const BackInformation = ({ content }) => {
  const { actual, goal, backers, daysLeft } = content;

  const percentage = ((actual * 100) / goal).toFixed(0);

  const format = number => {
    return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 5 }).format(number);
  };

  return (
    <Card border={'dark'}>
      <StyledContent>
        <StyledSection>
          <h2 className="title-primary">{`$${format(actual)}`}</h2>
          <h5 className="text-tertiary--light">{`of $${format(goal)} backed`}</h5>
        </StyledSection>
        <StyledSection>
          <h2 className="title-primary">{format(backers)}</h2>
          <h5 className="text-tertiary--light">total backers</h5>
        </StyledSection>
        <StyledSection>
          <h2 className="title-primary">{format(daysLeft)}</h2>
          <h5 className="text-tertiary--light">days left</h5>
        </StyledSection>
      </StyledContent>
      <StyledBar percentage={percentage} />
    </Card>
  );
};

export default BackInformation;
