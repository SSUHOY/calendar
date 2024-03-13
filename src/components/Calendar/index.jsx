import React, { useEffect, useState } from "react";
import "./Calendar.styles.js";
import { MockedCalendarData } from "../mockedData/index.jsx";
import {
  BtnContainer,
  Button,
  Container,
  TableCell,
  UserChangeButton,
  UserDataUI,
  UserSignOut,
} from "./Calendar.styles.js";
import { getDaysInMonth } from "./Helpers.js";
import { Link } from "react-router-dom";

const MainPage = ({ userData, setUserData }) => {
  const { years, monthNames, weekDayNames } = MockedCalendarData;

  const [selectedYear, setSelectedYear] = useState();
  const [selectedMonth, setSelectedMonth] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const [date, setDate] = useState(new Date());

  const [storedUserData, setStoredUserData] = useState({});
  console.log("🚀 ~ MainPage ~ storedUserData:", storedUserData);

  const daysArray = getDaysInMonth(selectedYear, selectedMonth);

  const handlePrevMonthButtonClick = () => {
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();

    let newMonth;
    let newYear;

    if (currentMonth === 0) {
      newMonth = 11;
      newYear = currentYear - 1;
    } else {
      newMonth = currentMonth - 1;
      newYear = currentYear;
    }

    const prevDate = new Date(newYear, newMonth);
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
    setDate(nextDate);
  };

  const handleDayClick = (date) => {
    setSelectedDate(date);
  };
  const handleSelectYear = (event) => {
    setSelectedYear(event.target.value);
    const selectedDateYear = new Date(selectedYear, selectedMonth);
    setDate(selectedDateYear);
  };
  const handleSelectMonth = (event) => {
    setSelectedMonth(event.target.value);
    const selectedDateMonth = new Date(selectedYear, selectedMonth);
    setDate(selectedDateMonth);
  };

  const monthData = [
    [
      undefined,
      undefined,
      new Date(),
      new Date(),
      new Date(),
      new Date(),
      new Date(),
    ],
    [
      new Date(),
      new Date(),
      new Date(),
      new Date(),
      new Date(),
      new Date(),
      new Date(),
    ],
    [
      new Date(),
      new Date(),
      new Date(),
      new Date(),
      new Date(),
      new Date(),
      new Date(),
    ],
    [
      new Date(),
      new Date(),
      new Date(),
      new Date(),
      new Date(),
      new Date(),
      new Date(),
    ],
    [
      new Date(),
      new Date(),
      new Date(),
      new Date(),
      undefined,
      undefined,
      undefined,
    ],
  ];

  const handleUnlogin = () => {
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
          <Link to={"/user"}>
            <UserChangeButton>Авторизоваться</UserChangeButton>
          </Link>
        ) : (
          <UserDataUI>
            <p>{storedUserData.firstName}</p>
            <p>{storedUserData.lastName}</p>
            <BtnContainer>
              <Link to={"/user"}>
                <UserChangeButton>Сменить пользователя</UserChangeButton>
              </Link>
              <UserSignOut onClick={handleUnlogin}>Выйти</UserSignOut>
            </BtnContainer>
          </UserDataUI>
        )}
      </div>
      <header>
        <Button onClick={handlePrevMonthButtonClick}>{"<"}</Button>
        <select onChange={handleSelectMonth}>
          {monthNames.map((name, index) => (
            <option key={name} value={index}>
              {name}
            </option>
          ))}
        </select>
        <select value={selectedYear} onChange={handleSelectYear}>
          {years.map((year, index) => (
            <option key={year} value={index}>
              {year}
            </option>
          ))}
        </select>
        <Button onClick={handleNextMonthButtonClick}>{">"}</Button>
      </header>
      <table>
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
                  <TableCell key={index} onClick={() => handleDayClick(date)}>
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
    </Container>
  );
};

export default MainPage;
