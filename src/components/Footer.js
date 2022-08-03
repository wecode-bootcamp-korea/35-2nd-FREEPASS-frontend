import React from 'react';
import styled from 'styled-components';
const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterBox flex="1.5">
          {Footers.map((Footer, index) => {
            return (
              <FooterWrap key={index}>
                <FooterTitle>{Footer.title}</FooterTitle>
                {Footer.lists.map((value, index) => {
                  return <FooterList key={index}>{value}</FooterList>;
                })}
              </FooterWrap>
            );
          })}
        </FooterBox>
        <FooterBox flex="1">
          <FooterContents>
            <FooterTitle>App 다운로드</FooterTitle>
            <ShortDes margintop="20px">제주패스 앱 설치하고</ShortDes>
            <ShortDes margintop="10px">더 편리하게 이용하세요.</ShortDes>
          </FooterContents>
          <FooterInfo>
            <QrImage src="/images/Footer/Qrimage.png" />
          </FooterInfo>
        </FooterBox>
        <FooterBox flex="1.5">
          {Description.map((values, index) => {
            return (
              <FooterContents key={index}>
                <FooterTitle>{values.title}</FooterTitle>
                {values.lists.map((value, index1) => {
                  return (
                    <ShortDes
                      key={index1}
                      margintop={index1 === 0 ? '20px' : '10px'}
                    >
                      {value}
                    </ShortDes>
                  );
                })}
              </FooterContents>
            );
          })}
        </FooterBox>
      </FooterContainer>
      <FooterBottom>
        <Des>개인정보처리방침 | 이용약관</Des>
        {Agree.map((value, index) => {
          return (
            <LongDes key={index} bottom={value.bottom}>
              {value.LongDes}
            </LongDes>
          );
        })}
      </FooterBottom>
    </>
  );
};

const Footers = [
  {
    title: '제주패스',
    lists: ['회사소개', '회원혜택 안내'],
  },
  {
    title: '고객센터',
    lists: ['공지사항', '자주찾는질문', '예약확인'],
  },
  {
    title: 'ESG',
    lists: ['그린 앰버서더', '캠패인 거부'],
  },
];

const Description = [
  {
    title: '전화예약 / 고객상담',
    lists: ['이용에 궁금하신 점이', '있으신가요?'],
  },

  {
    title: '1544-0445',
    lists: ['평일 09:00~18:00', '점심시간 12:00~13:00'],
  },
];

const Agree = [
  {
    LongDes:
      '(주)취뽀 FREEPASS 대표이사 : 손찬규 | 사업자등록번호 : 100-11-10000 | 통신판매신고 제2022-제주연동-00호 | 관광사업자 등록번호 : 제2022-00호',
    bottom: '20px',
  },
  { LongDes: '제주특별자치도 제주시 찬규로 22, 1층 (우)12345', bottom: '25px' },
  {
    LongDes:
      '(주)FREEPASS는 개별 항공권 및 숙박 상품에 대하여 통신판매중개자로서 통신판매의 당사자가 아니며 해당상품의 거래정보 및 거래 등에 대해 책임을 지지 않습니다.',
    bottom: '5px',
  },
  {
    LongDes:
      '(주)FREEPASS는 렌터카 파트너사가 제공하는 일부 렌터카에 대하여 통신판매중개자의 지위를 가지며, 해당 상품, 상품정보, 거래에 관한 의무와 책임은 판매자에게 있습니다.',
    bottom: '30px',
  },
];
export default Footer;

const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 25vh;
`;

const FooterBox = styled.div`
  flex: ${props => props.flex};
  display: flex;
  justify-content: center;
  border-right: 1px solid #aeaeae;
  border-top: 1px solid #aeaeae;
  border-bottom: 1px solid #aeaeae;
  padding-top: 60px;
`;

const FooterWrap = styled.div`
  width: 100px;
  text-align: left;
  margin-left: 50px;
`;

const FooterTitle = styled.div`
  font-size: 18px;
  font-weight: 800;
`;

const FooterList = styled.p`
  font-size: 16px;
  margin-top: 20px;
  font-weight: 500;
  color: #606060;
`;

const FooterContents = styled.div`
  width: 35%;
`;

const ShortDes = styled.p`
  color: #606060;
  font-size: 14px;

  margin-top: ${props => props.margintop};
`;

const FooterInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 30%;
`;

const QrImage = styled.img`
  width: 70px;
  height: 70px;
`;
const FooterBottom = styled.div`
  width: 100%;
  height: 35vh;
  background-color: #18225c;
  padding: 70px 200px 20px 200px;
`;

const Des = styled.p`
  color: white;
  font-size: 18px;
  margin-bottom: 40px;
`;

const LongDes = styled.p`
  color: #a2a6b2;
  font-size: 14px;
  margin-bottom: ${props => props.bottom};
`;
