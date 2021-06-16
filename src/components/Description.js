import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Card from './Card';
import bookmarkIcon from './../assets/images/icon-bookmark.svg';
import logoMastercraft from './../assets/images/logo-mastercraft.svg';

const StyledContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .card__logo {
    position: absolute;
    top: 0;
    display: block;
    transform: translateY(-50%);
  }

  .card__title {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--black);
  }

  .card__description {
    margin-top: 1rem;
    font-size: 1.45rem;
    font-weight: 500;
    color: var(--dark-gray);
  }

  .card__cta {
    width: 100%;
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const StyledBookmark = styled.button`
  width: 17rem;
  padding-right: 3rem;
  background-color: var(--medium-gray);
  color: var(--dark-gray);
  font-size: 1.4rem;
  font-weight: 700;
  border-radius: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .bookmark__icon {
    transition: all 0.5s ease-in;
  }

  &:hover > .bookmark__icon {
    filter: brightness(180%);
  }
`;

const Description = () => {
  return (
    <Card>
      <StyledContent>
        <img className="card__logo" src={logoMastercraft} alt="Check icon" />
        <h1 className="card__title">Mastercraft Bamboo Monitor Riser</h1>
        <p className="card__description">
          A beatiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className="card__cta">
          <Button>Back this project</Button>
          <StyledBookmark>
            <img className="bookmark__icon" src={bookmarkIcon} alt="Bookmark icon" />
            <span>Bookmark</span>
          </StyledBookmark>
        </div>
      </StyledContent>
    </Card>
  );
};

export default Description;
