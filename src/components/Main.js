import React, { useState } from 'react';
import styled from 'styled-components';
import Presentation from './Presentation';
import BackInformation from './BackInformation';
import About from './About';
import BackModal from './BackModal';
import CompletedPledgeModal from './CompletedPledgeModal';

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
  const presentationContent = { product, description, bookmarked };
  const backContent = { goal, actual, backers, daysLeft };
  const aboutContent = { about, rewards };
  const [backModal, setBackModal] = useState(false);
  const [completedModal, setCompletedModal] = useState(false);

  const openBackModal = () => {
    setBackModal(true);
  };

  const closeBackModal = () => {
    setBackModal(false);
  };

  const submitPledge = () => {
    closeBackModal();
    openCompletedModal();
  };

  const openCompletedModal = () => {
    setCompletedModal(true);
  };

  const closeCompletedModal = () => {
    setCompletedModal(false);
  };

  return (
    <>
      <StyledSection>
        <TranslatedSection>
          <Presentation content={presentationContent} onOpenModal={openBackModal} />
          <BackInformation content={backContent} />
          <About content={aboutContent} onOpenModal={openBackModal} />
        </TranslatedSection>
      </StyledSection>
      <BackModal
        isOpen={backModal}
        closeModal={closeBackModal}
        onSubmited={submitPledge}
        rewards={rewards}
        product={product}></BackModal>

      <CompletedPledgeModal
        isOpen={completedModal}
        closeModal={closeCompletedModal}
        product={product}></CompletedPledgeModal>
    </>
  );
};

export default Main;
