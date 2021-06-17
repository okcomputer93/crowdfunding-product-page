import React from 'react';
import styled from 'styled-components';
import Description from './Description';
import BackInformation from './BackInformation';

const StyledSection = styled.section`
  background-color: var(--light-gray);
  padding-bottom: 10rem;
`;

const Main = () => {
  return (
    <StyledSection>
      <Description />
      <BackInformation />
    </StyledSection>
  );
};

export default Main;
