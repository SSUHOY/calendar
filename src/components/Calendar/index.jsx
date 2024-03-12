import React, { useState } from "react";
import "./Calendar.styles.js";
import { MockedCalendarData } from "../mockedData/index.jsx";
import { CalendarContainer, TableCell, TableRow } from "./Calendar.styles.js";
import { getDaysInMonth, getMonthData } from "./Helpers.js";

const MainPage = () => {
  const [selectedYear, setSelectedYear] = useState(2024);
  const [selectedMonth, setSelectedMonth] = useState(2);

  const { years, monthNames, weekDayNames, date } = MockedCalendarData;
  const daysArray = getDaysInMonth(selectedYear, selectedMonth);

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
        <button>{"<"}</button>
        <select>
          {monthNames.map((name, index) => (
            <option key={name} value={index}>
              {name}
            </option>
          ))}
        </select>
        <select>
          {years.map((year, index) => (
            <option key={year} value={index}>
              {year}
            </option>
          ))}
        </select>
        <button>{">"}</button>
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
                  <TableCell>{date.getDate()}</TableCell>
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
