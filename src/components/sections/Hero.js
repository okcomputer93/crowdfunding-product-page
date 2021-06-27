import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import heroDesktop from '../../assets/images/image-hero-desktop.jpg';
import heroMobile from '../../assets/images/image-hero-mobile.jpg';

const StyledHero = styled.section`
  width: 100%;
  height: 40rem;
  background-image: url(${heroDesktop});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

const Hero = () => {
  return (
    <StyledHero>
      <Navigation />
    </StyledHero>
  );
};

export default Hero;
