import React, { useEffect, useState } from "react";
import "./Calendar.styles.js";
import { MockedCalendarData } from "../mockedData/index.jsx";
import {
  BtnContainer,
  Button,
  Container,
  Header,
  TableCell,
  TableContainer,
  UserChangeButton,
  UserDataUI,
  UserSignOut,
} from "./Calendar.styles.js";
import { Link } from "react-router-dom";
import * as calendar from "./calendar.js";

const MainPage = ({ setUserData }) => {
  const { monthNames, weekDayNames, years } = MockedCalendarData;
  const today = new Date();
  console.log(today);

  const [date, setDate] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState("");
  console.log("🚀 ~ MainPage ~ selectedDate:", selectedDate);

  const [storedUserData, setStoredUserData] = useState({});

  // get monthData on component mount
  const monthData = calendar.getMonthData(selectedYear, selectedMonth);

  const handlePrevMonthButtonClick = () => {
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();

    let newMonth;
    let newYear;

    if (currentMonth === 0) {
      newMonth = 11;
      newYear = currentYear - 1;
    } else {
      newYear = currentYear;
      newMonth = currentMonth - 1;
    }

    const prevDate = new Date(newYear, newMonth);
    setSelectedYear(newYear);
    setSelectedMonth(newMonth);
    setDate(prevDate);
  };

  const handleNextMonthButtonClick = () => {
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();

    let newMonth;
    let newYear;

    if (currentMonth === 11) {
      newMonth = 0;
      newYear = currentYear + 1;
    } else {
      newMonth = currentMonth + 1;
      newYear = currentYear;
    }
    const nextDate = new Date(newYear, newMonth);
    setSelectedYear(newYear);
    setSelectedMonth(newMonth);
    setDate(nextDate);
  };

  const handleDayClick = (date) => {
    setSelectedDate(date);
  };
  const handleSelectMonth = (event) => {
    setSelectedMonth(event.target.value);
    const selectedDateMonth = new Date(selectedYear, selectedMonth);
    setDate(selectedDateMonth);
  };
  const handleSelectYear = (event) => {
    setSelectedYear(event.target.value);
    const selectedDateYear = new Date(selectedYear, selectedMonth);
    setDate(selectedDateYear);
  };

  useEffect(() => {
    setDate(new Date(selectedYear, selectedMonth));
  }, [selectedMonth, selectedYear]);

  const handleSignOut = () => {
    localStorage.clear("userData");
    setStoredUserData(null);
    setUserData({ firstName: "", lastName: "" });
  };

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    setStoredUserData(storedUserData);
  }, []);

  return (
    <Container>
      <div className="calendar-user-block">
        {!storedUserData ? (
          <UserDataUI>
            <Link to={"/user"}>
              <UserChangeButton>Авторизоваться</UserChangeButton>
            </Link>
          </UserDataUI>
        ) : (
          <UserDataUI>
            <p>{storedUserData.firstName}</p>
            <p>{storedUserData.lastName}</p>
            <BtnContainer>
              <Link to={"/user"}>
                <UserChangeButton>Сменить пользователя</UserChangeButton>
              </Link>
              <UserSignOut onClick={handleSignOut}>Выйти</UserSignOut>
            </BtnContainer>
          </UserDataUI>
        )}
      </div>
      <Header>
        <Button onClick={handlePrevMonthButtonClick}>{"<"}</Button>
        <select
          onChange={handleSelectMonth}
          defaultValue={selectedMonth}
          value={selectedMonth}>
          {monthNames.map((name, index) => (
            <option key={index} value={index}>
              {name}
            </option>
          ))}
        </select>
        <select
          onChange={handleSelectYear}
          defaultValue={selectedYear}
          value={selectedYear}>
          {years.map((year, index) => (
            <option key={index} value={year}>
              {year}
            </option>
          ))}
        </select>
        <Button onClick={handleNextMonthButtonClick}>{">"}</Button>
      </Header>
      <TableContainer>
        <table className="calendar-table">
          <thead>
            <tr>
              {weekDayNames.map((name) => (
                <th key={name}>{name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {monthData.map((week, index) => (
              <tr key={index}>
                {week.map((date, index) =>
                  date ? (
                    <TableCell
                      key={index}
                      className={
                        calendar.areEqual(date, today)
                          ? "active"
                          : "" || calendar.areEqual(date, selectedDate)
                          ? "selected"
                          : ""
                      }
                      onClick={() => handleDayClick(date)}>
                      {date.getDate()}
                    </TableCell>
                  ) : (
                    <TableCell key={index} />
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </TableContainer>
    </Container>
  );
};

export default MainPage;
