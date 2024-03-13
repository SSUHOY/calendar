import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 2px 5px 3px rgba(0, 0, 0, 0.3);
  height: 380px;
  width: 380px;
`;

export const UserDataUI = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  p {
    margin: 0;
  }
`;

export const BtnContainer = styled.div``;

export const UserChangeButton = styled.button`
  height: 28px;
  width: 200px;
  background-color: #007acc;
  color: #ffffff;
  &:hover {
    background-color: #62b5d2;
  }
`;

export const UserSignOut = styled.button`
  height: 28px;
  width: 100px;
  background-color: #007acc;
  color: #ffffff;
  &:hover {
    background-color: #62b5d2;
  }
`;

export const TableCell = styled.td`
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background-color: #ebebeb;
  }
`;

export const Button = styled.button`
  transition: all 0.2s ease;
  &:hover {
    background-color: #e3eefc;
  }
`;
