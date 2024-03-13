import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../../components/Calendar/Calendar.styles";
import { CustomButton } from "../../components/Button/CustomButtons";

const NotFound = () => {
  return (
    <>
      <Container>
        <div>Oooops. Page not found</div>
        <Link to="/">
          <CustomButton>На главную</CustomButton>
        </Link>
      </Container>
    </>
  );
};

export default NotFound;
