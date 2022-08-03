import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const Redirect = () => {
  // const navigate = useNavigate();
  const url = new URL(window.location.href);
  const code = url.searchParams.get('code');

  const getToken = () => {
    fetch(`http://43.200.163.205:3000/users/kakao?code=${code}`)
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('token', data.token);
        window.location.replace('/');
      });
  };

  useEffect(() => {
    getToken();
  });

  return (
    <>
      <Spinner />
      <Title>Loading...</Title>
    </>
  );
};

const rotation = keyframes`
  from{
    transform: rotate(0deg);
    }
    to{
      transform: rotate(360deg);
    }
    `;
const Spinner = styled.div`
  height: 40px;
  width: 40px;
  border: 3px solid #569aff;
  border-radius: 50%;
  border-top: none;
  border-right: none;
  margin: 16px auto;
  animation: ${rotation} 1s linear infinite;
`;

const Title = styled.p`
  text-align: center;
  font-size: 15px;
  margin-top: 10px;
`;

export default Redirect;
