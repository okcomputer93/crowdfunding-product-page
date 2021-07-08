import React from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import Button from '../Button';
import { bpSmall } from '../../styles/breakpoints';
import iconCheck from '../../assets/images/icon-check.svg';

const StyledModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .completed-pledge__icon-check {
  }

  .completed-pledge__title {
    text-align: center;
    margin-top: 2rem;

    @media only screen and (max-width: ${bpSmall}) {
      margin-top: 3rem;
      font-size: 3rem;
    }
  }

  .completed-pledge__desc {
    text-align: center;
    margin: 1rem 0 3rem;

    @media only screen and (max-width: ${bpSmall}) {
      font-size: 2.3rem !important;
      margin: 4rem 0;
      font-weight: 400;
    }
  }

  .completed-pledge__button {
    @media only screen and (max-width: ${bpSmall}) {
      font-size: 2rem;
      padding: 2rem 4rem;
    }
  }
`;

const CompletedPledgeModal = ({ isOpen, closeModal, product }) => {
  return (
    <Modal isOpen={isOpen} onCloseModal={closeModal} className="modal-small" showClose={false}>
      <StyledModalContent>
        <img src={iconCheck} alt="icon check" className="completed-pledge__icon-check" />
        <h4 className="completed-pledge__title title-secondary">Thanks for your support!</h4>
        <p className="completed-pledge__desc text-secondary--normal">{`Your pledge bring us one step closer to sharing ${product} worldwide. You will get an email once our campaign is completed.`}</p>
        <Button size="medium" onClick={closeModal} className="completed-pledge__button">
          Got it!
        </Button>
      </StyledModalContent>
    </Modal>
  );
};

export default CompletedPledgeModal;
