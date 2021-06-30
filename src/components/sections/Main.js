import React, { useState } from 'react';
import styled from 'styled-components';
import Presentation from './Presentation';
import BackInformation from './BackInformation';
import About from './About';
import BackModal from '../modal/BackModal';
import CompletedPledgeModal from '../modal/CompletedPledgeModal';
import { bpLargest, bpLarge, bpMedium, bpSmall } from '../../styles/breakpoints';

const StyledSection = styled.section`
  background-color: var(--light-gray);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .content {
    width: var(--width-base);

    @media only screen and (max-width: ${bpSmall}) {
      width: 86%;
    }
  }
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
  const [backModal, setBackModal] = useState(false);
  const [completedModal, setCompletedModal] = useState(false);
  const [selectedReward, setSelectedReward] = useState(null);
  const [backed, setBacked] = useState(actual);
  const [totalBackers, setTotalBackers] = useState(backers);

  const presentationContent = { product, description, bookmarked };
  const backContent = { goal, backed, totalBackers, daysLeft };
  const aboutContent = { about, rewards };

  const openBackModal = () => {
    setBackModal(true);
  };

  const closeBackModal = () => {
    setBackModal(false);
  };

  const submitPledge = value => {
    closeBackModal();
    openCompletedModal();
    setBacked(backed + value);
    setTotalBackers(totalBackers + 1);
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
        <div className="content">
          <TranslatedSection>
            <Presentation content={presentationContent} onOpenModal={openBackModal} />
            <BackInformation content={backContent} />
            <About
              content={aboutContent}
              onOpenModal={openBackModal}
              onSelection={setSelectedReward}
            />
          </TranslatedSection>
        </div>
      </StyledSection>
      <BackModal
        isOpen={backModal}
        closeModal={closeBackModal}
        onSubmited={submitPledge}
        rewards={rewards}
        product={product}
        selectedReward={selectedReward}
        setSelectedReward={setSelectedReward}
      />
      <CompletedPledgeModal
        isOpen={completedModal}
        closeModal={closeCompletedModal}
        product={product}
      />
    </>
  );
};

export default Main;
