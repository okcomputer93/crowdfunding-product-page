import React, { useState } from 'react';
import styled from 'styled-components';
import Presentation from './Presentation';
import BackInformation from './BackInformation';
import About from './About';
import BackModal from './BackModal';

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
  const [openModal, setOpenModal] = useState(false);

  const onOpenedModal = () => {
    setOpenModal(true);
  };

  const submitPledge = () => {
	  setOpenModal(false);
  }

  return (
    <>
      <StyledSection>
        <TranslatedSection>
          <Presentation content={presentationContent} onOpenModal={onOpenedModal} />
          <BackInformation content={backContent} />
          <About content={aboutContent} onOpenModal={onOpenedModal} />
        </TranslatedSection>
      </StyledSection>
      <BackModal
        isOpen={openModal}
		onOpenModal={setOpenModal}
		onSubmited={submitPledge}
        rewards={rewards}
        product={product}></BackModal>
    </>
  );
};

export default Main;
