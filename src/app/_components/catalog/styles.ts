import styled from 'styled-components'

export const Background = styled.section`
  width: 100%;
  background-image: url('./catalog-section-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
`
export const Container = styled.div`
  width: 100%;
  max-width: calc(1217px - 24px);
  padding-inline: 24px;
  margin: 0 auto;
  padding-top: 94px;

  @media (min-width: 1200px) {
    padding-inline: 0;
  }
`

export const ContainerCards = styled.div`
  --grid-items: 1;
  display: grid;
  grid-template-columns: repeat(var(--grid-items), 1fr);
  gap: 32px 28px;

  @media (min-width: 600px) {
    --grid-items: 2;
  }
  @media (min-width: 950px) {
    --grid-items: 3;
  }
  @media (min-width: 1200px) {
    --grid-items: 4;
    gap: 32px 20px;
  }
`
