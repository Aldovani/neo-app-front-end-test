import { ShimmerBase } from '@/styles/animations'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: ${(prop) => prop.theme.colors.withe};
  border-radius: 12px;
  & .footer {
    margin-top: 24px;
  }
`
export const Image = styled(ShimmerBase)`
  width: 235px;
  height: 248px;
  margin: 0 auto;
`
export const Title = styled(ShimmerBase)`
  width: 100%;
  height: 10px;
  margin-top: 4px;
`
export const Price = styled(ShimmerBase)`
  width: 40%;
  height: 32px;
  margin-top: 12px;
`
