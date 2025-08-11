import NextLink from 'next/link'
import styled from 'styled-components'

export const Container = styled.article.attrs<{ $rarity: string }>(
  (prop) => prop,
)`
  background-color: ${(prop) =>
    prop.$rarity === 'rare'
      ? prop.theme.colors.primary
      : prop.theme.colors.withe};
  padding: 16px 0 20px 0;
  position: relative;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 1px 0px #605e821a 0px 1px 1px 0px #605e8217 0px 2px 1px
    0px #605e820d 0px 4px 2px 0px #605e8203 0px 6px 2px 0px #605e8200;

  &:hover button {
    pointer-events: all;
    opacity: 1;
  }
`
export const Link = styled(NextLink)`
  display: block;
  text-decoration: none;
`
export const ContainerImage = styled.div`
  padding: 16px 24px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Wrapper = styled.div`
  border-top: 1px solid ${(prop) => prop.theme.colors.gray[500] + '33'};
  padding: 16px 16px 0;
`

export const Title = styled.h3`
  font-family: ${(prop) => prop.theme.fontFamily.inter};
  color: ${(prop) => prop.theme.colors.gray[500]};
  font-size: 1rem;
  font-weight: 500;
`

export const Price = styled.h4`
  font-family: ${(prop) => prop.theme.fontFamily.inter};
  color: ${(prop) => prop.theme.colors.gray[700]};
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 16px;
  display: block;
`

export const ButtonAddToCart = styled.button`
  background-color: ${(prop) => prop.theme.colors.primary};
  opacity: 0;
  pointer-events: none;
  border-radius: 100%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  border: 0;
  position: absolute;
  top: 12px;
  right: 16px;
  justify-content: center;
  color: ${(prop) => prop.theme.colors.gray[700]};
  transition: opacity 0.2s;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }
`
