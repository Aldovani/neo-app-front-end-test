import styled from 'styled-components'

export const Background = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-block: 64px;
  background-image: url('./catalog-section-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
`
export const Container = styled.main`
  display: grid;
  margin: 0 auto;
  width: fit-content;
  grid-template-columns: 1f;
  padding: 40px 24px;
  gap: 32px;

  @media (min-width: 900px) {
    padding: 40px 104px;

    grid-template-columns: repeat(2, 489px);
  }
`
export const ContainerImage = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${(prop) => prop.theme.colors.withe};
  min-height: 384px;
  height: 100%;

  img {
    padding: 24px;
    height: 100%;
  }

  @media (min-width: 900px) {
    img {
      padding: 32px;
    }
  }
`
export const Content = styled.section`
  padding: 24px;
  background-color: ${(prop) => prop.theme.colors.withe};

  .container-action {
    display: flex;
    margin-top: 32px;
    gap: 32px;
    align-items: flex-start;
    flex-direction: column;
  }

  @media (min-width: 900px) {
    padding: 32px;

    .container-action {
      flex-direction: row;
      margin-top: 64px;
    }
  }
`
export const Title = styled.h2`
  font-family: ${(prop) => prop.theme.fontFamily.inter};
  color: ${(prop) => prop.theme.colors.gray[700]};
  font-weight: 700;
  font-size: 1.5rem;

  @media (min-width: 900px) {
    font-size: 2rem;
  }
`
export const Description = styled.p`
  font-family: ${(prop) => prop.theme.fontFamily.inter};
  color: ${(prop) => prop.theme.colors.gray[500]};
  font-weight: 500;
  font-size: 0.875rem;
  margin-top: 24px;

  @media (min-width: 900px) {
    font-size: 1rem;
  }
`
export const Price = styled.h3`
  font-family: ${(prop) => prop.theme.fontFamily.inter};
  color: ${(prop) => prop.theme.colors.gray[700]};
  font-weight: 800;
  font-size: 2rem;
  margin-top: 48px;

  @media (min-width: 900px) {
    font-size: 2.5rem;
  }
`
