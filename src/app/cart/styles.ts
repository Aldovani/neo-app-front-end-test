import styled from 'styled-components'

export const Background = styled.main`
  width: 100%;
  min-height: 100vh;
  padding-bottom: 64px;
  background-image: url('./catalog-section-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
`

export const Container = styled.div`
  max-width: calc(1217px + 24px);
  margin: 0 auto 0;
  padding-block: 64px;
  padding-inline: 24px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media (min-width: 900px) {
    grid-template-columns: 0.7fr 0.3fr;
  }
`
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Title = styled.h2`
  font-family: ${(prop) => prop.theme.fontFamily.bangers};
  color: ${(prop) => prop.theme.colors.gray[700]};
  font-size: 2rem;
`
