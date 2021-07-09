import React from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import BackSelection from '../sections/BackSelection';
import { bpSmall } from '../../styles/breakpoints';

const StyledModalContent = styled.div`
  margin-bottom: 2rem;

  .backmodal__description {
    margin-top: 1rem;
  }
`;

const StyledRewardList = styled.main`
  margin-top: 2rem;

  @media only screen and (max-width: ${bpSmall}) {
    margin-top: 4rem;
  }

  & > :not(:first-child) {
    margin-top: 2rem;

    @media only screen and (max-width: ${bpSmall}) {
      margin-top: 3rem;
    }
  }
`;

const BackModal = ({
  rewards,
  product,
  isOpen,
  closeModal,
  onSubmited,
  selectedReward,
  setSelectedReward,
}) => {
  const cleanSelectionAndSubmit = value => {
    setSelectedReward(null);
    onSubmited(value);
  };

  const cleanSelectionAndClose = () => {
    setSelectedReward(null);
    closeModal();
  };

  const backNoReward = {
    title: 'Pledge with no reward',
    backOption:
      'Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.',
  };

  const backSelectionList = rewards
    .sort((firstReward, secondReward) => firstReward.left - secondReward.left)
    .concat([backNoReward])
    .reverse()
    .map((reward, index) => (
      <BackSelection
        key={index}
        id={index}
        title={reward.title}
        minPledge={reward.minPledge}
        left={reward.left}
        option={reward.backOption}
        setSelectedReward={setSelectedReward}
        selectedReward={selectedReward}
        onSubmited={cleanSelectionAndSubmit}
      />
    ));

  return (
    <Modal isOpen={isOpen} onCloseModal={cleanSelectionAndClose} className="modal-base">
      <StyledModalContent>
        <header className="title-primary">Back this project</header>
        <p className="backmodal__description text-primary--normal">{`Want to support us in bringing ${product} out in the world?`}</p>
        <StyledRewardList>{backSelectionList}</StyledRewardList>
      </StyledModalContent>
    </Modal>
  );
};

export default BackModal;
