import styled from "styled-components";

export const UserPageContainer = styled.div`
  display: flex;
  margin-bottom: 8px;
  height: 248px;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 2px 5px 3px rgba(0, 0, 0, 0.3);
`;

export const UserPageTitle = styled.h4`
  text-align: center;
  font-size: 14px;
`;

export const UserFormWrapper = styled.div`
  display: flex;
  padding: 18px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
`;

export const ButtonSubmit = styled.button`
  width: 140px;
  height: 30px;
  text-align: center;
  margin-top: 24px;
  background-color: ${(props) => (props.disabled ? "#e0e0e0" : "#007ACC")};
  color: ${(props) => (props.disabled ? "gray" : "#ffffff")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  &:hover {
    background-color: ${(props) => (props.disabled ? "#e0e0e0" : "#62B5D8")};
    color: ${(props) => (props.disabled ? "gray" : "#ffffff")};
  }
`;

export const ButtonBackToMain = styled.button`
  width: 140px;
  height: 30px;
  text-align: center;
  margin-top: 4px;
  background-color: #007acc;
  color: #ffffff;
  &:hover {
    background-color: #5aa3c2;
    color: #ffffff;
  }
`;

export const Error = styled.p`
  font-size: 10px;
  color: red;
  margin: 0;
  position: absolute;
`;
