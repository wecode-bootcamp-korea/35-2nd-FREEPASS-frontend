import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import AirPlainTap from './AirPlainTap';
import CarTap from './CarTap';
import SleepTap from './SleepTap';
import ShopTap from './ShopTap';
import CafeTap from './CafeTap';

const AirModal = ({ closeModal }) => {
  const [currentId, setCurrentId] = useState(1);
  const clickHandler = id => {
    setCurrentId(id);
  };

  return (
    <>
      <UlDiv>
        <DeleteButton onClick={closeModal}>X</DeleteButton>
        <IconUl>
          {ICON_ARR.map((cate, idx) => {
            return (
              <IconLi
                key={idx}
                className={cate}
                onClick={e => clickHandler(idx + 1)}
                primary={currentId === idx + 1}
              >
                {ICON_ARR[idx]}
              </IconLi>
            );
          })}
        </IconUl>
      </UlDiv>
      <div>{MAPPING_OBJ[currentId]}</div>
    </>
  );
};

const MAPPING_OBJ = {
  1: <AirPlainTap />,
  2: <CarTap />,
  3: <SleepTap />,
  4: <ShopTap />,
  5: <CafeTap />,
};

const ICON_ARR = [
  <i key={1} className="fa-solid fa-plane" />,
  <i key={2} className="fa-solid fa-car" />,
  <i key={3} className="fa-solid fa-bed" />,
  <i key={4} className="fa-solid fa-tag" />,
  <i key={5} className="fa-solid fa-mug-saucer" />,
];

const UlDiv = styled.div`
  width: 100%;
  object-fit: cover;
  position: relative;
  padding-top: 20px;
  background-color: #f8f8f8;
`;

const DeleteButton = styled.button`
  position: absolute;
  right: 210px;
  border: 0px;
  opacity: 0.5;
  font-size: 20px;
  background-color: #f8f8f8;
`;

const IconUl = styled.ul`
  display: flex;
  justify-content: center;
  padding-bottom: 17px;
`;

const IconLi = styled.li`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: center;
  margin: 8px 6px;
  margin-bottom: 25px;
  border-radius: 10px;
  background-color: #fff;

  i {
    font-size: 30px;
    color: #63a1ff;
  }

  ${props =>
    props.primary &&
    css`
      background-color: #63a1ff;
      i {
        color: #fff;
      }
    `}
`;

export default AirModal;
