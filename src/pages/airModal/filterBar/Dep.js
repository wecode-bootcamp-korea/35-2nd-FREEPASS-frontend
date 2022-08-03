import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';

const Dep = ({ changeBoardStartDay, changeBoardEndDay, changeSearchSort }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const onChange = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    const year = start.getFullYear().toString().slice(2);
    const month = start.getMonth() + 1;
    const day = start.getDate();
    const weekday = start.toString().slice(0, 3);
    const weekdayToKo = WEEKDAY_TO_KO.map(data => {
      return data[weekday];
    });

    const finalStartDate = `${year}.${month >= 10 ? month : '0' + month}.${
      day >= 10 ? day : '0' + day
    }(${weekdayToKo})`;

    const hyphenFinalStartDate = `${year}-${
      month >= 10 ? month : '0' + month
    }-${day >= 10 ? day : '0' + day}(${weekdayToKo})`;

    const endYear = end.getFullYear().toString().slice(2);
    const endMonth = end.getMonth() + 1;
    const endDay = end.getDate();
    const endWeekday = end.toString().slice(0, 3);

    const endweekdayToKo = WEEKDAY_TO_KO.map(data => {
      return data[endWeekday];
    });

    const finalEndDate = `${endYear}.${
      endMonth >= 10 ? endMonth : '0' + endMonth
    }.${endDay >= 10 ? endDay : '0' + endDay}(${endweekdayToKo})`;

    const hyphenFinalEndDate = `${endYear}-${
      endMonth >= 10 ? endMonth : '0' + endMonth
    }-${endDay >= 10 ? endDay : '0' + endDay}(${endweekdayToKo})`;

    changeBoardStartDay(finalStartDate, hyphenFinalStartDate);
    changeBoardEndDay(finalEndDate, hyphenFinalEndDate);
    changeSearchSort(finalStartDate, finalEndDate);
  };

  return (
    <ArriveDiv>
      <RightDiv>
        <p>항공편 날짜를</p>
        <p>선택하세요.</p>
      </RightDiv>
      <LeftDiv>
        <DatePicker
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          inline
          monthsShown={2}
          locale={ko}
          minDate={new Date()}
        />
      </LeftDiv>
    </ArriveDiv>
  );
};

const WEEKDAY_TO_KO = [
  {
    Mon: '월',
    Tue: '화',
    Wed: '수',
    Thu: '목',
    Fri: '금',
    Sat: '토',
    Sun: '일',
  },
];

const ArriveDiv = styled.div`
  height: 430px;
  display: flex;
  justify-content: center;
  background-color: #fff;
`;

const RightDiv = styled.div`
  width: 260px;
  height: 100%;
  padding-top: 48px;
  border-right: 1px solid #eaeaea;
  background-color: #fff;
  p {
    line-height: 1.7rem;
    font-size: 24px;
    font-weight: bold;
  }
`;

const LeftDiv = styled.div`
  width: 800px;
  height: 100%;
  padding-top: 48px;
  padding-left: 28px;
  padding-right: 25px;
  border-right: 1px solid #eaeaea;
  background-color: #fff;
  .react-datepicker {
    border: 0px;
    line-height: 1.5rem;
  }
  .react-datepicker__month-container {
    width: 320px;
  }
  .react-datepicker__header {
    border: 0px;
    background-color: #fff;
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected,
  .react-datepicker__day--in-range,
  .react-datepicker__day--in-selecting-range {
    border-radius: 1rem;
    color: #fff;
    background-color: #63a2ff;
  }
`;

export default Dep;
