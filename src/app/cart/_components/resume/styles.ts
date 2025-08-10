import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(prop) => prop.theme.colors.withe};
  position: sticky;
  top: 0;
  left: 0;
  padding: 20px;
  height: 200px;

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

export const Content = styled.main`
  margin-top: 20px;
`
export const List = styled.ul``

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
  }
`
