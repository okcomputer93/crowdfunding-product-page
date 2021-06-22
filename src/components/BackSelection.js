import React from 'react';
import styled from 'styled-components';
import Card from './Card';

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
    color: ${({ disabled }) => (disabled ? 'var(--dark-gray)' : 'var(--black)')} !important;
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
    font-size: 1.5rem;
    font-weight: 400;
    margin-left: 1rem;
    color: ${({ disabled }) => (disabled ? 'var(--moderate-gray)' : 'var(--dark-gray)')};
  }

  .back-selection__option {
    grid-column: 2 / -1;
    grid-row: 2 / span 1;
    color: ${({ disabled }) => (disabled ? 'var(--moderate-gray)' : 'var(--dark-gray)')} !important;
  }
`;

const StyledCheckbox = styled.div`
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 100%;
  border: 1px var(--moderate-gray) solid;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const BackSelection = ({ title, pledge = null, left, option }) => {
  let stock, border;
  if (pledge !== null) {
    stock = left > 0;
    border = stock ? 'dark' : 'light';
  } else {
    stock = true;
    border = 'dark';
  }

  const leftElement =
    left >= 0 ? (
      <div className="back-selection__left">
        <h5 className="back-selection__left-number title-tertiary">{left}</h5>
        <p className="back-selection__left-desc">left</p>
      </div>
    ) : null;

  const pledgeElement = pledge ? (
    <div className="back-selection__pledge title-tertiary">{`Pledge $${pledge} or more`}</div>
  ) : null;

  return (
    <Card full={true} padding={'medium'} border={border}>
      <StyledContent disabled={!stock}>
        <div className="back-selection__check">
          <StyledCheckbox disabled={!stock} />
        </div>
        <div className="back-selection__title title-tertiary">{title}</div>
        {pledgeElement}
        {leftElement}
        <div className="back-selection__option text-secondary--normal">{option}</div>
      </StyledContent>
    </Card>
  );
};

export default BackSelection;
