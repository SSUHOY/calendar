import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
  flex-direction: column;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 5px 3px rgba(0, 0, 0, 0.3);
  height: 480px;
  width: 380px;
`;

export const UserDataUI = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 4px;
  border-bottom: 1px solid #ccc;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  p {
    margin: 0;
  }
`;
export const Header = styled.header`
  text-align: center;
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const CalendarTitle = styled.h4`
  text-transform: uppercase;
  margin: 0;
  text-align: center;
`;

export const TableContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const TableCell = styled.td`
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 10px;
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
