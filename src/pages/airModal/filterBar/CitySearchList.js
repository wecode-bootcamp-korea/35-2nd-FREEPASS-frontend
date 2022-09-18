import React from 'react';
import { useDispatch } from 'react-redux';
import { clickCityDep, clickCityDes } from '../../../store/contry';
import styled from 'styled-components';

const CitySearchList = ({ cityMockData, name }) => {
  const dispatch = useDispatch();

  return (
    <SearchListDiv>
      {cityMockData.map(({ id, city_name, code }) => {
        return (
          <ListCityName
            key={id}
            onClick={() => {
              name === 'departure'
                ? dispatch(clickCityDep(city_name))
                : dispatch(clickCityDes(city_name));
            }}
          >
            {`${city_name} `}
            <ListCityNameEn>{code}</ListCityNameEn>
          </ListCityName>
        );
      })}
    </SearchListDiv>
  );
};

const SearchListDiv = styled.div`
  height: 300px;
  padding-top: 15px;
  margin-top: 15px;
  font-size: 14px;
  overflow: scroll;
  overflow-x: hidden;
`;

const ListCityName = styled.p`
  padding: 10px 4px;
`;

const ListCityNameEn = styled.span`
  color: #adacac;
`;
export default CitySearchList;
