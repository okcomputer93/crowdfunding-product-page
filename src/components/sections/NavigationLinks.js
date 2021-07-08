import React, { useState } from 'react';
import { bpSmall } from '../../styles/breakpoints';
import styled from 'styled-components';
import Modal from '../modal/Modal';

const StyledNagivationLinks = styled.nav`
  flex-basis: 24rem;
  @media only screen and (max-width: ${bpSmall}) {
    display: none;
  }

  .navigation__links {
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--white);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media only screen and (max-width: ${bpSmall}) {
    justify-content: flex-end;
  }
`;

const NavigationMenu = styled.div`
  margin: 1rem;
  display: none;
  height: 3px;
  cursor: pointer;
  background-color: ${({ isOpen }) => (isOpen ? 'transparent' : 'var(--white)')};
  position: relative;
  width: 15px;
  transition: all 0.5s ease-in-out;
  z-index: 100;

  @media only screen and (max-width: ${bpSmall}) {
    display: block;
  }

  &::after,
  &::before {
    content: '';
    height: 3px;
    width: 100%;
    background-color: var(--white);
    position: absolute;
    transition: all 0.5s ease-in-out;
  }

  &::after {
    top: ${({ isOpen }) => (isOpen ? '0' : '6px')};
    transform: ${({ isOpen }) => (isOpen ? 'rotate(135deg)' : '')};
  }

  &::before {
    top: ${({ isOpen }) => (isOpen ? '0' : '-6px')};
    transform: ${({ isOpen }) => (isOpen ? 'rotate(-135deg)' : '')};
  }
`;

const StyledModalContent = styled.section`
  font-size: 3rem;
  font-weight: 500;

  & * {
    padding: 3.2rem 0;
  }

  & a:not(:last-child) {
    position: relative;
  }

  & a:not(:last-child)::after {
    position: absolute;
    content: '';
    left: calc(var(--padding-card-small) * -1);
    bottom: 0;
    width: calc(100% + 2 * var(--padding-card-small));
    height: 1px;
    background-color: var(--moderate-gray);
  }
`;

const NavigationLinks = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const openMenu = () => {
    setMenuOpen(true);
  };

  const toggleMenu = () => {
    menuOpen ? closeMenu() : openMenu();
  };

  return (
    <>
      <StyledNagivationLinks>
        <div className="navigation__links">{children}</div>
      </StyledNagivationLinks>
      <NavigationMenu onClick={toggleMenu} isOpen={menuOpen} />
      <Modal
        isOpen={menuOpen}
        onCloseModal={closeMenu}
        className="navigation-menu"
        showClose={false}>
        <StyledModalContent>{children}</StyledModalContent>
      </Modal>
    </>
  );
};

export default NavigationLinks;
