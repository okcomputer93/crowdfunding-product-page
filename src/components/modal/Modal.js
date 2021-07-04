import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Card from '../Card';
import { bpSmall } from '../../styles/breakpoints';

const StyledCard = styled.div`
  .modal__card {
    padding: var(--padding-card-base);
  }
`;

const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: ${({ open }) =>
    open ? 'fade-enter 1s ease-in-out forwards' : 'fade-leaves 0s forwards'};
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 100vh;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #555;
    border-radius: 10px;
  }

  @keyframes fade-enter {
    from {
      background-color: transparent;
    }
    to {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }

  @keyframes fade-leaves {
    to {
      max-height: 0;
      max-width: 0;
      display: none;
    }
  }
`;

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  margin-top: 18rem;
  transition: all 1s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-50%)')};
  opacity: ${({ open }) => (open ? '1' : '0')};

  @media only screen and (max-width: ${bpSmall}) {
    width: 86%;
  }

  .modal__close {
    position: absolute;
    top: 3rem;
    right: 3rem;
    color: rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }

  .modal__close:hover {
    color: var(--black);
  }
`;

const Modal = ({ isOpen, onCloseModal, className, children }) => {
  return ReactDOM.createPortal(
    <StyledBackground open={isOpen} onClick={onCloseModal}>
      <ModalContainer open={isOpen} onClick={e => e.stopPropagation()} className={className}>
        <StyledCard>
          <Card full={false} className="modal__card">
            <svg
              className="modal__close"
              onClick={onCloseModal}
              width="15"
              height="15"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
            {children}
          </Card>
        </StyledCard>
      </ModalContainer>
    </StyledBackground>,
    document.querySelector('#modal'),
  );
};

export default Modal;
