export const AIR_TIKET_RES_USER_DATA = [
  {
    id: 1,
    name: 'booker_name',
    title: '성명',
    type: 'text',
    placeholder: '실명입력',
    info: '',
  },
  {
    id: 2,
    name: 'booker_phone_number',
    title: '휴대전화번호',
    type: 'number',
    placeholder: '-빼고 숫자 입력',
    info: '긴급상황 시 즉시 연락 가능한 번호를 정확히 입력해주세요.',
  },
  {
    id: 3,
    name: 'booker_email',
    title: '이메일',
    type: 'email',
    placeholder: 'example@jejupass.com',
    info: '위의 이메일로 예약확정 안내(바우처 등)가 전송됩니다.',
  },
];

export const AIR_TIKET_RES_PASSENGER_DATA = [
  {
    id: 1,
    title: '탑승객 성명',
    type: 'text',
    placeholderFirst: '한글 성(예:김)',
    placeholderSecond: '한글 이름(예:제주)',
  },
  {
    id: 2,
    title: '생년월일',
    type: 'number',
    placeholder: 'YYYY.MM.DD',
    info: '성별',
    male: '남자',
    female: '여자',
  },
  {
    id: 3,
    title: '국적',
    type: 'text',
    placeholder: '대한민국',
    info: '위의 이메일로 예약확정 안내(바우처 등)가 전송됩니다.',
  },
];
