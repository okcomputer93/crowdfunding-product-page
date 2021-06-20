import React from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import BackSelection from './BackSelection';

const StyledModalContent = styled.div`
  margin-bottom: 2rem;

  .backmodal__title {
    font-size: 2.6rem;
    font-weight: 700;
    letter-spacing: -1px;
    color: var(--black);
  }

  .backmodal__description {
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2;
    color: var(--dark-gray);
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

  const noRewardBack = (
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
        <h2 className="backmodal__title">Back this project</h2>
        <h3 className="backmodal__description">{`Want to support us in bringing ${product} out in the world?`}</h3>
      </StyledModalContent>
      {noRewardBack}
      <StyledRewardList>{backSelectionList}</StyledRewardList>
    </Modal>
  );
};

export default BackModal;
