import React from 'react';
import styled from 'styled-components';
import Card from '../Card';
import { bpSmall } from '../../styles/breakpoints';

const StyledCard = styled.div`
  .back-information__card {
    padding: var(--padding-card-base);
  }
`;

const StyledContent = styled.div`
  width: 100%;

  .back-information__data {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: ${bpSmall}) {
      flex-direction: column;
    }
  }
`;

const StyledSection = styled.div`
  flex: 1;

  &:not(:last-child) {
    border-right: var(--medium-gray) solid 2px;
    border-bottom: none;
    margin-right: 3rem;

    @media only screen and (max-width: ${bpSmall}) {
      margin-right: 0;
      margin-bottom: 3rem;
      border-bottom: var(--medium-gray) solid 2px;
      border-right: none;
      padding-bottom: 4rem;
    }
  }

  .back-information__number {
    @media only screen and (max-width: ${bpSmall}) {
      font-size: 4rem !important;
      text-align: center;
    }
  }

  .back-information__subtitle {
    @media only screen and (max-width: ${bpSmall}) {
      font-size: 2rem !important;
    }
  }
`;

const StyledBar = styled.div`
  height: 10px;
  margin-top: 4rem;
  background-color: var(--medium-gray);
  border-radius: 100px;
  position: relative;
  flex: none;

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
  const { backed, goal, totalBackers, daysLeft } = content;

  const percentage = ((backed * 100) / goal).toFixed(0);

  const format = number => {
    return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 5 }).format(number);
  };

  return (
    <StyledCard>
      <Card border={'dark'} className="back-information__card">
        <StyledContent>
          <div className="back-information__data">
            <StyledSection>
              <h2 className="back-information__number title-primary">{`$${format(backed)}`}</h2>
              <h5 className="back-information__subtitle text-tertiary--light">{`of $${format(
                goal,
              )} backed`}</h5>
            </StyledSection>
            <StyledSection>
              <h2 className="back-information__number title-primary">{format(totalBackers)}</h2>
              <h5 className="back-information__subtitle text-tertiary--light">total backers</h5>
            </StyledSection>
            <StyledSection>
              <h2 className="back-information__number title-primary">{format(daysLeft)}</h2>
              <h5 className="back-information__subtitle text-tertiary--light">days left</h5>
            </StyledSection>
          </div>
          <StyledBar
            percentage={percentage}
            aria-valuenow={percentage}
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </StyledContent>
      </Card>
    </StyledCard>
  );
};

export default BackInformation;
