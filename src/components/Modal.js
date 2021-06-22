import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Card from './Card';

const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  animation: ${({ open }) =>
    open ? 'fade-enter 1s ease-in-out forwards' : 'fade-leaves 0.5s ease-in-out 1s forwards'};
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 100%;
  overflow-y: auto;

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
  position: relative;
  top: 25%;
  transition: all 1s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-50%)')};
  opacity: ${({ open }) => (open ? '1' : '0')};

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

const Modal = ({ isOpen, onOpenModal, children }) => {
  const closeModal = e => {
    onOpenModal(false);
  };

  return ReactDOM.createPortal(
    <StyledBackground open={isOpen} onClick={closeModal}>
      <ModalContainer open={isOpen} onClick={e => e.stopPropagation()}>
        <Card>
          <svg
            className="modal__close"
            onClick={closeModal}
            width="15"
            height="15"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
          <>{children}</>
        </Card>
      </ModalContainer>
    </StyledBackground>,
    document.querySelector('#modal'),
  );
};

export default Modal;
