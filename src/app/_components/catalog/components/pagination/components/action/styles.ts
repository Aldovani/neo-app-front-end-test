import Link from 'next/link'
import styled from 'styled-components'

export const Container = styled(Link)`
  min-width: 48px;
  height: 48px;
  padding-inline: 8px;
  font-family: ${(prop) => prop.theme.fontFamily.inter};
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(prop) => prop.theme.colors.gray[700]};
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${(prop) => prop.theme.colors.secondary};
  }

  @media (max-width: 800px) {
    min-width: 32px;
    font-size: 16px;
  }
`
