import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Card from '../Card';
import Bookmarker from '../Bookmarker';
import logoMastercraft from '../../assets/images/logo-mastercraft.svg';

const StyledContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .presentation__logo {
    position: absolute;
    top: 0;
    display: block;
    transform: translateY(-50%);
  }

  .presentation__description {
    margin-top: 1rem;
  }

  .presentation__cta {
    width: 100%;
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Presentation = ({ content, onOpenModal }) => {
  const { product, description, bookmarked } = content;

  return (
    <Card border={'dark'}>
      <StyledContent>
        <img className="presentation__logo" src={logoMastercraft} alt="Check icon" />
        <h1 className="title-primary">{product}</h1>
        <p className="presentation__description text-primary--normal">{description}</p>
        <div className="presentation__cta">
          <Button size={'large'} onClick={onOpenModal}>
            Back this project
          </Button>
          <Bookmarker isBookmarked={bookmarked}></Bookmarker>
        </div>
      </StyledContent>
    </Card>
  );
};

export default Presentation;
