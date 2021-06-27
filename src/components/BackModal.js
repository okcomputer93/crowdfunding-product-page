import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import BackSelection from './BackSelection';

const StyledModalContent = styled.div`
  margin-bottom: 2rem;
  width: 72rem;

  .backmodal__description {
    margin-top: 1rem;
  }
`;

const StyledRewardList = styled.div`
  margin-top: 2rem;

  & > :not(:first-child) {
    margin-top: 2rem;
  }
`;

const BackModal = ({ rewards, product, isOpen, closeModal, onSubmited, selected, setSelected }) => {
  const cleanSelectionWhenSubmit = (value) => {
    setSelected(null);
    onSubmited(value);
  };

  const cleanSelectionWhenClose = () => {
    setSelected(null);
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
        setSelected={setSelected}
        selected={selected}
        onSubmited={cleanSelectionWhenSubmit}
      />
    ));

  return (
    <Modal isOpen={isOpen} onOpenModal={cleanSelectionWhenClose}>
      <StyledModalContent>
        <h2 className="title-primary">Back this project</h2>
        <h3 className="backmodal__description text-primary--normal">{`Want to support us in bringing ${product} out in the world?`}</h3>
        <StyledRewardList>{backSelectionList}</StyledRewardList>
      </StyledModalContent>
    </Modal>
  );
};

export default BackModal;
