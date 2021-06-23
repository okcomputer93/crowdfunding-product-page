import React, { useState } from 'react';
import styled from 'styled-components';

const StyledRadioButton = styled.div`
  .radio-button__styled-checkbox {
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 100%;
    border: 1px var(--moderate-gray) solid;
    cursor: pointer;
    position: relative;
  }

  .radio-button__checkbox:disabled + .radio-button__styled-checkbox {
    cursor: not-allowed;
  }

  .radio-button__styled-checkbox::after {
    position: absolute;
    content: '';
    width: 1rem;
    height: 1rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100%;
    transition: background-color 0.5s ease-in-out;
  }

  .radio-button__checkbox:checked + .radio-button__styled-checkbox::after {
    background-color: var(--moderate-cyan);
  }
`;

const RadioButton = ({ id, disabled, onChange, selected }) => {
  return (
    <StyledRadioButton>
      <input
        onChange={onChange}
        className="radio-button__checkbox"
        type="radio"
        value={id}
        checked={selected === id}
        disabled={disabled}
        tabIndex={0}
        hidden
      />
      <div className="radio-button__styled-checkbox" onClick={onChange}></div>
    </StyledRadioButton>
  );
};

export default RadioButton;
