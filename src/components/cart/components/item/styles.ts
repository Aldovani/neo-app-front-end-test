import styled from 'styled-components'

export const Container = styled.li`
  display: flex;
  gap: 12px;
  border-bottom: 1px solid ${(prop) => prop.theme.colors.gray[500] + '33'};
  padding-bottom: 24px;
`
export const Wrapper = styled.div`
  div {
    display: flex;
    margin-top: 16px;
    gap: 4px;
    align-items: center;
  }
`
export const Title = styled.h4`
  font-family: ${(prop) => prop.theme.fontFamily.inter};
  color: ${(prop) => prop.theme.colors.gray[500]};
  font-weight: 500;
`
export const Price = styled.h5`
  font-family: ${(prop) => prop.theme.fontFamily.inter};
  color: ${(prop) => prop.theme.colors.gray[700]};
  font-weight: 700;
  font-size: 1.25rem;
`
export const Quantity = styled.span`
  font-family: ${(prop) => prop.theme.fontFamily.inter};
  color: ${(prop) => prop.theme.colors.gray[500]};
  font-weight: 500;
  font-size: 14px;
`
