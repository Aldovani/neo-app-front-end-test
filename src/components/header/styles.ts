import styled from 'styled-components'

export const Container = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 20;
`

export const Wrapper = styled.div`
  max-width: calc(1217px + 24px);
  margin: 0 auto;
  height: 3.25rem;
  display: flex;
  padding: 0 24px;
  align-items: center;
`

export const Logo = styled.h1`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.gray['700']};
  font-family: ${(props) => props.theme.fontFamily.bangers};

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`

export const ContainerButtons = styled.h1`
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  z-index: 30;
  align-items: center;
`

export const button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  width: 5.5rem;
  height: 3.25rem;
  color: ${(prop) => prop.theme.colors.gray[700]};

  cursor: pointer;

  @media (min-width: 550px) {
    width: 12.5rem;
  }
`
export const HomeLink = styled(button)`
  background-color: ${(prop) => prop.theme.colors.secondary};
  clip-path: polygon(25% 0, 100% 0, 75% 100%, 0 100%);
  position: relative;
  right: -22px;

  @media (min-width: 550px) {
    right: -56px;
  }
`
export const CatButton = styled(button)`
  background-color: ${(prop) => prop.theme.colors.primary};
  padding-left: 8px;
  clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
  &:hover {
    background-color: red;
  }
`
