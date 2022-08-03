import React from 'react';
import styled from 'styled-components';
const CitySearchList = ({ cityMockData, name, clickCity }) => {
  return (
    <SearchListDiv>
      {cityMockData.map(data => {
        return (
          <ListCityName
            id={name}
            onClick={e => clickCity(e, data.city_name)}
            key={data.id}
          >
            {`${data.city_name} `}
            <ListCityNameEn>{data.code}</ListCityNameEn>
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
