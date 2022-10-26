/*
[미완료된 것]
1. 크롤링해서 배열로 정리
  현재 더미데이터 3개 임시로 넣어둠.
*/
//c언어의 전역 변수와 같이 모든 페이지에서 사용할 요소들을 선언하는 파일입니다.
//recoil을 사용했습니다.
import { atom } from "recoil";

//recoil 시험용 다크 테마
export const isDarkAtom = atom({
  key: "isDark",
  default: true,
});

//유저의 이름을 저장합니다. Name에서 입력/Header와 Main에서 출력
export const userNameAtom = atom({
  key: "userName",
  default: "내",
});

// 월에 사용할 쿠키의 개수입니다. Name에서 입력
export const monCookieAtom = atom({
  key: "monCookie",
  default: 0,
});

//웹툰 중 선택된 웹툰들이 여기에 저장됩니다.
export const selectedAtom =atom({
  key: "Selected",
  default: new Array(),
})

//하나의 웹툰 아래에는 다음과 같은 정보들이 들어갈 예정입니다.
// Webtoon {
//   id: number; //인덱스
//   img: text; //썸네일 이미지 (초기 값 요구)
//   text: string; // 웹툰 제목 (초기 값 요구)
//   rend: Number; //대여 쿠키 개수 (초기 값 요구)
//   have: Number; //소장 쿠키 개수 (초기 값 요구)
//   isHave: boolean; //대여 혹은 소장 여부 (초기 값 false)
//   value: Number; //호감도 (등수 역순, 초기 값 0)
// }

// 위와 같은 웹툰이 아래와 같이 배열에 저장됩니다.
export const webtoonsAtom = atom({
  key: "Webtoons",
  default: {
    Mon: [{
      key: 0,
      thumb: "https://shared-comic.pstatic.net/thumb/webtoon/758037/thumbnail/thumbnail_IMAG21_15cb2611-34c0-4f02-a689-41d0b1016579.jpg",
      name: "참교육", // 웹툰 제목
      rend: 2, //대여 쿠키 개수
      have: 3, //소장 쿠키 개수
      isHave: false, //대여 혹은 소장 여부(기본값 대여)
      value:0,
    },
    {
      key: 1,
      thumb: "https://shared-comic.pstatic.net/thumb/webtoon/648419/thumbnail/thumbnail_IMAG21_d9398229-cbfd-47dc-9208-0a6fb936f3a7.jpg",
      name: "뷰티풀 군바리", // 웹툰 제목
      rend: 3, //대여 쿠키 개수
      have: 4, //소장 쿠키 개수
      isHave: false, //대여 혹은 소장 여부(기본값 대여)
      value:0,
    },
    {
      key: 2,
      thumb: "https://shared-comic.pstatic.net/thumb/webtoon/783052/thumbnail/thumbnail_IMAG21_e14cbea7-8416-40e7-9aae-ccff970ac88f.jpg",
      name: "퀘스트지상주의", // 웹툰 제목
      rend: 3, //대여 쿠키 개수
      have: 4, //소장 쿠키 개수
      isHave: false, //대여 혹은 소장 여부(기본값 대여)
      value:0,
    },
  ],
    Tue: [],
    Wed: [],
    Thu: [],
    Fri: [],
    Sat: [],
    Sun: [],
  },
});

