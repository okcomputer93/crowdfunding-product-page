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

  .back__number {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--black);
  }

  .back__description {
    font-size: 1.45rem;
    font-weight: 400;
    color: var(--dark-gray);
    line-height: 1;
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

  const navigatorLanguage =
    navigator.languages && navigator.languages.length
      ? navigator.languages[0]
      : navigator.userLanguage || navigator.language || navigator.browserLanguage || 'en';

  const format = number => {
    return new Intl.NumberFormat(navigatorLanguage, { maximumSignificantDigits: 3 }).format(number);
  };

  return (
    <Card border={'dark'}>
      <StyledContent>
        <StyledSection>
          <h2 className="back__number">{`$${format(actual)}`}</h2>
          <h5 className="back__description">{`of $${format(goal)} backed`}</h5>
        </StyledSection>
        <StyledSection>
          <h2 className="back__number">{format(backers)}</h2>
          <h5 className="back__description">total backers</h5>
        </StyledSection>
        <StyledSection>
          <h2 className="back__number">{format(daysLeft)}</h2>
          <h5 className="back__description">days left</h5>
        </StyledSection>
      </StyledContent>
      <StyledBar percentage={percentage} />
    </Card>
  );
};

export default BackInformation;
