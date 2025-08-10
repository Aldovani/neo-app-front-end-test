import styled from 'styled-components'

export const Container = styled.li`
  background: ${(prop) => prop.theme.colors.withe};
  padding: 0.75rem 1.5rem;
  display: flex;
  justify-content: space-between;
`

export const Title = styled.h4`
  font-family: ${(prop) => prop.theme.fontFamily.inter};
  color: ${(prop) => prop.theme.colors.gray[500]};
  font-size: 1rem;
  line-height: 150%;
  font-weight: 500;
  max-width: 330px;
  display: block;
`
export const RemoveButton = styled.button`
  color: #e62429;
  font-weight: 500;
  cursor: pointer;
  border: 0;
  text-align: start;
  background: transparent;
  font-family: ${(prop) => prop.theme.fontFamily.inter};
`
export const Price = styled.h3`
  font-weight: 700;
  font-family: ${(prop) => prop.theme.fontFamily.inter};
  color: ${(prop) => prop.theme.colors.gray[700]};
  font-size: 1.25rem;
  margin-top: 4px;
`

export const WrapperPrice = styled.div`
  align-content: center;
  text-align: end;
  font-family: ${(prop) => prop.theme.fontFamily.inter};
  font-weight: 500;
  font-size: 1rem;

  .discount {
    color: #2a873e;
  }

  .normal-price {
    color: ${(prop) => prop.theme.colors.gray[500]};
  }
`
export const WrapperContent = styled.div`
  display: flex;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 32px;
  }
`
