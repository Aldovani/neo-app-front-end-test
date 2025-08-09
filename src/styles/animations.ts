import styled, { keyframes } from 'styled-components'

export const shimmerAnimation = keyframes`
      0% {
        background-position: -1000px 0;
      }
      100% {
        background-position: 1000px 0;
      }
    `

export const ShimmerBase = styled.div`
  background: linear-gradient(to right, #f0f0f0 8%, #e0e0e0 18%, #f0f0f0 33%);
  background-size: 2000px 100%;
  animation: ${shimmerAnimation} 1.5s linear infinite;
`
