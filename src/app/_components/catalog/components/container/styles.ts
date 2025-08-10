import styled from 'styled-components'

export const Background = styled.section`
  width: 100%;
  min-height: 100vh;
  padding-bottom: 64px;
  background-image: url('./catalog-section-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
`
export const Container = styled.div`
  width: 100%;
  max-width: calc(1217px - 24px);
  padding-inline: 24px;
  margin: 0 auto;
  padding-top: calc(94px + 64px);

  @media (min-width: 1200px) {
    padding-inline: 0;
  }
`
