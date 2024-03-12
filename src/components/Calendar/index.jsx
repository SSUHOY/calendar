import React, { useEffect, useState } from "react";
import "./Calendar.styles.js";
import { MockedCalendarData } from "../mockedData/index.jsx";
import { CalendarContainer, TableCell, TableRow } from "./Calendar.styles.js";
import { getDaysInMonth, getMonthData } from "./Helpers.js";

const MainPage = () => {
  const { years, monthNames, weekDayNames } = MockedCalendarData;

  const [selectedYear, setSelectedYear] = useState();
  console.log(selectedYear);
  const [selectedMonth, setSelectedMonth] = useState();
  console.log("🚀 ~ MainPage ~ selectedMonth:", selectedMonth)
  const [selectedDate, setSelectedDate] = useState();
  const [date, setDate] = useState(new Date());

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

  return (
    <CalendarContainer>
      <header>
        <button onClick={handlePrevMonthButtonClick}>{"<"}</button>
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
        <button onClick={handleNextMonthButtonClick}>{">"}</button>
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
            <TableRow key={index}>
              {week.map((date, index) =>
                date ? (
                  <TableCell key={index} onClick={() => handleDayClick(date)}>
                    {date.getDate()}
                  </TableCell>
                ) : (
                  <TableCell key={index} />
                )
              )}
            </TableRow>
          ))}
        </tbody>
      </table>
    </CalendarContainer>
  );
};

export default MainPage;
