import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Card from '../Card';
import Bookmarker from '../Bookmarker';
import logoMastercraft from '../../assets/images/logo-mastercraft.svg';
import { bpSmall } from '../../styles/breakpoints';

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

  .presentation__title {
    @media only screen and (max-width: ${bpSmall}) {
      margin-top: 3rem;
      max-width: 30rem;
      line-height: 1.3;
      text-align: center !important;
    }
  }

  .presentation__description {
    margin-top: 1rem;

    @media only screen and (max-width: ${bpSmall}) {
      margin-top: 2rem;
      text-align: center !important;
    }
  }

  .presentation__cta {
    width: 100%;
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .presentation__button {
    @media only screen and (max-width: ${bpSmall}) {
      width: 78%;
      font-size: 2.3rem;
      padding: 2.4rem 8rem;
      text-align: center;
    }
  }
`;

const Presentation = ({ content, onOpenModal }) => {
  const { product, description, bookmarked } = content;

  return (
    <Card border={'dark'}>
      <StyledContent>
        <img className="presentation__logo" src={logoMastercraft} alt="Check icon" />
        <h1 className="presentation__title title-primary">{product}</h1>
        <p className="presentation__description text-primary--normal">{description}</p>
        <div className="presentation__cta">
          <Button className="presentation__button" size={'large'} onClick={onOpenModal}>
            Back this project
          </Button>
          <Bookmarker isBookmarked={bookmarked}></Bookmarker>
        </div>
      </StyledContent>
    </Card>
  );
};

export default Presentation;
