import React from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import BackSelection from './BackSelection';

const StyledModalContent = styled.div`
  margin-bottom: 2rem;

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

const BackModal = ({ rewards, product, isOpen, onOpenModal }) => {
  const backSelectionList = rewards
    .sort((firstReward, secondReward) => secondReward.left - firstReward.left)
    .map((reward, index) => (
      <BackSelection
        key={index}
        title={reward.title}
        pledge={reward.pledge}
        left={reward.left}
        option={reward.backOption}
      />
    ));

  const backNoReward = (
    <BackSelection
      title={'Pledge with no reward'}
      option={
        'Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.'
      }
    />
  );

  return (
    <Modal isOpen={isOpen} onOpenModal={onOpenModal}>
      <StyledModalContent>
        <h2 className="title-primary">Back this project</h2>
        <h3 className="backmodal__description text-primary--normal">{`Want to support us in bringing ${product} out in the world?`}</h3>
      </StyledModalContent>
      {backNoReward}
      <StyledRewardList>{backSelectionList}</StyledRewardList>
    </Modal>
  );
};

export default BackModal;
