import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import Button from './Button';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header__title {
    font-size: 2rem;
    font-weight: 700;
    color: ${({ disabled }) => (disabled ? 'var(--dark-gray)' : 'var(--black)')};
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
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2;
  margin: 2rem 0;
  color: ${({ disabled }) => (disabled ? 'var(--moderate-gray)' : 'var(--dark-gray)')};
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
    font-size: 2.5rem;
    font-weight: 700;
    color: ${({ disabled }) => (disabled ? 'var(--dark-gray)' : 'var(--black)')};
  }

  .footer__left-desc {
    font-size: 1.5rem;
    font-weight: 400;
    margin-left: 1rem;
    color: ${({ disabled }) => (disabled ? 'var(--moderate-gray)' : 'var(--dark-gray)')};
  }
`;

const Reward = ({ title, pledge, content, left }) => {
  const stock = left > 0;
  const border = stock ? 'dark' : 'light';

  return (
    <Card full={true} padding={'medium'} border={border}>
      <StyledHeader disabled={!stock}>
        <h3 className="header__title">{title}</h3>
        <h4 className="header__pledge">{`Pledge $${pledge} or more`}</h4>
      </StyledHeader>
      <StyledContent disabled={!stock}>{content}</StyledContent>
      <StyledFooter disabled={!stock}>
        <div className="footer__left">
          <h5 className="footer__left-number">{left}</h5>
          <span className="footer__left-desc">left</span>
        </div>
        <Button size={'medium'} disabled={!stock}>
          {stock ? 'Select Reward' : 'Out of Stock'}
        </Button>
      </StyledFooter>
    </Card>
  );
};

export default Reward;
