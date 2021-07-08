import React from 'react';
import styled from 'styled-components';
import { bpSmall } from '../styles/breakpoints';

const StyledRadioButton = styled.div`
  .radio-button__styled-checkbox {
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 100%;
    border: 1px var(--moderate-gray) solid;
    cursor: pointer;
    position: relative;

    @media only screen and (max-width: ${bpSmall}) {
      width: 3rem;
      height: 3rem;
    }
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

const RadioButton = ({ id, disabled, onChange, checked }) => {
  return (
    <StyledRadioButton>
      <input
        onChange={onChange}
        className="radio-button__checkbox"
        type="radio"
        value={id}
        checked={checked}
        disabled={disabled}
        aria-hidden="true"
        hidden
      />

      <div className="radio-button__styled-checkbox" tabIndex={0} onClick={onChange}></div>
    </StyledRadioButton>
  );
};

export default RadioButton;
