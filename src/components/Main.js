import React, { useState } from 'react';
import styled from 'styled-components';
import Description from './Description';
import BackInformation from './BackInformation';
import About from './About';
import Modal from './Modal';

const StyledSection = styled.section`
  background-color: var(--light-gray);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TranslatedSection = styled.div`
  transform: translateY(-10rem);
  position: relative;

  & > :not(:first-child) {
    margin-top: 2rem;
  }
`;

const Main = ({ content }) => {
  const { product, description, bookmarked, goal, actual, backers, daysLeft, about, rewards } =
    content;
  const descriptionContent = { product, description, bookmarked };
  const backContent = { goal, actual, backers, daysLeft };
  const aboutContent = { about, rewards };
  const [openModal, setOpenModal] = useState(false);

  const onOpenedModal = () => {
    setOpenModal(true);
  };

  return (
    <>
      <StyledSection>
        <TranslatedSection>
          <Description content={descriptionContent} onOpenModal={onOpenedModal} />
          <BackInformation content={backContent} />
          <About content={aboutContent} onOpenModal={onOpenedModal} />
        </TranslatedSection>
      </StyledSection>
      <Modal isOpen={openModal} onOpenModal={setOpenModal}>
        <h1>Content here</h1>
      </Modal>
    </>
  );
};

export default Main;
