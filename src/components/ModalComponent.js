import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Modal from 'react-modal';
import AirModal from '../pages/AirModal/AirModal';
Modal.setAppElement('#root');

const ModalComponent = () => {
  // return <div>ModalFilterBar</div>;
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0,0,0,0.6)',
      position: 'absolute',
    },
    content: {
      top: 0,
      width: '100%',
      padding: 0,
      paddingTop: '12vh',
      border: '1px solid #eaeaea',
      position: 'static',
    },
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <BarButton onClick={openModal}>
        <InnerBar>
          <FlightInner primary>
            <Panel width="180px">
              <Text>출발</Text>
              <Button>
                <Text>
                  서울<span>SEL</span>
                </Text>
              </Button>
            </Panel>
            <Panel width="180px">
              <Text>도착</Text>
              <Button>
                <Text>어디로 떠나시나요?</Text>
              </Button>
            </Panel>
          </FlightInner>
          <FlightInner>
            <Panel width="215px">
              <Text>탑승일</Text>
              <Button>
                <GrayText>탑승일을 선택하세요.</GrayText>
              </Button>
            </Panel>
          </FlightInner>
          <FlightInner>
            <Panel width="190px">
              <Text>인원 및 좌석등급</Text>
              <Button>
                <Text>성인1,전체</Text>
              </Button>
            </Panel>
          </FlightInner>
          <Search>검색</Search>
        </InnerBar>
      </BarButton>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <AirModal closeModal={closeModal} />
      </Modal>
    </div>
  );
};

const BarButton = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 80px;
  border: 0;
  background-color: #fff;
  padding-bottom: 100px;
`;

const InnerBar = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 25px;
  text-align: left;
  background-color: #fff;
`;

const FlightInner = styled.span`
  height: 83px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  margin-left: 16px;
  border-radius: 12px;
  box-shadow: 0 8px 16px 0 rgb(32 32 32 / 8%);
  background: #fff;
  ${props =>
    props.primary &&
    css`
      border: 1px solid #63a1ff;
    `}
`;

const Panel = styled.span`
  width: ${props => props.width};
  padding: 10px 7px 3px 5px;
  text-align: left;
  font-size: 10px;
`;

const Text = styled.span`
  margin: ${props => props.margin};
  line-height: 1.2rem;
  color: #606060;
  font-size: 13px;
  span {
    padding-left: 5px;
    color: #63a1ff;
  }
`;

const Button = styled.div`
  height: 20px;
  display: block;
  padding: 0;
  border: none;
  text-align: left;
  line-height: 1.2rem;
  font-weight: 700;
  font-size: 15px;
  background: #fff;
  ${Text} {
    color: #202020;
    font-size: 15px;
    font-weight: 700;
  }
`;

const GrayText = styled.span`
  color: #aeaeae;
  font-weight: 400;
`;

const Search = styled.span`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  border-radius: 16px;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  background: #569aff;
`;

export default ModalComponent;
