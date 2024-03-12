import styled from "styled-components";

export const CalendarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
  flex-direction: column;
`;

export const TableRow = styled.tr``;
export const TableCell = styled.td`
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background-color: #ebebeb;
  }
`;
