import styled from "styled-components";

export const Button = styled.button`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  color: ${({ $color }) => $color};
  background-color: ${({ $bgc }) => $bgc};
  border: none;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  margin: 0 auto;
  padding: 5px;
  display: inline-flex;
  justify-content: center;
  transition: all 0.2s ease;
  &:hover {
    background-color: ${(props) => (props.disabled ? "#e0e0e0" : "#2999E4")};
    color: ${(props) => (props.disabled ? "gray" : "#ffffff")};
  }
  &:active {
    color: wheat;
    background-color: #0076b7;
  }
`;
