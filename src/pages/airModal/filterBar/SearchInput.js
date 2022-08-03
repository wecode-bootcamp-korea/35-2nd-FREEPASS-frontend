import React from 'react';
import styled from 'styled-components';

const SearchInput = ({ changeCityData }) => {
  return <CenterInput onChange={changeCityData} />;
};

const CenterInput = styled.input.attrs({
  placeholder: '도시 또는 공항 이름으로 검색',
  type: 'search',
})`
  width: 300px;
  height: 42px;
  padding-left: 35px;
  border: 1px solid #eaeaea;
  border-radius: 7px;
  opacity: 0.7;
  background-color: #fff;
`;

export default SearchInput;
