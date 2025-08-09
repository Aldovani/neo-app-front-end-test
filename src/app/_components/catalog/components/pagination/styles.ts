import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
`

export const Divider = styled.span`
  min-width: 48px;
  height: 48px;
  padding-inline: 8px;
  font-family: ${(prop) => prop.theme.fontFamily.inter};
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  color: ${(prop) => prop.theme.colors.gray[700]};

  @media (max-width: 800px) {
    min-width: 24px;
    font-size: 16px;
  }
`
