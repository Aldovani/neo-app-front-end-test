import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(prop) => prop.theme.colors.withe};
  position: sticky;
  top: 0;
  left: 0;
  padding: 20px;
  height: fit-content;

  footer {
    margin-top: 24px;

    button {
      width: 100%;
    }
  }
`

export const Titile = styled.h3`
  color: ${(prop) => prop.theme.colors.gray[500]};
  font-family: ${(prop) => prop.theme.fontFamily.inter};
  font-weight: 400;
`

export const CupomContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: end;
  margin-top: 16px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  label {
    color: ${(prop) => prop.theme.colors.gray[500]};
    font-weight: 600;
    font-size: 14px;
  }

  button {
    height: fit-content;
  }
`
export const CupomInput = styled.input`
  border: 1px solid ${(prop) => prop.theme.colors.gray[500] + '33'};
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 600;
  color: ${(prop) => prop.theme.colors.gray[700]};

  &::placeholder {
    color: ${(prop) => prop.theme.colors.gray[500]};
  }
`

export const Content = styled.main`
  margin-top: 20px;
`
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: ${(prop) => prop.theme.colors.gray[500]};
    font-family: ${(prop) => prop.theme.fontFamily.inter};
    font-weight: 400;
    font-size: 14px;
  }

  h4 {
    color: ${(prop) => prop.theme.colors.gray[700]};
    font-size: 1.25rem;

    &.small {
      color: ${(prop) => prop.theme.colors.gray[500]};
      font-weight: 500;
      font-size: 1rem;
    }
  }
`
