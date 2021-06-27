import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import RadioButton from './RadioButton';
import Button from './Button';
import { MIN_PLEDGE_ALLOWED } from '../globals';

const StyledContent = styled.div`
  display: grid;
  grid-template-columns: min-content max-content 1fr max-content;
  grid-template-rows: repeat(2, min-content);
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;

  .back-selection__check {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
  }

  .back-selection__title {
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    grid-column: 2 / span 1;
    grid-row: 1 / span 1;
    color: ${({ disabled }) => (disabled ? 'var(--dark-gray) !important' : 'var(--black)')};
  }

  .back-selection__title:hover {
    color: var(--moderate-cyan);
  }

  .back-selection__pledge {
    grid-column: 3 / span 1;
    grid-row: 1 / span 1;
    color: ${({ disabled }) =>
      disabled ? 'var(--light-cyan)' : 'var(--moderate-cyan)'} !important;
  }

  .back-selection__left {
    grid-column: 4 / span 1;
    grid-row: 1 / span 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .back-selection__left-number {
    color: ${({ disabled }) => (disabled ? 'var(--dark-gray)' : 'var(--black)')} !important;
  }

  .back-selection__left-desc {
    margin-left: 1rem;
    color: ${({ disabled }) => (disabled ? 'var(--moderate-gray)' : 'var(--dark-gray)')} !important;
  }

  .back-selection__option {
    grid-column: 2 / -1;
    grid-row: 2 / span 1;
    color: ${({ disabled }) => (disabled ? 'var(--moderate-gray)' : 'var(--dark-gray)')} !important;
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

  &::after {
    position: absolute;
    content: '';
    top: 0;
    left: -31px;
    width: 63.7rem;
    height: 1px;
    background-color: var(--moderate-gray);
  }

  .pledge-section__text {
    color: ${({ wrongPledge }) => (wrongPledge ? 'red' : 'var(--dark-gray)')} !important;
  }

  .pledge-section__form {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .pledge-section__field {
    width: 10rem;
    margin-right: 2rem;
    position: relative;
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
    border-radius: 2.5rem;
    font-weight: 700;
    font-size: 1.5rem;
    color: var(--black);
    display: block;
    top: 0;
    text-align: center;
  }
`;

const BackSelection = ({
  title,
  minPledge = MIN_PLEDGE_ALLOWED,
  left,
  option,
  id,
  setSelected,
  selected,
  onSubmited,
}) => {
  const [pledge, setPledge] = useState(minPledge);
  const isSelected = selected === title;
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
    setSelected(title);
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
            <Button size="small" type="submit" disabled={wrongInputPledge}>
              Continue
            </Button>
          </form>
        </SyledPledgeSection>
      );
    }
  };

  return (
    <Card full={true} padding={'medium'} border={border}>
      <StyledContent disabled={!stock}>
        <div className="back-selection__check">
          <RadioButton id={id} disabled={!stock} selected={selected} onChange={onBackSelected} />
        </div>
        <label className="back-selection__title title-tertiary" onClick={onBackSelected}>
          {title}
        </label>
        {pledgeElement()}
        {leftElement()}
        <div className="back-selection__option text-secondary--normal">{option}</div>
      </StyledContent>
      {pledgeForm()}
    </Card>
  );
};

export default BackSelection;
