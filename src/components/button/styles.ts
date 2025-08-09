import styled from 'styled-components'

export const Container = styled.button.attrs<{ $margin?: string }>(
  (prop) => prop,
)`
  background-color: ${(prop) => prop.theme.colors.primary};
  padding: 0.75rem 2rem;
  margin: ${(prop) => prop.$margin};

  font-family: ${(prop) => prop.theme.fontFamily.inter};
  font-weight: 800;
  border: 0;
  color: ${(prop) => prop.theme.colors.gray[700]};
`
