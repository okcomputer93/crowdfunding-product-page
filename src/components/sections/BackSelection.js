import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../Card';
import RadioButton from '../RadioButton';
import Button from '../Button';
import { MIN_PLEDGE_ALLOWED } from '../../globals';
import { bpSmall } from '../../styles/breakpoints';

const StyledCard = styled.div`
  .back-selection__card {
    padding: var(--padding-card-small);

    @media only screen and (max-width: ${bpSmall}) {
      padding: 4rem 3rem;
    }
  }
`;

const StyledContent = styled.div`
  display: grid;
  grid-template-columns: min-content max-content 1fr max-content;
  grid-template-rows: repeat(3, min-content);
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;

  @media only screen and (max-width: ${bpSmall}) {
    grid-template-columns: min-content 1fr;
    grid-template-rows: repeat(3, min-content);
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
  }

  .back-selection__check {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;

    @media only screen and (max-width: ${bpSmall}) {
      align-self: center;
    }
  }

  .back-selection__main {
    grid-column: 2 / span 2;
    grid-row: 1 / span 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media only screen and (max-width: ${bpSmall}) {
      grid-column: 2 / span 1;
      grid-row: 1 / span 1;
      align-self: center;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
  }

  & .back-selection__title {
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    color: ${({ disabled }) => (disabled ? 'var(--dark-gray) !important' : 'var(--black)')};

    @media only screen and (max-width: ${bpSmall}) {
      font-size: 2.2rem;
    }
  }

  .back-selection__title:hover {
    color: var(--moderate-cyan);
  }

  & .back-selection__pledge {
    margin-left: 2rem;
    color: ${({ disabled }) => (disabled ? 'var(--light-cyan)' : 'var(--moderate-cyan)')};

    @media only screen and (max-width: ${bpSmall}) {
      margin-left: 0;
      font-size: 2.3rem;
      font-weight: 500;
      margin-top: 2rem;
    }
  }

  .back-selection__left {
    grid-column: 4 / span 1;
    grid-row: 1 / span 1;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: ${bpSmall}) {
      grid-column: 1 / -1;
      grid-row: 3 / span 1;
      justify-content: flex-start;
    }
  }

  & .back-selection__left-number {
    color: ${({ disabled }) => (disabled ? 'var(--dark-gray)' : 'var(--black)')};

    @media only screen and (max-width: ${bpSmall}) {
      font-size: 3rem;
    }
  }

  & .back-selection__left-desc {
    margin-left: 1rem;
    color: ${({ disabled }) => (disabled ? 'var(--moderate-gray)' : 'var(--dark-gray)')};

    @media only screen and (max-width: ${bpSmall}) {
      font-size: 2rem;
    }
  }

  & .back-selection__option {
    grid-column: 2 / -1;
    grid-row: 2 / span 1;
    color: ${({ disabled }) => (disabled ? 'var(--moderate-gray)' : 'var(--dark-gray)')};

    @media only screen and (max-width: ${bpSmall}) {
      grid-column: 1 / -1;
      font-size: 2.3rem;
    }
  }
`;

const SyledPledgeSection = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
  padding-top: 3rem;
  position: relative;

  @media only screen and (max-width: ${bpSmall}) {
    flex-direction: column;
  }

  &::after {
    position: absolute;
    content: '';
    left: calc(var(--padding-card-small) * -1);
    top: 0;
    width: calc(100% + 2 * var(--padding-card-small));
    height: 1px;
    background-color: var(--moderate-gray);

    @media only screen and (max-width: ${bpSmall}) {
      left: -5rem;
      width: calc(100% + 10rem);
    }
  }

  & .pledge-section__text {
    color: ${({ wrongPledge }) => (wrongPledge ? 'red' : 'var(--dark-gray)')};

    @media only screen and (max-width: ${bpSmall}) {
      font-size: 2.2rem;
    }
  }

  .pledge-section__form {
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: ${bpSmall}) {
      width: 100%;
      margin-top: 2rem;
      justify-content: space-evenly;
    }
  }

  .pledge-section__field {
    width: 10rem;
    margin-right: 2rem;
    position: relative;

    @media only screen and (max-width: ${bpSmall}) {
      width: 50%;
    }
  }

  .pledge-section__field::after {
    content: '$';
    position: absolute;
    font-weight: 700;
    font-size: 1.5rem;
    color: var(--moderate-gray);
    left: 20%;
    top: 27%;
  }

  .pledge-section__input {
    width: 100%;
    padding: 1.5rem 3rem;
    border: var(--moderate-gray) 1px solid;
    border-radius: 20rem;
    font-weight: 700;
    font-size: 1.5rem;
    color: var(--black);
    display: block;
    top: 0;
    text-align: center;

    @media only screen and (max-width: ${bpSmall}) {
      padding: 2rem 3rem;
      font-size: 2rem;
    }
  }

  .pledge-section__button {
    @media only screen and (max-width: ${bpSmall}) {
      width: 50%;
      padding: 2rem 3rem;
      font-size: 2rem;
    }
  }
`;

const BackSelection = ({
  title,
  minPledge = MIN_PLEDGE_ALLOWED,
  left,
  option,
  id,
  setSelectedReward,
  selectedReward,
  onSubmited,
}) => {
  const [pledge, setPledge] = useState(minPledge);
  const isSelected = selectedReward === title;
  const stock = minPledge > MIN_PLEDGE_ALLOWED ? left > 0 : true;
  const wrongInputPledge = pledge < minPledge || pledge <= 0;
  let border = stock ? 'dark' : 'light';
  border = isSelected ? 'cyan' : 'dark';

  const leftElement = () => {
    if (left >= 0) {
      return (
        <div className="back-selection__left">
          <h5 className="back-selection__left-number title-tertiary">{left}</h5>
          <p className="back-selection__left-desc text-tertiary--light">left</p>
        </div>
      );
    }
  };

  const pledgeElement = () => {
    if (minPledge > MIN_PLEDGE_ALLOWED) {
      return (
        <div className="back-selection__pledge title-tertiary">{`Pledge $${minPledge} or more`}</div>
      );
    }
  };

  const onPledgeUpdated = e => {
    setPledge(e.target.value);
  };

  const onBackSelected = () => {
    if (!stock) return;
    setSelectedReward(title);
  };

  const onPledgeSubmited = e => {
    e.preventDefault();
    setPledge(minPledge);
    onSubmited(+pledge);
  };

  const pledgeForm = () => {
    if (isSelected) {
      return (
        <SyledPledgeSection wrongPledge={wrongInputPledge}>
          <h5 className="text-tertiary--light pledge-section__text">
            {wrongInputPledge ? 'Please provide a valid pledge' : 'Enter your pledge'}
          </h5>
          <form className="pledge-section__form" onSubmit={onPledgeSubmited}>
            <div className="pledge-section__field">
              <label htmlFor="pledge" className="sr-only">
                Pledge
              </label>
              <input
                onChange={onPledgeUpdated}
                className="pledge-section__input"
                type="number"
                name="pledge"
                id={`pledge-${id}`}
                autoFocus
                required
                aria-hidden
                min={minPledge}
                value={pledge}
              />
            </div>
            <Button
              size="small"
              className="pledge-section__button"
              type="submit"
              disabled={wrongInputPledge}>
              Continue
            </Button>
          </form>
        </SyledPledgeSection>
      );
    }
  };

  return (
    <StyledCard>
      <Card full={true} padding={'medium'} border={border} className="back-selection__card">
        <StyledContent disabled={!stock}>
          <div className="back-selection__check">
            <RadioButton id={id} disabled={!stock} checked={isSelected} onChange={onBackSelected} />
          </div>
          <div className="back-selection__main">
            <label className="back-selection__title title-tertiary" onClick={onBackSelected}>
              {title}
            </label>
            {pledgeElement()}
          </div>
          {leftElement()}
          <div className="back-selection__option text-secondary--normal">{option}</div>
        </StyledContent>
        {pledgeForm()}
      </Card>
    </StyledCard>
  );
};

export default BackSelection;
