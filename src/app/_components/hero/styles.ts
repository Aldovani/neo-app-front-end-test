import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: calc(100vh - 52px);
  overflow: hidden;
`

export const BgHero = styled.img`
  position: absolute;
  right: 0;
  width: 100%;
  height: auto;
`

export const Wrapper = styled.div`
  max-width: calc(1217px + 24px);
  margin: 0 auto;
  width: 100%;
  z-index: 10;
  padding-inline: 24px;
  .content {
    max-width: 281px;
    padding-top: 148px;
  }
  @media (min-width: 550px) {
    .content {
      padding-top: 20%;
      max-width: 369px;
    }
  }
  @media (min-width: 850px) {
    .content {
      padding-top: 10%;
      max-width: 560px;
    }
  }
`

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.gray[700]};
  font-family: ${(props) => props.theme.fontFamily.bangers};
  line-height: 110%;
  font-size: 2rem;

  @media (min-width: 450px) {
    font-size: 3rem;
  }
  @media (min-width: 550px) {
    font-size: 4rem;
  }
  @media (min-width: 850px) {
    font-size: 6rem;
  }
`
export const Description = styled.p`
  color: ${(props) => props.theme.colors.gray[700]};
  font-family: ${(props) => props.theme.fontFamily.inter};
  font-size: 0.875rem;
  margin-top: 12px;

  font-weight: 500;
`

export const HerosPicture = styled.div`
  position: absolute;
  top: 0;
  background-position: top right;
  background-size: cover;
  width: 100%;
  z-index: -10;
  height: 100%;
  background-repeat: no-repeat;
  background-image: url('./hero-image-mobile.png');

  @media (min-width: 550px) {
    background-image: url('./hero-image-tablet.png');
  }
  @media (min-width: 850px) {
    background-image: url('./hero-image-desktop.png');
  }
`
export const Divider = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: -1;
  height: 100%;
  background-position: bottom right;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('./divider-image-mobile.png');

  @media (min-width: 550px) {
    background-image: url('./divider-image-tablet.png');
  }
  @media (min-width: 850px) {
    background-image: url('./divider-image-desktop.png');
  }
`
