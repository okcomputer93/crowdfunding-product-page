import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Card from './Card';

const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  animation: ${({ shown }) => (shown ? '' : 'fade 0.5s ease-in-out 1s forwards')};
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes fade {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      max-height: 0;
    }
  }
`;

const StyledModal = styled.div`
  transition: all 1s ease-in-out;
  transform: ${({ shown }) => (shown ? 'translateX(0)' : 'translateX(-50%)')};
  opacity: ${({ shown }) => (shown ? '1' : '0')};

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

const Modal = ({ isShown, children }) => {
  const [show, setShow] = useState(isShown);

  const closeModal = e => {
    setShow(false);
  };

  return ReactDOM.createPortal(
    <StyledBackground shown={show} onClick={closeModal}>
      <StyledModal shown={show} onClick={e => e.stopPropagation()}>
        <Card className="modal__card">
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
            <>{children}</>
          </svg>
        </Card>
      </StyledModal>
    </StyledBackground>,
    document.querySelector('#modal'),
  );
};

export default Modal;
