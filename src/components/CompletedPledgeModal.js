import React from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import Button from './Button';
import iconCheck from '../assets/images/icon-check.svg';

const StyledModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 41.5rem;

  .completed-pledge__icon-check {
  }

  .completed-pledge__title {
    text-align: center;
    margin-top: 2rem;
  }

  .completed-pledge__desc {
    text-align: center;
    margin: 1rem 0 3rem;
  }
`;

const CompletedPledgeModal = ({ isOpen, closeModal, product }) => {
  return (
    <Modal isOpen={isOpen} onOpenModal={closeModal}>
      <StyledModalContent>
        <img src={iconCheck} alt="icon check" className="completed-pledge__icon-check" />
        <h4 className="completed-pledge__title title-secondary">Thanks for your support!</h4>
        <p className="completed-pledge__desc text-secondary--normal">{`Your pledge bring us one step closer to sharing ${product} worldwide. You will get an email once our campaign is completed.`}</p>
        <Button size="medium">Got it!</Button>
      </StyledModalContent>
    </Modal>
  );
};

export default CompletedPledgeModal;
