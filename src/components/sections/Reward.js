import React from 'react';
import styled from 'styled-components';
import Card from '../Card';
import Button from '../Button';
import { bpSmall } from '../../styles/breakpoints';

const StyledCard = styled.div`
  .reward__card {
    padding: var(--padding-card-small);
  }
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: ${bpSmall}) {
    flex-direction: column;
    align-items: flex-start;
  }

  & .header__title {
    color: ${({ disabled }) => (disabled ? 'var(--dark-gray)' : 'var(--black)')};

    @media only screen and (max-width: ${bpSmall}) {
      font-size: 2.2rem;
      margin-bottom: 1rem;
    }
  }

  .header__pledge {
    font-size: 1.5rem;
    font-weight: 500;
    color: ${({ disabled }) => (disabled ? 'var(--light-cyan)' : 'var(--moderate-cyan)')};

    @media only screen and (max-width: ${bpSmall}) {
      font-size: 2rem;
    }
  }
`;

const StyledContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  color: ${({ disabled }) => (disabled ? 'var(--moderate-gray)' : 'var(--dark-gray)')} !important;
`;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: ${bpSmall}) {
    flex-direction: column;
    align-items: flex-start;
  }

  .footer__left {
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: ${bpSmall}) {
      margin-bottom: 2rem;
    }
  }

  & .footer__left-number {
    color: ${({ disabled }) => (disabled ? 'var(--dark-gray)' : 'var(--black)')};

    @media only screen and (max-width: ${bpSmall}) {
      font-size: 4rem !important;
    }
  }

  & .footer__left-desc {
    margin-left: 1rem;
    color: ${({ disabled }) => (disabled ? 'var(--moderate-gray)' : 'var(--dark-gray)')};
  }

  .footer__button {
    @media only screen and (max-width: ${bpSmall}) {
      font-size: 2rem;
      width: 65%;
      padding: 2.4rem;
    }
  }
`;

const Reward = ({ title, minPledge, content, left, onOpenModal, onSelection, id }) => {
  const stock = left > 0;
  const border = stock ? 'dark' : 'light';

  const openModal = () => {
    onOpenModal();
    onSelection(title);
  };

  return (
    <StyledCard>
      <Card full={true} padding={'medium'} border={border} className="reward__card">
        <StyledHeader disabled={!stock}>
          <h3 className="header__title title-secondary">{title}</h3>
          <h4 className="header__pledge">{`Pledge $${minPledge} or more`}</h4>
        </StyledHeader>
        <StyledContent className="text-primary--light" disabled={!stock}>
          {content}
        </StyledContent>
        <StyledFooter disabled={!stock}>
          <div className="footer__left">
            <h5 className="footer__left-number title-primary">{left}</h5>
            <span className="footer__left-desc text-tertiary--light">left</span>
          </div>
          <Button size={'medium'} className="footer__button" disabled={!stock} onClick={openModal}>
            {stock ? 'Select Reward' : 'Out of Stock'}
          </Button>
        </StyledFooter>
      </Card>
    </StyledCard>
  );
};

export default Reward;
