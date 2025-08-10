import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  span {
    text-align: center;
    min-width: 40px;
    font-size: 20px;
  }
`

const button = styled.button`
  width: 40px;
  height: 40px;
  border: 0;
  cursor: pointer;
  font-size: 24px;
`

export const DecrementButton = styled(button)``
export const IncrementButton = styled(button)``
