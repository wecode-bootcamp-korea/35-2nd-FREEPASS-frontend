import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  setBoardStartDay,
  setBoardEndDay,
  setSearch,
} from '../../../store/board';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';

const Dep = ({ changeSearchSort }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const dispatch = useDispatch();

  const onChange = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    function setBoardDate(startOrEnd) {
      const year = startOrEnd.getFullYear().toString().slice(2);
      const month = startOrEnd.getMonth() + 1;
      const day = startOrEnd.getDate();
      const weekday = startOrEnd.toString().slice(0, 3);
      const weekdayToKo = WEEKDAY_TO_KO.map(data => {
        return data[weekday];
      });
      const finalDate = `${year}.${month >= 10 ? month : '0' + month}.${
        day >= 10 ? day : '0' + day
      }(${weekdayToKo})`;
      return finalDate;
    }

    dispatch(setBoardStartDay(setBoardDate(start)));
    dispatch(setBoardEndDay(setBoardDate(end)));
    dispatch(
      setBoardDate(start) === setBoardDate(end)
        ? setSearch('편도')
        : setSearch('왕복')
    );
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
          // minDate={new Date()}
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
