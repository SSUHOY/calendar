import React, { useState } from "react";
import { Button, Container } from "../../components/Calendar/Calendar.styles";
import {
  ButtonBackToMain,
  ButtonSubmit,
  Error,
  FormContainer,
  FormField,
  UserFormWrapper,
  UserPageContainer,
  UserPageTitle,
} from "./userPage.styles";
import { Link } from "react-router-dom";

const UserPage = ({ setUserData, userData }) => {
  const [error, setError] = useState("");
  const [isSave, setIsSaved] = useState(false);

  const handleUserDataChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserData({ ...userData, [name]: value });
    setError("");
    setIsSaved(false);
  };

  const submitHandler = (event) => {
    if (userData.firstName !== "" && userData.lastName !== "") {
      localStorage.setItem("userData", JSON.stringify(userData));
      setIsSaved(true);
    } else {
      setError("Ошибка сохранения данных");
      setIsSaved(false);
    }
    event.preventDefault();
  };

  return (
    <>
      <UserPageContainer>
        <UserPageTitle>Страница пользователя</UserPageTitle>
        <UserFormWrapper>
          <FormContainer action="">
            <FormField>
              <input
                type="text"
                name="firstName"
                id="name"
                placeholder="Имя"
                value={userData.firstName}
                onChange={handleUserDataChange}
                required
              />
            </FormField>
            <FormField>
              <input
                type="text"
                name="lastName"
                id="surname"
                placeholder="Фамилия"
                value={userData.lastName}
                onChange={handleUserDataChange}
                required
              />
            </FormField>
            <FormField>
              {error ? <Error>{error}</Error> : ""}
              <ButtonSubmit
                type="submit"
                onClick={submitHandler}
                disabled={isSave}>
                {isSave ? "Готово!" : "Сохранить"}
              </ButtonSubmit>
              {isSave ? (
                <Link to="/">
                  <ButtonBackToMain>К календарю</ButtonBackToMain>
                </Link>
              ) : (
                <Link to="/">
                  <ButtonBackToMain>Назад</ButtonBackToMain>
                </Link>
              )}
            </FormField>
          </FormContainer>
        </UserFormWrapper>
      </UserPageContainer>
    </>
  );
};

export default UserPage;
