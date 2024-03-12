import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 2px 5px 3px rgba(0, 0, 0, 0.3);
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
