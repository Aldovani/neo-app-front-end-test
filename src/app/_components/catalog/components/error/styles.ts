import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Title = styled.h3`
  font-size: 1.5rem;
  color: ${(prop) => prop.theme.colors.gray[700]};
  font-family: ${(prop) => prop.theme.fontFamily.inter};
  font-weight: 700;
`
export const Description = styled.p`
  font-size: 16px;
  color: ${(prop) => prop.theme.colors.gray[500]};
  font-family: ${(prop) => prop.theme.fontFamily.inter};
  font-weight: 500;
  margin-top: 8px;
`
