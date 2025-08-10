import styled from 'styled-components'

export const Container = styled.li`
  background: ${(prop) => prop.theme.colors.withe};
  padding: 0.75rem 1.5rem;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 1px 0px #605e821a 0px 1px 1px 0px #605e8217 0px 2px 1px
    0px #605e820d 0px 4px 2px 0px #605e8203 0px 6px 2px 0px #605e8200;

  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`

export const Title = styled.h4`
  font-family: ${(prop) => prop.theme.fontFamily.inter};
  color: ${(prop) => prop.theme.colors.gray[500]};
  font-size: 14px;
  line-height: 150%;
  font-weight: 500;

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
  text-align: center;
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
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 480px;

  > div {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
      width: fit-content;
    }
  }

  @media (min-width: 600px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;

    > div {
      text-align: start;
      align-items: start;
      margin-left: 32px;
    }
  }
`
