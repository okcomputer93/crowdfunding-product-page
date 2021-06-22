import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import Button from './Button';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header__title {
    color: ${({ disabled }) => (disabled ? 'var(--dark-gray)' : 'var(--black)')} !important;
  }

  .header__pledge {
    font-size: 1.5rem;
    font-weight: 500;
    color: ${({ disabled }) => (disabled ? 'var(--light-cyan)' : 'var(--moderate-cyan)')};
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

  .footer__left {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .footer__left-number {
    color: ${({ disabled }) => (disabled ? 'var(--dark-gray)' : 'var(--black)')} !important;
  }

  .footer__left-desc {
    margin-left: 1rem;
    color: ${({ disabled }) => (disabled ? 'var(--moderate-gray)' : 'var(--dark-gray)')} !important;
  }
`;

const Reward = ({ title, pledge, content, left, onOpenModal }) => {
  const stock = left > 0;
  const border = stock ? 'dark' : 'light';

  return (
    <Card full={true} padding={'medium'} border={border}>
      <StyledHeader disabled={!stock}>
        <h3 className="header__title title-secondary">{title}</h3>
        <h4 className="header__pledge">{`Pledge $${pledge} or more`}</h4>
      </StyledHeader>
      <StyledContent className="text-primary--light" disabled={!stock}>
        {content}
      </StyledContent>
      <StyledFooter disabled={!stock}>
        <div className="footer__left">
          <h5 className="footer__left-number title-primary">{left}</h5>
          <span className="footer__left-desc text-tertiary--light">left</span>
        </div>
        <Button size={'medium'} disabled={!stock} onClick={onOpenModal}>
          {stock ? 'Select Reward' : 'Out of Stock'}
        </Button>
      </StyledFooter>
    </Card>
  );
};

export default Reward;
