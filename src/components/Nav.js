import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
  const [token, setToken] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, [navigate]);

  const Logout = () => {
    localStorage.removeItem('token');
    setToken('');
  };

  const CategoryHandle = e => {
    const { title } = e.target;
    navigate(`/${title}`);
  };

  const IsLogin = () => {
    return (
      <>
        <NavTopWrap>
          <NavImage src="/images/Nav/logout.png" alt="logouticon" />
          <Link to="/">
            <NavInfo onClick={Logout}>로그아웃</NavInfo>
          </Link>
        </NavTopWrap>
        <NavTopWrap>
          <NavImage src="/images/Nav/user.png" alt="usericon" />
          <NavInfo>마이페이지</NavInfo>
        </NavTopWrap>
      </>
    );
  };

  const IsLogout = () => {
    return (
      <>
        <NavTopWrap>
          <NavImage src="/images/Nav/enter.png" alt="loginicon" />
          <Link to="/Login">
            <NavInfo>로그인</NavInfo>
          </Link>
        </NavTopWrap>
        <NavTopWrap>
          <NavImage src="/images/Nav/bag.png" alt="carticon" />
          <NavInfo>주문조회</NavInfo>
        </NavTopWrap>
      </>
    );
  };
  return (
    <NavContainer>
      <Link to="/">
        <TopLogo>FREEPASS</TopLogo>
      </Link>
      <NavCenter>
        <NavList>
          {TITLE.map(value => {
            return (
              <Text key={value.id} title={value.url} onClick={CategoryHandle}>
                {value.title}
              </Text>
            );
          })}
          <Border />
          <SearchIcon src="/images/Nav/search.png" alt="searchicon" />
        </NavList>
      </NavCenter>
      <NavRight>
        <NavRightTop>{token ? <IsLogin /> : <IsLogout />}</NavRightTop>
        <NavRightTop>
          <NavText>이벤트</NavText>
          <NavText>고객센터</NavText>
        </NavRightTop>
      </NavRight>
    </NavContainer>
  );
};

export default Nav;

const TITLE = [
  { id: 1, title: 'ESG', url: 'esg' },
  { id: 2, title: '항공', url: 'airmain' },
  { id: 3, title: '지도', url: 'airmap' },
  { id: 4, title: '숙박', url: '' },
  { id: 5, title: '맛집', url: '' },
  { id: 6, title: '카페패스', url: '' },
];

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  width: 100%;
  height: 12vh;
  top: 0;
  padding: 0 60px;
  z-index: 999;
  background-color: #f8f8f8;
`;

const TopLogo = styled.h1`
  font-size: 35px;
  color: #242d64;
  font-weight: 800;
  cursor: pointer;
`;

const NavCenter = styled.div`
  width: 50%;
`;

const NavList = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const Text = styled.h2`
  margin-right: 10px;
  font-weight: 700;
  font-size: 25px;
  cursor: pointer;
  &:hover {
    color: #63a1ff;
  }
`;

const Border = styled.div`
  border-left: 2px solid gray;
  height: 25px;
`;

const SearchIcon = styled.img`
  width: 22px;
  cursor: pointer;
`;

const NavRight = styled.div`
  width: 12%;
  display: inline-block;
`;

const NavRightTop = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
`;

const NavTopWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  padding-right: 10px;
  margin-top: 5px;
`;

const NavImage = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 5px;
`;

const NavInfo = styled.p`
  font-size: 13px;
  color: #808080;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

const NavText = styled.p`
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: #63a1ff;
  }
`;
