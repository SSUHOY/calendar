import React from "react";
import { Button, Container } from "../../components/Calendar/Calendar.styles";
import {
  ButtonSubmit,
  FormField,
  UserFormWrapper,
  UserPageTitle,
} from "./userPage.styles";

const UserPage = () => {
  return (
    <>
      <Container>
        <UserPageTitle>Страница пользователя</UserPageTitle>
        <UserFormWrapper>
          <form action="">
            <FormField>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Имя"
                required
              />
            </FormField>
            <FormField>
              <input
                type="email"
                name="surname"
                id="surname"
                placeholder="Фамилия"
                required
              />
            </FormField>
            <FormField>
              <ButtonSubmit type="submit">Сохранить</ButtonSubmit>
            </FormField>
          </form>
        </UserFormWrapper>
      </Container>
    </>
  );
};

export default UserPage;
