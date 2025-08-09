import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 600px) {
    grid-template-columns: 0.2fr 0.8fr;
  }
  @media (min-width: 900px) {
    grid-template-columns: 0.5fr 0.5fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 0.6fr 0.4fr;
  }
  @media (min-width: 1900px) {
    grid-template-columns: 0.7fr 0.3fr;
  }
`

export const Overlay = styled.div`
  background-color: #000;
  opacity: 0.3;
  display: none;

  @media (min-width: 600px) {
    display: block;
  }
`
export const Body = styled.div`
  background-color: ${(prop) => prop.theme.colors.withe};

  display: grid;

  grid-template-rows: 52px 0.85fr 0.15fr;
`
export const Header = styled.header`
  display: flex;
  align-items: center;
  padding-left: 24px;
`
export const Main = styled.ul`
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-inline: 24px;
`
export const Footer = styled.footer`
  padding: 16px 24px 0;
  border-top: 1px solid ${(prop) => prop.theme.colors.gray[500] + '33'};

  button {
    width: 100%;
    margin-top: 24px;
  }
  .price-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
      color: ${(prop) => prop.theme.colors.gray[500]};
      font-family: ${(prop) => prop.theme.fontFamily.inter};
      font-weight: 700;
    }
    h3 {
      font-family: ${(prop) => prop.theme.fontFamily.inter};
      font-weight: 700;
      color: ${(prop) => prop.theme.colors.gray[700]};
      font-size: 1.5rem;
    }
  }
`
