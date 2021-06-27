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
  width: 52rem;

  .completed-pledge__icon-check {
  }

  .completed-pledge__title {
    text-align: center;
    margin-top: 2rem;
  }

  .completed-pledge__desc {
    text-align: center;
    margin-bottom: 3rem;
  }
`;
// TODO: Make Card component more flexible through its width.
const CompletedPledgeModal = ({ isOpen, closeModal, product }) => {
  return (
    <Modal isOpen={isOpen} onOpenModal={closeModal}>
      <StyledModalContent>
        <img src={iconCheck} alt="icon check" className="completed-pledge__icon-check" />
        <h4 className="completed-pledge__title title-primary">Thanks for your support!</h4>
        <p className="completed-pledge__desc text-primary--normal">{`Your pledge bring us one step closer to sharing ${product} worldwide. You will get an email once our campaign is completed.`}</p>
        <Button size="medium">Got it!</Button>
      </StyledModalContent>
    </Modal>
  );
};

export default CompletedPledgeModal;
