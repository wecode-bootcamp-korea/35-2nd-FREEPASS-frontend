import React from 'react';
import styled from 'styled-components';

const Login = () => {
  const Kakao_URL = `https://kauth.kakao.com/oauth/authorize
  ?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}
  &redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}
  &response_type=code`;

  console.log(Kakao_URL);

  return (
    <LoginContainer>
      <LoginWrapper>
        <Header margintop="15px">똑똑한 제주여행,</Header>
        <Header margintop="5px" marginbottom="50px">
          제주패스로 시작하세요
        </Header>
        <InputWrapper>
          <Text>아이디(이메일)</Text>
          <InputBox placeholder="E-mail을 입력해주세요." marginbottom="30px" />
          <Text>비밀번호</Text>
          <InputBox
            placeholder="비밀번호를 입력해주세요."
            marginbottom="30px"
          />
        </InputWrapper>
        <ButtonArea>
          <LoginButton>로그인</LoginButton>
        </ButtonArea>
        <Line>간편 로그인</Line>
        <KakaoButton>
          <a href={Kakao_URL}>
            <Image
              src="/images/Login/kakao_login_large_wide.png"
              alt="loginButton"
            />
          </a>
        </KakaoButton>
      </LoginWrapper>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  width: 100%;
`;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 480px;
  height: 600px;
  margin: 40px auto;
`;

const Header = styled.div`
  font-size: 26px;
  font-weight: 700;
  margin-top: ${props => props.margintop};
  margin-bottom: ${props => props.marginbottom};
`;
const InputWrapper = styled.div`
  width: 80%;
  margin-top: 20px;
`;

const Text = styled.p`
  font-size: 11px;
  font-weight: 600;
  margin-bottom: 5px;
`;

const InputBox = styled.input`
  border: 2px solid #f5f5f5;
  border-radius: 5px;
  width: 100%;
  height: 45px;
  margin-top: ${props => props.margintop};
  margin-bottom: ${props => props.marginbottom};
  padding-left: 13px;
  ::placeholder {
    font-size: 14px;
    color: #acaaaa;
  }
`;
const ButtonArea = styled.div`
  margin-top: 10px;
  margin-bottom: 35px;
  text-align: center;
  width: 380px;
  height: 50px;
`;
const LoginButton = styled.button`
  width: 100%;
  height: 100%;
  color: white;
  background-color: #569aff;
  border-radius: 12px;
  border: none;
  margin: 0 4px;
  padding: 0 24px;
  cursor: pointer;
`;

const Line = styled.p`
  width: 100%;
  text-align: center;
  color: rgba(0, 0, 0, 0.35);
  font-size: 14px;
  margin: 0px;
  padding: 0px;
  ::before {
    display: inline-block;
    margin: 0px 16px;
    content: ' ';
    background: rgba(0, 0, 0, 0.35);
    width: 28%;
    height: 1px;
    font-size: 0px;
    line-height: 0px;
  }
  ::after {
    display: inline-block;
    margin: 0px 16px;
    content: ' ';
    background: rgba(0, 0, 0, 0.35);
    width: 28%;
    height: 1px;
    font-size: 0px;
    line-height: 0px;
  }
`;

const KakaoButton = styled.div`
  width: 380px;
  margin-top: 35px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 50px;
`;
export default Login;
