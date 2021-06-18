import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Card from './Card';
import Bookmarker from './Bookmarker';
import logoMastercraft from './../assets/images/logo-mastercraft.svg';

const StyledContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .description__logo {
    position: absolute;
    top: 0;
    display: block;
    transform: translateY(-50%);
  }

  .description__title {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--black);
  }

  .description__description {
    margin-top: 1rem;
    font-size: 1.45rem;
    font-weight: 500;
    color: var(--dark-gray);
  }

  .description__cta {
    width: 100%;
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Description = ({ content }) => {
  const { product, description, bookmarked } = content;

  return (
    <Card border={'dark'}>
      <StyledContent>
        <img className="description__logo" src={logoMastercraft} alt="Check icon" />
        <h1 className="description__title">{product}</h1>
        <p className="description__description">{description}</p>
        <div className="description__cta">
          <Button size={'large'}>Back this project</Button>
          <Bookmarker isBookmarked={bookmarked}></Bookmarker>
        </div>
      </StyledContent>
    </Card>
  );
};

export default Description;
