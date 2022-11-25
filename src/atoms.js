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
export const selectedAtom = atom({
  key: "Selected",
  default: new Array(),
});

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
    Mon: [
      {
        key: 0,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/758037/thumbnail/thumbnail_IMAG21_15cb2611-34c0-4f02-a689-41d0b1016579.jpg",
        name: "참교육", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 1,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/648419/thumbnail/thumbnail_IMAG21_d9398229-cbfd-47dc-9208-0a6fb936f3a7.jpg",
        name: "뷰티풀 군바리", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 2,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/783052/thumbnail/thumbnail_IMAG21_e14cbea7-8416-40e7-9aae-ccff970ac88f.jpg",
        name: "퀘스트지상주의", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 3,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/728750/thumbnail/thumbnail_IMAG21_47c21251-b213-4882-bacc-15adce1acfc8.jpg",
        name: "장씨세가 호위무사", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 4,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/602910/thumbnail/thumbnail_IMAG21_e861f2cf-6157-4d33-8e02-7b4cbf0a8baf.jpg",
        name: "윈드브레이커", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 5,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/801035/thumbnail/thumbnail_IMAG21_01fd148f-edb2-4ada-9571-910981ec3376.jpg",
        name: "퍼니게임", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 6,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/774863/thumbnail/thumbnail_IMAG21_3689684179498578529.jpg",
        name: "팔이피플", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 7,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/795297/thumbnail/thumbnail_IMAG21_4134925888999731505.jpg",
        name: "신화급 귀속 아이템을 손에 넣었다", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 8,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/796867/thumbnail/thumbnail_IMAG21_77aa5064-b42b-4838-912e-2c6266c53a74.jpg",
        name: "버림받은 왕녀의 은밀한 침실", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 9,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/795643/thumbnail/thumbnail_IMAG21_bf51fa0f-e374-49f8-973d-c17c5385bbef.jpg",
        name: "호랑신랑뎐", // 웹툰 제목
        rend: 1, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 10,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/739115/thumbnail/thumbnail_IMAG21_7077747896626722102.jpg",
        name: "앵무살수", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 11,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/654774/thumbnail/thumbnail_IMAG21_4048794550434817075.jpg",
        name: "소녀의 세계", // 웹툰 제목
        rend: 0, //대여 쿠키 개수
        have: 0, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 12,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/768536/thumbnail/thumbnail_IMAG21_91c5c081-77e6-4516-a503-2f45aad57401.jpg",
        name: "잔불의 기사", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 13,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/774866/thumbnail/thumbnail_IMAG21_cf7085c1-bfe2-49af-a82f-402e1597a02c.jpg",
        name: "똑 닮은 딸", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 14,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/733074/thumbnail/thumbnail_IMAG21_3905012721312293730.jpg",
        name: "백수세끼", // 웹툰 제목
        rend: 0, //대여 쿠키 개수
        have: 0, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 15,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/796075/thumbnail/thumbnail_IMAG21_93014d8b-6341-4d79-9329-a1533a03f25c.jpg",
        name: "절대검감", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 16,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/800333/thumbnail/thumbnail_IMAG21_bc491ae3-1eb3-40e3-b332-096f164c6bcb.jpg",
        name: "사이다걸", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 17,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/21815/thumbnail/thumbnail_IMAG21_7292511306663934265.jpg",
        name: "히어로메이커", // 웹툰 제목
        rend: 0, //대여 쿠키 개수
        have: 0, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 18,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/772725/thumbnail/thumbnail_IMAG21_895e8bc9-265e-459e-99c4-49b99f53a3a7.jpg",
        name: "물어보는 사이", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 19,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/752414/thumbnail/thumbnail_IMAG21_1cd6a917-c7d5-41f5-8303-8f5fd774c83c.jpg",
        name: "리턴 투 플레이어", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 20,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/801710/thumbnail/thumbnail_IMAG21_b65d115a-9224-4d45-9773-18addbc432d3.jpg",
        name: "인섹터", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 21,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/758666/thumbnail/thumbnail_IMAG21_7364564497641911606.jpg",
        name: "꼬리잡기", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 22,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/761461/thumbnail/thumbnail_IMAG21_3774632640345486128.jpg",
        name: "순정말고 순종", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 23,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/794421/thumbnail/thumbnail_IMAG21_7149805464895174963.jpg",
        name: "북부 공작님을 유혹하겠습니다", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 24,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/769663/thumbnail/thumbnail_IMAG21_935bf47d-9219-4f45-8a58-d5a7af13ce51.jpg",
        name: "더블클릭", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 25,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/741891/thumbnail/thumbnail_IMAG21_47b971e4-00b6-451b-862e-1060bae5a80d.jpg",
        name: "결혼생활 그림일기", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 26,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/801827/thumbnail/thumbnail_IMAG21_46875d4a-190f-4663-bac5-0d3003263646.jpg",
        name: "랭커", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 27,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/800034/thumbnail/thumbnail_IMAG21_a340a6df-b77c-436a-a729-70927915634d.jpg",
        name: "헬크래프트", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 28,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/774040/thumbnail/thumbnail_IMAG21_7365182423173379889.jpg",
        name: "또다시, 계약 부부", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 29,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/802039/thumbnail/thumbnail_IMAG21_a7a82a34-586c-4acf-b6f2-ab052be786f1.jpg",
        name: "루루라라 우리네 인생", // 웹툰 제목
        rend: 1, //대여 쿠키 개수
        have: 2, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 30,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/774703/thumbnail/thumbnail_IMAG21_b33df570-a89d-42c7-bcfb-6a946c4b8846.jpg",
        name: "아, 쫌 참으세요 영주님!", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 31,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/758671/thumbnail/thumbnail_IMAG21_8aae95b7-25f1-44f9-8d5a-928482235580.jpg",
        name: "황제와의 하룻밤", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 32,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/800618/thumbnail/thumbnail_IMAG21_0e4be823-3c99-480c-923a-eaa554b46646.jpg",
        name: "도깨비 부른다", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 33,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/780414/thumbnail/thumbnail_IMAG21_2a438429-a54e-4b7f-b1f5-f1c361b73daa.jpg",
        name: "오빠집이 비어서", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 34,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/801517/thumbnail/thumbnail_IMAG21_367cd061-1a23-4f5c-8952-06a777ebe8a4.jpg",
        name: "퇴근 후에 만나요", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 35,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/783535/thumbnail/thumbnail_IMAG21_ee9ba193-055d-45d6-b058-4bd18e0444aa.jpg",
        name: "제왕: 빛과 그림자", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 36,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/687915/thumbnail/thumbnail_IMAG21_d46ad6b8-e9a8-4bc8-b501-e62adfee0eb6.jpg",
        name: "꿈의 기업", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 37,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/796903/thumbnail/thumbnail_IMAG21_3775813335458735414.jpg",
        name: "불청객", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 38,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/791205/thumbnail/thumbnail_IMAG21_7149240538535388720.jpg",
        name: "파운더", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 39,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/791616/thumbnail/thumbnail_IMAG21_4136100197482837305.jpg",
        name: "미니어처 생활백서", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 40,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/768534/thumbnail/thumbnail_IMAG21_7233125574743712358.jpg",
        name: "수영만화일기", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 41,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/780881/thumbnail/thumbnail_IMAG21_7089337839370188646.jpg",
        name: "이제야 연애", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 42,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/796059/thumbnail/thumbnail_IMAG21_5c8fc472-5985-49e1-9e8a-e50c166beb33.jpg",
        name: "우산 없는 애", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 43,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/798277/thumbnail/thumbnail_IMAG21_7295ad46-853c-4bd9-8ddf-0c2367734813.jpg",
        name: "아슈타르테", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 44,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/774302/thumbnail/thumbnail_IMAG21_4121973654889457249.jpg",
        name: "하루의 하루", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 45,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/793274/thumbnail/thumbnail_IMAG21_25a04dea-a6d3-4232-8c86-35bec996fde1.jpg",
        name: "다시쓰는 연애사", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 46,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/783050/thumbnail/thumbnail_IMAG21_3545289688877314871.jpg",
        name: "신군", // 웹툰 제목
        rend: 0, //대여 쿠키 개수
        have: 0, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 47,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/785250/thumbnail/thumbnail_IMAG21_7161678201150071138.jpg",
        name: "원작은 왈결난 지 한참 됐습니다만", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 48,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/786910/thumbnail/thumbnail_IMAG21_3617010845292257894.jpg",
        name: "레지나레나 - 용서받지 못한 그대에게", // 웹툰 제목
        rend: 0, //대여 쿠키 개수
        have: 0, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 49,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/767979/thumbnail/thumbnail_IMAG21_3616779956457398840.jpg",
        name: "그림자 신부", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 50,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/798293/thumbnail/thumbnail_IMAG21_fcea0ff3-a906-43f7-b801-aaf8a2d48b23.jpg",
        name: "굿바이 유교보이", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 51,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/793944/thumbnail/thumbnail_IMAG21_0c4cd9dc-26bc-4977-88ab-ec2939612bba.jpg",
        name: "오늘의 비너스", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 52,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/797253/thumbnail/thumbnail_IMAG21_3adf296f-505b-4824-98b0-61c28432fb2d.jpg",
        name: "메리의 불타는 행복회로", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 53,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/791629/thumbnail/thumbnail_IMAG21_4122541015824753209.jpg",
        name: "입술이 예쁜 남자", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 54,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/793067/thumbnail/thumbnail_IMAG21_3544444194497192757.jpg",
        name: "버그이터", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 55,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/772734/thumbnail/thumbnail_IMAG21_7161620837452636770.jpg",
        name: "최후의 금빛아이", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 56,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/745654/thumbnail/thumbnail_IMAG21_3978989878055821874.jpg",
        name: "백호랑", // 웹툰 제목
        rend: 0, //대여 쿠키 개수
        have: 0, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 57,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/791256/thumbnail/thumbnail_IMAG21_3833187132113172581.jpg",
        name: "파견체", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 58,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/799868/thumbnail/thumbnail_IMAG21_edfa4344-9f13-4a6c-8b9f-00d08cf37a1d.jpg",
        name: "행운을 부탁해!", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 59,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/791058/thumbnail/thumbnail_IMAG21_3688559386884584497.jpg",
        name: "아마도", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 60,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/772243/thumbnail/thumbnail_IMAG21_3918807214864216674.jpg",
        name: "모스크바의 여명", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 61,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/794939/thumbnail/thumbnail_IMAG21_78e1e689-f14c-4fe4-a9fa-27953c051124.jpg",
        name: "루크 비셸 따라잡기", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 62,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/784107/thumbnail/thumbnail_IMAG21_3702303471227254580.jpg",
        name: "달로 만든 아이", // 웹툰 제목
        rend: 0, //대여 쿠키 개수
        have: 0, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 63,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/796368/thumbnail/thumbnail_IMAG21_3619035252408070451.jpg",
        name: "세번째 로망스", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 64,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/788170/thumbnail/thumbnail_IMAG21_7221576313225962034.jpg",
        name: "나만의 고막남친", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 65,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/791062/thumbnail/thumbnail_IMAG21_3688502388424061793.jpg",
        name: "매지컬 급식:암살법사", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 66,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/792780/thumbnail/thumbnail_IMAG21_3617014355049527398.jpg",
        name: "경비실에서 안내방송 드립니다", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 67,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/794156/thumbnail/thumbnail_IMAG21_759dc2a2-7315-4c34-a980-36e176614795.jpeg",
        name: "지옥연애환담", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 68,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/783525/thumbnail/thumbnail_IMAG21_7221069237323903332.jpg",
        name: "악녀 18세 공략기", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 69,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/776256/thumbnail/thumbnail_IMAG21_c6cc43e3-04e0-4620-88d7-688d4c06d19f.jpg",
        name: "역주행!", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 70,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/794942/thumbnail/thumbnail_IMAG21_706ebfb9-6fa3-4834-bdd3-afd8e5dc8601.jpg",
        name: "모노마니아", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 71,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/785749/thumbnail/thumbnail_IMAG21_e9bd8985-7e0d-4ee0-93f3-1d9402a2608c.jpg",
        name: "슈퍼스타 천대리", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 72,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/769801/thumbnail/thumbnail_IMAG21_7305454743905843000.jpg",
        name: "사막에 핀 달", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 73,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/793662/thumbnail/thumbnail_IMAG21_97fb792e-54d4-47c9-8bf1-2b749f14050c.jpg",
        name: "흔들리는 세계로부터", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 74,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/792317/thumbnail/thumbnail_IMAG21_4579e6e8-718f-469f-a1de-60817cc56a3c.jpg",
        name: "결혼공략", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 75,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/789591/thumbnail/thumbnail_IMAG21_7005123160025948516.jpg",
        name: "디나운스", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 76,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/764623/thumbnail/thumbnail_IMAG21_7305232428546929716.jpg",
        name: "오로지 오로라", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 77,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/786979/thumbnail/thumbnail_IMAG21_495b3195-2185-458e-a07b-4af0f4ff6532.jpg",
        name: "별을 쫓는 소년들", // 웹툰 제목
        rend: 0, //대여 쿠키 개수
        have: 0, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 78,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/785253/thumbnail/thumbnail_IMAG21_a9f2b315-32d8-48bf-afbe-4ccdef9cd8d7.jpg",
        name: "이별 후 사내 결혼", // 웹툰 제목
        rend: 0, //대여 쿠키 개수
        have: 0, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
    ],
    Tue: [
      {
        key: 0,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/783053/thumbnail/thumbnail_IMAG21_d7732f14-26da-4e35-8762-660cc87b53f1.jpg",
        name: "김부장", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 1,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/790713/thumbnail/thumbnail_IMAG21_3919364435331003700.jpg",
        name: "대학원 탈출일지", // 웹툰 제목
        rend: 1, //대여 쿠키 개수
        have: 2, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 2,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/784248/thumbnail/thumbnail_IMAG21_7220453497877586488.jpg",
        name: "내가 키운 S급들", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 3,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/703846/thumbnail/thumbnail_IMAG21_3617626786448291892.jpg",
        name: "여신강림", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 4,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/796152/thumbnail/thumbnail_IMAG21_26b9c1d8-ca2d-4fc7-87ea-a3334634236a.jpg",
        name: "미루는 강쥐", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 5,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/773522/thumbnail/thumbnail_IMAG21_3832625290197426742.jpg",
        name: "1을 줄게", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 6,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/789979/thumbnail/thumbnail_IMAG21_3918466168707821881.jpg",
        name: "멸망 이후의 세계", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 7,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/738487/thumbnail/thumbnail_IMAG21_66eac5ec-876b-469e-ab05-81261fddde8d.jpg",
        name: "하루만 네가 되고 싶어", // 웹툰 제목
        rend: 0, //대여 쿠키 개수
        have: 0, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 8,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/738174/thumbnail/thumbnail_IMAG21_7018354682806481716.jpg",
        name: "중증외상센터 : 골든 아워", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 9,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/773459/thumbnail/thumbnail_IMAG21_9824d244-dfbd-4edb-8d4f-d7d4963dc2e8.jpg",
        name: "용사가 돌아왔다", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 10,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/711422/thumbnail/thumbnail_IMAG21_4dedc562-d0fe-4e02-8882-c8f51930af0c.jpg",
        name: "삼국지톡", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 11,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/719508/thumbnail/thumbnail_IMAG21_4049636999763944505.jpg",
        name: "헬58", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 12,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/793283/thumbnail/thumbnail_IMAG21_4136055320174945841.jpg",
        name: "악몽의 형상", // 웹툰 제목
        rend: 1, //대여 쿠키 개수
        have: 2, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 13,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/774358/thumbnail/thumbnail_IMAG21_82c2edef-2f7f-4376-97e1-ff302b35e627.jpg",
        name: "천마는 평범하게 살 수 없다", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 14,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/721433/thumbnail/thumbnail_IMAG21_c907f727-e522-4517-952e-398ea95d2efb.jpg",
        name: "집이 없어", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 15,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/702608/thumbnail/thumbnail_IMAG21_7005692479348499809.jpg",
        name: "랜덤채팅의 그녀!", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 16,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/783877/thumbnail/thumbnail_IMAG21_3904965231037146418.jpg",
        name: "하북팽가 막내아들", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 17,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/798326/thumbnail/thumbnail_IMAG21_f29b4498-410e-483e-b392-5111ed62b3a8.jpg",
        name: "시체기사 군터", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 18,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/757904/thumbnail/thumbnail_IMAG21_f3e09476-b052-4599-b619-4b2aba154143.jpg",
        name: "호랑이 들어와요", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 19,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/800506/thumbnail/thumbnail_IMAG21_21640049-34da-44e5-82d7-bbb7aca3a3f8.jpg",
        name: "웅크", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 20,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/795658/thumbnail/thumbnail_IMAG21_9771c54c-af6a-477c-9243-2b3bb784aae6.jpg",
        name: "초인의 게임", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 21,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/732988/thumbnail/thumbnail_IMAG21_3763100953716666469.jpg",
        name: "올가미", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 22,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/800726/thumbnail/thumbnail_IMAG21_f8d6b47c-3af0-49ef-9aa7-3b6ea28e4aa8.jpg",
        name: "사표내고 이계에서 힐링합니다", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 23,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/698918/thumbnail/thumbnail_IMAG21_3689346629442483042.jpg",
        name: "원주민 공포만화", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 24,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/616239/thumbnail/thumbnail_IMAG21_7c320dd0-7f6e-4645-b82b-e46752ed7375.jpg",
        name: "윌유메리미", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 25,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/783549/thumbnail/thumbnail_IMAG21_3847261774335533621.jpg",
        name: "100", // 웹툰 제목
        rend: 0, //대여 쿠키 개수
        have: 0, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 26,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/778963/thumbnail/thumbnail_IMAG21_3918805901429191730.jpg",
        name: "덴큐", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 27,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/770068/thumbnail/thumbnail_IMAG21_eb437c0f-885d-4758-a36d-d424d270975c.jpg",
        name: "나타나주세요!", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 28,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/785703/thumbnail/thumbnail_IMAG21_020a4de1-984b-4343-8735-55970b9fda68.jpg",
        name: "애옹식당", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 29,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/799250/thumbnail/thumbnail_IMAG21_cc84475a-58c8-4e66-a26b-2a08be6a1f24.jpg",
        name: "헥토파스칼", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 30,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/798101/thumbnail/thumbnail_IMAG21_766e3761-228a-4c04-97b8-6f0ef13cf35b.jpg",
        name: "왕게임", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 31,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/789478/thumbnail/thumbnail_IMAG21_7305513022303330866.jpg",
        name: "늑대처럼 홀로", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 32,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/741449/thumbnail/thumbnail_IMAG21_7cc5de94-a52d-473c-bdb7-f5c24188fac7.jpg",
        name: "용왕님의 셰프가 되었습니다", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 33,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/740034/thumbnail/thumbnail_IMAG21_4122589587559375417.jpg",
        name: "견우와 선녀", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 34,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/785583/thumbnail/thumbnail_IMAG21_6a3bd891-ba00-4f4c-a59e-a6a8eb666338.jpg",
        name: "택배 왔습니다", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 35,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/797582/thumbnail/thumbnail_IMAG21_88ddda2c-0207-48e7-a2ff-071f1700df2e.jpeg",
        name: "로잘린 보가트", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 36,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/400739/thumbnail/thumbnail_IMAG21_b5046846-5af7-48a9-9b20-b0b07cf0c904.jpeg",
        name: "에이머", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 37,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/753839/thumbnail/thumbnail_IMAG21_3835153067459896165.jpg",
        name: "빅맨", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 38,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/654138/thumbnail/thumbnail_IMAG21_3559587746721839161.jpg",
        name: "은주의 방 2~3부", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 39,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/765156/thumbnail/thumbnail_IMAG21_09f17695-7f1a-43c1-9515-3debf026e2ed.jpg",
        name: "빌런투킬", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 40,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/794965/thumbnail/thumbnail_IMAG21_63390970-e54c-497e-8f6d-e5cbaf78d490.jpg",
        name: "사공은주", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 41,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/753853/thumbnail/thumbnail_IMAG21_4063199265205663589.jpg",
        name: "플레이, 플리", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 42,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/767908/thumbnail/thumbnail_IMAG21_133544d1-6655-47ac-99ce-00da2f3cdc17.jpg",
        name: "아이즈", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 43,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/786883/thumbnail/thumbnail_IMAG21_e9ab69a2-367a-411a-82f5-80f6f83e7c9c.jpg",
        name: "또 다른 사랑", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 44,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/791126/thumbnail/thumbnail_IMAG21_b3c5cfcc-aba4-4ba6-b010-8c740c2cbc85.jpg",
        name: "내남친 킹카만들기", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 45,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/676695/thumbnail/thumbnail_IMAG21_2772f374-0d51-4285-a83c-f06a476cbadc.jpg",
        name: "제로게임", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 46,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/762073/thumbnail/thumbnail_IMAG21_7306023187142227507.jpg",
        name: "나의 플랫메이트", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 47,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/777226/thumbnail/thumbnail_IMAG21_b1da0571-8786-4cb7-a44a-7fdf07c43ed0.",
        name: "벽간소음", // 웹툰 제목
        rend: 0, //대여 쿠키 개수
        have: 0, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 48,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/797413/thumbnail/thumbnail_IMAG21_73867e77-dbde-41d6-b66f-2927c7f9a4db.jpg",
        name: "여우자매", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 49,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/764622/thumbnail/thumbnail_IMAG21_6b14f40c-5fb1-4844-ad03-39a80947f4f9.jpg",
        name: "풋내기들", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 50,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/761601/thumbnail/thumbnail_IMAG21_7075830540882962020.jpg",
        name: "열녀박씨 계약결혼뎐", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 51,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/789029/thumbnail/thumbnail_IMAG21_7365127438884483171.jpg",
        name: "한입만!", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 52,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/796618/thumbnail/thumbnail_IMAG21_7089010206279284020.jpg",
        name: "1331", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 53,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/798100/thumbnail/thumbnail_IMAG21_534781c7-b360-4d30-be0a-034fbff24682.jpg",
        name: "쿠쿠쿠쿠", // 웹툰 제목
        rend: 1, //대여 쿠키 개수
        have: 2, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 54,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/790776/thumbnail/thumbnail_IMAG21_683f454e-5f7a-416b-936b-8a06cb1c3cae.jpeg",
        name: "붉은 이정표", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 55,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/800400/thumbnail/thumbnail_IMAG21_bb74c497-7fa9-48c2-9f4f-4438317ff0c8.jpg",
        name: "AI 유하", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 56,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/773793/thumbnail/thumbnail_IMAG21_3688508805038170930.jpg",
        name: "필리아로제 - 가시왕관의 예언", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 57,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/789682/thumbnail/thumbnail_IMAG21_3919650523910923320.jpg",
        name: "짝사랑의 마침표", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 58,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/794105/thumbnail/thumbnail_IMAG21_3472385699374982200.jpg",
        name: "주인님을 잡아먹는 방법", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 59,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/800799/thumbnail/thumbnail_IMAG21_499f2e2e-bb02-4676-b9e6-958213a6efff.jpeg",
        name: "테러사이트", // 웹툰 제목
        rend: 0, //대여 쿠키 개수
        have: 0, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 60,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/797259/thumbnail/thumbnail_IMAG21_4135202076969481273.jpg",
        name: "이 결혼, 새로고침", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 61,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/771063/thumbnail/thumbnail_IMAG21_3835156151229506357.jpg",
        name: "나는 어디에나 있다", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 62,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/785726/thumbnail/thumbnail_IMAG21_7076342905433045350.jpg",
        name: "이븐 모어", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 63,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/770477/thumbnail/thumbnail_IMAG21_352e4a32-9adc-4954-a7b0-ce0ff6cd5243.jpeg",
        name: "그녀석 정복기", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 64,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/783518/thumbnail/thumbnail_IMAG21_7147551697234442294.jpg",
        name: "그 남주와 이별하는 방법", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 65,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/797760/thumbnail/thumbnail_IMAG21_23126df1-63b2-4998-8a77-99bfa3e598cc.jpg",
        name: "마침내 사랑이에요 마왕님!", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 66,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/766966/thumbnail/thumbnail_IMAG21_7077515877376537444.jpg",
        name: "태시트", // 웹툰 제목
        rend: 0, //대여 쿠키 개수
        have: 0, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 67,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/774022/thumbnail/thumbnail_IMAG21_7005408822528784433.jpg",
        name: "NG불가", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 68,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/769551/thumbnail/thumbnail_IMAG21_3617628762170143538.jpg",
        name: "대신 심부름을 해다오", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 69,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/797943/thumbnail/thumbnail_IMAG21_6733cb7f-79aa-4ecd-8a22-ed34a17684d8.jpg",
        name: "원수가 나를 유혹할 때", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 70,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/778228/thumbnail/thumbnail_IMAG21_4051047668904440884.jpg",
        name: "교환학생", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 71,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/770030/thumbnail/thumbnail_IMAG21_3760841466767095601.jpg",
        name: "급식러너", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 72,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/771018/thumbnail/thumbnail_IMAG21_3762818380117075513.jpg",
        name: "찐:종합게임동아리", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 73,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/795649/thumbnail/thumbnail_IMAG21_3761407509066233649.jpg",
        name: "달이 사라진 밤", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 74,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/790705/thumbnail/thumbnail_IMAG21_4121184407407309921.jpg",
        name: "잿빛오름", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 75,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/797258/thumbnail/thumbnail_IMAG21_7293970135255232568.jpg",
        name: "너의 순정, 나의 순정", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 76,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/769987/thumbnail/thumbnail_IMAG21_3833182549299442786.jpg",
        name: "하나in세인", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 77,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/794671/thumbnail/thumbnail_IMAG21_02d30407-901e-407d-9fdf-92ab5968c031.jpg",
        name: "마녀이야기", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
    ],
    Wed: [
      {
        key: 0,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/783769/thumbnail/thumbnail_IMAG21_fc14e4e2-e62f-4d77-8f46-9fb05cffa77a.jpeg",
        name: "내 남편과 결혼해줘", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 1,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/747269/thumbnail/thumbnail_IMAG21_3546074950629798755.jpg",
        name: "전지적 독자 시점", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 2,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/670143/thumbnail/thumbnail_IMAG21_12d5d293-d54d-4022-8e00-c97c5779c701.jpg",
        name: "헬퍼2 : 킬베로스", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 3,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/784255/thumbnail/thumbnail_IMAG21_7003999451307455078.jpg",
        name: "먹는 인생", // 웹툰 제목
        rend: 1, //대여 쿠키 개수
        have: 2, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 4,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/701535/thumbnail/thumbnail_IMAG21_2abe5b1a-9104-417f-9995-0db15c6db7be.jpg",
        name: "격기3반", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 5,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/717481/thumbnail/thumbnail_IMAG21_3545800975505057126.jpg",
        name: "일렉시드", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 6,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/791253/thumbnail/thumbnail_IMAG21_7018352273394119991.jpg",
        name: "비즈니스 여친", // 웹툰 제목
        rend: 0, //대여 쿠키 개수
        have: 0, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 7,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/784417/thumbnail/thumbnail_IMAG21_f997ffe9-465a-4be8-a0bb-b5d0ef5cedea.jpg",
        name: "무림서부", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 8,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/801446/thumbnail/thumbnail_IMAG21_1b992e49-334d-47ee-849f-89097b998f07.jpg",
        name: "지금 우리 연구소는", // 웹툰 제목
        rend: 0, //대여 쿠키 개수
        have: 0, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 9,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/783056/thumbnail/thumbnail_IMAG21_3775197790073796145.jpg",
        name: "여고생 드래곤", // 웹툰 제목
        rend: 1, //대여 쿠키 개수
        have: 2, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 10,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/774862/thumbnail/thumbnail_IMAG21_cc92b18e-50b6-426b-bcf7-e55097b4c80b.jpg",
        name: "조조코믹스", // 웹툰 제목
        rend: 0, //대여 쿠키 개수
        have: 0, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 11,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/750184/thumbnail/thumbnail_IMAG21_4049077335359959091.jpg",
        name: "나쁜사람", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 12,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/738694/thumbnail/thumbnail_IMAG21_7366031057188643120.jpg",
        name: "튜토리얼 탑의 고인물", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 13,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/783523/thumbnail/thumbnail_IMAG21_cc413d42-89ab-4c7d-a28c-0f698acb169b.jpg",
        name: "내가 죽기로 결심한 것은", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 14,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/758662/thumbnail/thumbnail_IMAG21_33e16ce6-4ee6-4428-8f7b-450eccd17228.jpg",
        name: "급식아빠", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 15,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/800312/thumbnail/thumbnail_IMAG21_90520e55-609b-4015-8260-974081bce964.jpg",
        name: "이십팔세기 광팬", // 웹툰 제목
        rend: 1, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 16,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/667573/thumbnail/thumbnail_IMAG21_095997c8-effc-4722-8157-baeaaa439930.jpg",
        name: "연놈", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 17,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/750826/thumbnail/thumbnail_IMAG21_8bf7d36d-d865-4df0-b76f-f72f288bb2cd.jpg",
        name: "빌드업", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 18,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/748535/thumbnail/thumbnail_IMAG21_52e1cbaa-a850-4bb2-9c5b-467e3141cd98.jpg",
        name: "마른 가지에 바람처럼", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 19,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/742105/thumbnail/thumbnail_IMAG21_a3860cc1-f927-4031-92fd-8d89b9801127.jpg",
        name: "미래의 골동품 가게", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 20,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/795542/thumbnail/thumbnail_IMAG21_3703756833080816441.jpg",
        name: "칼에 취한 밤을 걷다", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 21,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/748536/thumbnail/thumbnail_IMAG21_f5ccf206-ed7d-42ae-9452-c11cb188474b.jpg",
        name: "사상최강", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 22,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/799267/thumbnail/thumbnail_IMAG21_f522ff4f-4f7c-40bf-b9f2-f58d049d4a82.jpg",
        name: "안녕, 나의 수집", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 23,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/790404/thumbnail/thumbnail_IMAG21_7003768369134724150.jpg",
        name: "쓰레기는 쓰레기통에!", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 24,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/728126/thumbnail/thumbnail_IMAG21_7148391724836479793.jpg",
        name: "고심무쌍", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 25,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/710747/thumbnail/thumbnail_IMAG21_3545518418129085537.jpg",
        name: "세상은 돈과 권력", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 26,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/789434/thumbnail/thumbnail_IMAG21_3558519244808479285.jpg",
        name: "베스트 프렌드", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 27,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/795333/thumbnail/thumbnail_IMAG21_ed9c8b02-6fe0-405f-b58c-d37be88e18d2.jpg",
        name: "기묘한 만화", // 웹툰 제목
        rend: 0, //대여 쿠키 개수
        have: 0, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 28,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/797443/thumbnail/thumbnail_IMAG21_4122254035508356659.jpg",
        name: "운명을 보는 회사원", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 29,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/801593/thumbnail/thumbnail_IMAG21_f551544b-d49b-44b3-8360-fb2594f889ee.jpg",
        name: "사내고충처리반", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 30,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/730425/thumbnail/thumbnail_IMAG21_3835209134721021750.jpg",
        name: "판타지 여동생!", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 31,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/793887/thumbnail/thumbnail_IMAG21_aba27540-0f44-43a1-8faf-2c08a18de138.jpg",
        name: "물고기로 살아남기", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 32,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/725829/thumbnail/thumbnail_IMAG21_7147552783858085986.jpg",
        name: "아도나이", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 33,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/671421/thumbnail/thumbnail_IMAG21_7643171d-08fb-40a8-9da1-813a3b7e784f.jpg",
        name: "언덕 위의 제임스", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 34,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/801950/thumbnail/thumbnail_IMAG21_6be7579d-98b8-420f-b430-8ffdbd36ce2c.jpg",
        name: "고교흥신소", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 35,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/800390/thumbnail/thumbnail_IMAG21_323eb281-f0b7-4321-8df6-74c9b6b16f61.jpg",
        name: "하얀 사자의 비밀 신부", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 36,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/771718/thumbnail/thumbnail_IMAG21_f4894c99-9273-496d-9684-a1f66f420fa3.jpg",
        name: "수요웹툰의 나강림", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 37,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/755668/thumbnail/thumbnail_IMAG21_4051332219785065524.jpg",
        name: "마녀와 용의 신혼일기", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 38,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/602916/thumbnail/thumbnail_IMAG21_43cf1d1e-d265-464d-83db-f92dbc3fcf43.jpg",
        name: "칼부림", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 39,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/735979/thumbnail/thumbnail_IMAG21_bd4ebc95-381d-44e8-b149-da438aea8e26.jpg",
        name: "얼굴천재", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 40,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/783861/thumbnail/thumbnail_IMAG21_3546078249181721699.jpg",
        name: "헤어지면 죽음", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 41,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/800504/thumbnail/thumbnail_IMAG21_de7f2718-2ed9-4688-890d-fc73b9179c1d.jpg",
        name: "그 남자의 은밀한 하루", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 42,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/765158/thumbnail/thumbnail_IMAG21_7378132256276230709.jpg",
        name: "괴물공작의 딸", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 43,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/795330/thumbnail/thumbnail_IMAG21_76dc830f-e64f-4095-a3f6-712ea83bcc7d.jpg",
        name: "선배는 나빠요!", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 44,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/788167/thumbnail/thumbnail_IMAG21_92b8e3ad-1533-4dbf-9f33-29545f7d0aba.jpg",
        name: "가짜 동맹", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 45,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/796466/thumbnail/thumbnail_IMAG21_2cf2568c-a1c6-4c4f-9a21-94b7c8136893.jpg",
        name: "영웅&마왕&악당", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 46,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/750558/thumbnail/thumbnail_IMAG21_7148167415155931235.jpg",
        name: "로어 올림푸스", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 47,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/760002/thumbnail/thumbnail_IMAG21_7017793712846615395.jpg",
        name: "반귀", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 48,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/760001/thumbnail/thumbnail_IMAG21_c62cf78d-b346-49cf-b847-3062fc51500b.jpg",
        name: "하렘의 남자들", // 웹툰 제목
        rend: 0, //대여 쿠키 개수
        have: 0, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 49,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/793388/thumbnail/thumbnail_IMAG21_3481ec05-76fa-4302-9947-7931c6fb8d09.jpg",
        name: "주부 육성중", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 50,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/789652/thumbnail/thumbnail_IMAG21_3a47a8d4-3890-4e1a-aed1-0d5f73dc398d.jpg",
        name: "인과관계", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 51,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/796062/thumbnail/thumbnail_IMAG21_dc14b7fc-c61e-4fdf-9e6c-0108db4a26db.jpg",
        name: "좀간", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 52,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/780253/thumbnail/thumbnail_IMAG21_3977352902793638452.jpg",
        name: "두 번 사는 프로듀서", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 53,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/745589/thumbnail/thumbnail_IMAG21_6bf46fde-79f2-431a-b4e6-cd2183bb015a.jpg",
        name: "범이올시다!", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 54,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/797105/thumbnail/thumbnail_IMAG21_adfead7c-d54b-4769-8c7f-8d179a38562d.jpg",
        name: "홀리데이", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 55,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/792654/thumbnail/thumbnail_IMAG21_dcdba2c7-97f3-4232-bb26-d8e01b715b18.jpg",
        name: "밀행", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 56,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/791140/thumbnail/thumbnail_IMAG21_0d237cea-8dbb-4684-9735-f5bb1e78deec.jpg",
        name: "메모리얼", // 웹툰 제목
        rend: 0, //대여 쿠키 개수
        have: 0, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 57,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/797115/thumbnail/thumbnail_IMAG21_f23ac6eb-318d-4b13-ace0-ddcf76563967.jpg",
        name: "옆집남자 친구", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 58,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/799467/thumbnail/thumbnail_IMAG21_12c13949-64c3-4502-890f-b837cb3cd6f4.jpg",
        name: "내겐 너무 소란한 결혼", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 59,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/783596/thumbnail/thumbnail_IMAG21_d099edbf-d6bd-4acf-8d38-d871eac8e41b.jpg",
        name: "그림자의 밤", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 60,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/786189/thumbnail/thumbnail_IMAG21_3690476939492538673.jpg",
        name: "잿빛도 색이다", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 61,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/783532/thumbnail/thumbnail_IMAG21_de631a75-706a-49e0-848a-0251e1dd11f5.jpg",
        name: "안미운 우리들", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 62,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/793696/thumbnail/thumbnail_IMAG21_f5cd80d7-c072-49f4-b2dd-05421a7042a6.jpg",
        name: "재생존경쟁", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 63,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/774039/thumbnail/thumbnail_IMAG21_bc64b2bb-9e8f-45aa-94e5-e17009af9575.jpg",
        name: "나의 계절", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 64,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/773187/thumbnail/thumbnail_IMAG21_7148673005754004577.jpg",
        name: "사랑과 평가의 온달!", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 65,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/783534/thumbnail/thumbnail_IMAG21_1170108c-e449-483f-b065-0ba6e37a6a1f.jpg",
        name: "구사일생 로맨스", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 66,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/801809/thumbnail/thumbnail_IMAG21_6764cc3d-eca6-4875-9e34-7c3b50c78bf3.jpg",
        name: "연애고수", // 웹툰 제목
        rend: 0, //대여 쿠키 개수
        have: 0, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 67,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/791892/thumbnail/thumbnail_IMAG21_3834359001091564337.jpg",
        name: "멸종위기종인간", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 68,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/772729/thumbnail/thumbnail_IMAG21_a3b95562-c1ec-4d31-a2a4-77c177731b29.jpg",
        name: "반짝반짝 작은 눈", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 69,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/799016/thumbnail/thumbnail_IMAG21_b2bbe3c1-6bf8-4e70-8c48-64fb282c6be7.jpg",
        name: "어느 백작 영애의 이중생활", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 70,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/783971/thumbnail/thumbnail_IMAG21_3631653028771358256.jpg",
        name: "이별학", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 71,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/794668/thumbnail/thumbnail_IMAG21_3906699375773574244.jpg",
        name: "클로닝", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 72,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/774853/thumbnail/thumbnail_IMAG21_24cf5cf4-65ae-41d6-8045-d17ca05c36d7.jpg",
        name: "무용과 남학생", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 73,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/801824/thumbnail/thumbnail_IMAG21_6146d366-35d8-4f43-9987-b84e9e679ebd.jpeg",
        name: "컨트롤", // 웹툰 제목
        rend: 0, //대여 쿠키 개수
        have: 0, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 74,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/783526/thumbnail/thumbnail_IMAG21_7291949232953635171.jpg",
        name: "혁명 뒤 공주는", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 75,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/786498/thumbnail/thumbnail_IMAG21_b969b1f0-3726-4713-9706-bb3794539931.jpg",
        name: "하지만 너는 2D잖아", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 76,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/791632/thumbnail/thumbnail_IMAG21_0e5ee34e-898a-4106-8652-35525f24afa9.jpg",
        name: "낙원의 이론", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 77,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/762786/thumbnail/thumbnail_IMAG21_7364010121194779187.jpg",
        name: "해귀", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 78,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/783106/thumbnail/thumbnail_IMAG21_2d29a43b-0265-4ab7-8dca-2b8bfd656ac1.jpg",
        name: "수호하는 너에게", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 79,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/794417/thumbnail/thumbnail_IMAG21_f7e759de-b5b4-4b40-9bf7-86c0666beb54.jpg",
        name: "프로듀스 온리원", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 80,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/793113/thumbnail/thumbnail_IMAG21_7076392177348327014.jpg",
        name: "우리 은하", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 81,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/792372/thumbnail/thumbnail_IMAG21_73240292-aa0a-4bd0-a87f-7e17993c4011.jpg",
        name: "산의 시간", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 82,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/780137/thumbnail/thumbnail_IMAG21_7077797366062998579.jpg",
        name: "오직, 밝은 미래", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 83,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/783595/thumbnail/thumbnail_IMAG21_3847254065607488822.jpg",
        name: "필생기", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 84,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/795537/thumbnail/thumbnail_IMAG21_3991990516407743330.jpg",
        name: "이 짝사랑은 억울하다!", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 85,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/792120/thumbnail/thumbnail_IMAG21_4121465895319253348.jpg",
        name: "아이돌의 비밀 스터디", // 웹툰 제목
        rend: 0, //대여 쿠키 개수
        have: 0, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
    ],
    Thu: [
      {
        key: 0,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/747271/thumbnail/thumbnail_IMAG21_701ae78e-794c-417f-b5a8-3adf6f9456aa.jpg",
        name: "나노마신", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 1,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/570503/thumbnail/thumbnail_IMAG21_640b99c5-2790-434d-ae3e-95438bf88430.jpeg",
        name: "연애혁명", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 3,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/748105/thumbnail/thumbnail_IMAG21_87f84b6f-a211-4940-8684-f4b8731357eb.jpg",
        name: "독립일기", // 웹툰 제목
        rend: 0, //대여 쿠키 개수
        have: 0, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 4,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/797410/thumbnail/thumbnail_IMAG21_9852442e-217e-4ec7-92a7-21c0ada85dc7.jpg",
        name: "남편을 죽여줘요", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 5,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/776255/thumbnail/thumbnail_IMAG21_4121980471072928565.jpg",
        name: "천마육성", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 6,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/798173/thumbnail/thumbnail_IMAG21_edf849c2-293c-4ffd-ac48-1205ea2d0187.jpg",
        name: "이상한 변호사 우영우", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 7,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/783888/thumbnail/thumbnail_IMAG21_56cdafe8-11a4-40b7-90a7-2e72b0b20642.jpg",
        name: "현실퀘스트", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 8,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/795643/thumbnail/thumbnail_IMAG21_bf51fa0f-e374-49f8-973d-c17c5385bbef.jpg",
        name: "호랑신랑뎐", // 웹툰 제목
        rend: 1, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 9,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/780170/thumbnail/thumbnail_IMAG21_c8b82359-da45-480c-95fd-aa9ae794d6be.jpg",
        name: "나 혼자 네크로맨서", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 10,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/746857/thumbnail/thumbnail_IMAG21_fb7d7fcd-19f1-49eb-9cc8-aae9622cdd04.jpg",
        name: "무사만리행", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 11,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/796827/thumbnail/thumbnail_IMAG21_3990814210026202423.jpg",
        name: "회귀한 천재 헌터의 슬기로운 청소생활", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 12,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/794155/thumbnail/thumbnail_IMAG21_ff82104f-a8ce-4bf7-9126-a0caf2e1bb1d.jpeg",
        name: "버려진 나의 최애를 위하여", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 13,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/800770/thumbnail/thumbnail_IMAG21_d2e1e7ee-fc83-4030-a1e7-200378bc088f.jpg",
        name: "재벌집 막내아들", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 14,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/756137/thumbnail/thumbnail_IMAG21_d6dc13d4-d2fa-45f8-a199-7a528bdca7d6.jpg",
        name: "노답소녀", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 15,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/748831/thumbnail/thumbnail_IMAG21_b08f61b4-c656-4e16-8d07-c3ea3a64c77c.jpg",
        name: "별을 삼킨 너에게", // 웹툰 제목
        rend: 0, //대여 쿠키 개수
        have: 0, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 16,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/131385/thumbnail/thumbnail_IMAG21_3762247544603697764.jpg",
        name: "쿠베라", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 17,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/797468/thumbnail/thumbnail_IMAG21_3545287507131773284.jpg",
        name: "누나! 나 무서워", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 18,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/758439/thumbnail/thumbnail_IMAG21_3834868071364834100.jpg",
        name: "던전 씹어먹는 아티팩트", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 19,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/741825/thumbnail/thumbnail_IMAG21_c830f1df-cd0e-4b7f-aa4e-84d59c88a892.jpg",
        name: "꽃만 키우는데 너무강함", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 20,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/801505/thumbnail/thumbnail_IMAG21_893e0926-523f-4bc1-b7a6-e30af1ec3c6e.jpg",
        name: "뮤즈 온 유명", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 21,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/701700/thumbnail/thumbnail_IMAG21_14be195a-a8e9-4324-8d48-226eea667453.jpg",
        name: "트롤트랩", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 22,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/570506/thumbnail/thumbnail_IMAG21_3630857206429464627.jpg",
        name: "최강전설 강해효", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 23,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/800304/thumbnail/thumbnail_IMAG21_a97d059c-7eae-4e7c-afa0-74a6d2ac4c15.jpg",
        name: "황제사냥", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 24,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/785727/thumbnail/thumbnail_IMAG21_1f595054-f9e1-4abd-84cd-9ca648a428d3.jpg",
        name: "국세청 망나니", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 25,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/775631/thumbnail/thumbnail_IMAG21_4063147592470967090.jpg",
        name: "완벽한 결혼의 정석", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 26,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/797731/thumbnail/thumbnail_IMAG21_3d2b5b5a-ffbb-4049-8f85-8caebfcf4243.jpg",
        name: "순정빌런", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 27,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/798331/thumbnail/thumbnail_IMAG21_846e6d29-da15-40cb-9d4f-1c7f5b1a6faa.jpg",
        name: "규격 외 혈통 천재", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 28,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/758659/thumbnail/thumbnail_IMAG21_3619034152809621089.jpg",
        name: "오빠세끼", // 웹툰 제목
        rend: 0, //대여 쿠키 개수
        have: 0, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 29,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/776668/thumbnail/thumbnail_IMAG21_7148395014831681846.jpg",
        name: "마왕까지 한 걸음", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 30,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/783117/thumbnail/thumbnail_IMAG21_7364620379494637924.jpg",
        name: "만능잡캐", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 31,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/776542/thumbnail/thumbnail_IMAG21_ca2e314b-448b-4383-980a-b6c50b1c6ca4.jpg",
        name: "네가 죽기를 바랄 때가 있었다", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 32,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/794210/thumbnail/thumbnail_IMAG21_7234016187832755042.jpg",
        name: "죄송한데 주인공이세요?", // 웹툰 제목
        rend: 0, //대여 쿠키 개수
        have: 0, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 33,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/800007/thumbnail/thumbnail_IMAG21_94598f8a-9416-450c-b729-105a30afb676.jpg",
        name: "관계중독", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 34,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/729964/thumbnail/thumbnail_IMAG21_7005129546507903842.jpg",
        name: "만물의 영장", // 웹툰 제목
        rend: 0, //대여 쿠키 개수
        have: 0, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 35,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/797937/thumbnail/thumbnail_IMAG21_3641098c-77e2-46ff-b2d8-3b87d9417e09.jpg",
        name: "순수한 동거생활", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 36,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/796242/thumbnail/thumbnail_IMAG21_3558519051501779250.jpg",
        name: "위대한 겸상", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 37,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/780191/thumbnail/thumbnail_IMAG21_8868da32-6304-45c5-8613-6c3954891a14.jpg",
        name: "선남친 후연애", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 38,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/670145/thumbnail/thumbnail_IMAG21_3905854744587100517.jpg",
        name: "킬더킹", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 39,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/794980/thumbnail/thumbnail_IMAG21_e3165fc4-8753-4b64-99e1-8fc9bd9ce29d.jpg",
        name: "개와 사람의 시간", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 40,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/792280/thumbnail/thumbnail_IMAG21_ef08524c-1c6d-4941-a532-44cb05261730.jpg",
        name: "아인슈페너", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 41,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/742351/thumbnail/thumbnail_IMAG21_08878258-24e5-4c12-93ce-801ade33447f.jpg",
        name: "소녀180", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 42,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/790239/thumbnail/thumbnail_IMAG21_f53ea3ad-530a-4c7f-9935-967f27a8f3f0.jpg",
        name: "가족같은 XX", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 43,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/799165/thumbnail/thumbnail_IMAG21_e4cf53a5-8d69-435d-95eb-a68a0128580e.jpg",
        name: "나의 불편한 상사", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 44,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/796302/thumbnail/thumbnail_IMAG21_01268324-46ff-4840-bff5-aee0b39ce4ef.jpg",
        name: "베니루 BAENIRU", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 45,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/797417/thumbnail/thumbnail_IMAG21_3689123419153130802.jpg",
        name: "천재의 게임방송", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 46,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/794651/thumbnail/thumbnail_IMAG21_7148957749163931702.jpg",
        name: "두 번째 딸로 태어났습니다", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 47,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/769664/thumbnail/thumbnail_IMAG21_3905290905642493491.jpg",
        name: "온에어", // 웹툰 제목
        rend: 0, //대여 쿠키 개수
        have: 0, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 48,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/793279/thumbnail/thumbnail_IMAG21_ce777385-70af-40cd-b02a-77157c141e9f.jpeg",
        name: "1학년 9반", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 49,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/791258/thumbnail/thumbnail_IMAG21_7161908888893337954.jpg",
        name: "부캐인생", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 50,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/783862/thumbnail/thumbnail_IMAG21_b6f9ba07-4dfb-40cc-ada9-f397489e7b6d.jpg",
        name: "마녀의 심판은 꽃이 된다", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 51,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/765322/thumbnail/thumbnail_IMAG21_47daec60-5392-4de5-889e-2a8e9d22fde0.jpg",
        name: "그 황제가 시곗바늘을 되돌린 사연", // 웹툰 제목
        rend: 0, //대여 쿠키 개수
        have: 0, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 52,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/771912/thumbnail/thumbnail_IMAG21_f5c91d16-dbed-423a-be2a-ea025ef95ead.jpg",
        name: "THE 런웨이", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 53,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/790453/thumbnail/thumbnail_IMAG21_49710bdb-baba-4a02-a16e-fbf2bcbc0d2b.jpg",
        name: "갓트", // 웹툰 제목
        rend: 0, //대여 쿠키 개수
        have: 0, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 54,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/762035/thumbnail/thumbnail_IMAG21_4123154521771304291.jpg",
        name: "달의 요람", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 55,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/784506/thumbnail/thumbnail_IMAG21_4134924793763147832.jpg",
        name: "환상연가", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 56,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/790409/thumbnail/thumbnail_IMAG21_7293406119378499938.jpg",
        name: "진짜 진짜 이혼해", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 57,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/790840/thumbnail/thumbnail_IMAG21_985b42dd-93fd-46fc-8e06-7cd2c32a03ac.jpg",
        name: "오, 친애하는 숙적", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 58,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/785701/thumbnail/thumbnail_IMAG21_7148394799227549745.jpg",
        name: "가상&RPG", // 웹툰 제목
        rend: 0, //대여 쿠키 개수
        have: 0, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 59,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/796324/thumbnail/thumbnail_IMAG21_175639ba-4f7b-499e-ba95-86235b11b2db.jpg",
        name: "황궁에 핀 꽃은, 미쳤다", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 60,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/783536/thumbnail/thumbnail_IMAG21_12d6a5a5-e6ef-47aa-8bae-3e0def481452.jpg",
        name: "해시의 신루", // 웹툰 제목
        rend: 0, //대여 쿠키 개수
        have: 0, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 61,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/745472/thumbnail/thumbnail_IMAG21_11e424ae-7225-4d54-9cb4-63f4d9a6bbb3.jpg",
        name: "온새미로", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 62,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/793130/thumbnail/thumbnail_IMAG21_1913856c-b494-4348-b3f0-b85393e4c3ed.jpg",
        name: "방과후 레시피", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 63,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/792277/thumbnail/thumbnail_IMAG21_a0d9827b-0e2c-48ce-a1ca-ccb2d4ff65f1.jpg",
        name: "따개비", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 64,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/729086/thumbnail/thumbnail_IMAG21_3761456973533491814.jpg",
        name: "이계 무슨 황비", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 65,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/783551/thumbnail/thumbnail_IMAG21_3688842151190946657.jpg",
        name: "침묵의 밤", // 웹툰 제목
        rend: 0, //대여 쿠키 개수
        have: 0, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 66,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/772691/thumbnail/thumbnail_IMAG21_7292794790963720291.jpg",
        name: "돌아온 여기사", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 67,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/774451/thumbnail/thumbnail_IMAG21_dfacd585-dc48-410e-b91d-1a3131a4c54d.jpg",
        name: "아빠같은 남자", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 68,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/784989/thumbnail/thumbnail_IMAG21_3762867861630367334.jpg",
        name: "배트맨: 웨인 패밀리 어드벤처", // 웹툰 제목
        rend: 0, //대여 쿠키 개수
        have: 0, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 69,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/792379/thumbnail/thumbnail_IMAG21_448a57b1-10fa-4933-be90-80c0b50a3d37.jpg",
        name: "베어케어", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 70,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/754876/thumbnail/thumbnail_IMAG21_3904682673849053541.jpg",
        name: "카루나", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 71,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/792125/thumbnail/thumbnail_IMAG21_3762866762188994661.jpg",
        name: "로맨틱 태평수산", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 72,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/778707/thumbnail/thumbnail_IMAG21_3617293441289315169.jpg",
        name: "시에라", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 73,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/758587/thumbnail/thumbnail_IMAG21_3688554963004371809.jpg",
        name: "자취방 신선들", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 74,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/795123/thumbnail/thumbnail_IMAG21_3991422239939703397.jpg",
        name: "연애의 발견", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 75,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/787729/thumbnail/thumbnail_IMAG21_f5153f86-858a-4945-8701-8e25d5c97c7a.jpg",
        name: "나쁜 마법사의 꿈", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 76,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/769662/thumbnail/thumbnail_IMAG21_7293409593956393778.jpg",
        name: "온실 속 화초", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 77,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/768471/thumbnail/thumbnail_IMAG21_7149854950669379121.jpg",
        name: "혼모노트", // 웹툰 제목
        rend: 0, //대여 쿠키 개수
        have: 0, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 78,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/751993/thumbnail/thumbnail_IMAG21_7089003575688389985.jpg",
        name: "보물과 괴물의 도시", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 79,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/794644/thumbnail/thumbnail_IMAG21_7017844316221815094.jpg",
        name: "사랑하는 여배우들", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 80,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/771985/thumbnail/thumbnail_IMAG21_2989a433-dff4-4ef3-ba1c-ef86f6182a21.jpg",
        name: "모어 라이프", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 81,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/796247/thumbnail/thumbnail_IMAG21_3486742933231789363.jpg",
        name: "널 사랑하는 죽은 형", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 82,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/795929/thumbnail/thumbnail_IMAG21_7221859991557582946.jpg",
        name: "권리행사자", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 83,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/796492/thumbnail/thumbnail_IMAG21_4122820291731022946.jpg",
        name: "유월의 소한", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
    ],
    Fri: [
      {
        key: 0,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/641253/thumbnail/thumbnail_IMAG21_01672165-03c8-44b1-ba0e-ef82c9cfcd10.jpg",
        name: "외모지상주의", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 1,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/790713/thumbnail/thumbnail_IMAG21_3919364435331003700.jpg",
        name: "대학원 탈출일지", // 웹툰 제목
        rend: 1, //대여 쿠키 개수
        have: 2, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 2,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/790713/thumbnail/thumbnail_IMAG21_3919364435331003700.jpg",
        name: "광마회귀", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 3,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/773797/thumbnail/thumbnail_IMAG21_74f87a34-cf6d-4838-8a80-768bdb2f78a9.jpg",
        name: "나 혼자 만렙 뉴비", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 4,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/318995/thumbnail/thumbnail_IMAG21_38f18e00-09f2-4a0c-b36a-3aa56dfe0b3b.jpg",
        name: "갓 오브 하이스쿨", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 5,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/790245/thumbnail/thumbnail_IMAG21_3545003845982959922.jpg",
        name: "어쩌다보니 천생연분", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 6,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/777767/thumbnail/thumbnail_IMAG21_cc85f891-272b-450a-b642-cffe1568ab71.jpg",
        name: "역대급 영지 설계사", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 7,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/753478/thumbnail/thumbnail_IMAG21_4049077133597095219.jpg",
        name: "데드퀸", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 8,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/712362/thumbnail/thumbnail_IMAG21_7220173143199539507.jpg",
        name: "개를 낳았다", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 9,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/761722/thumbnail/thumbnail_IMAG21_3990859299314623589.jpg",
        name: "세기말 풋사과 보습학원", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 10,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/711422/thumbnail/thumbnail_IMAG21_4dedc562-d0fe-4e02-8882-c8f51930af0c.jpg",
        name: "삼국지톡", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 11,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/799837/thumbnail/thumbnail_IMAG21_361ed944-3c87-481f-a3d9-0e02c12b027d.jpg",
        name: "사신", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 12,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/751168/thumbnail/thumbnail_IMAG21_529c6125-cf14-435f-94ed-db1a2d499d84.jpg",
        name: "상남자", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 13,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/746534/thumbnail/thumbnail_IMAG21_3904681570744218160.jpg",
        name: "낙향문사전", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 14,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/800585/thumbnail/thumbnail_IMAG21_11721c44-7e70-45e2-bd2e-da1e4a51922b.jpg",
        name: "소름일기", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 15,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/798917/thumbnail/thumbnail_IMAG21_ca84bfa2-c1c8-4621-9b4b-26dc745606f5.jpg",
        name: "언니, 이번 생엔 내가 왕비야", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 16,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/800331/thumbnail/thumbnail_IMAG21_54515d5f-c297-48b9-a9ad-07c759d278b4.jpg",
        name: "지옥 키우기", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 17,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/552960/thumbnail/thumbnail_IMAG21_ce8f3dbb-3891-4e83-9782-64fa7986946e.jpg",
        name: "더 게이머", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 18,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/773476/thumbnail/thumbnail_IMAG21_7293972368624870449.jpg",
        name: "서울역 드루이드", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 19,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/800506/thumbnail/thumbnail_IMAG21_21640049-34da-44e5-82d7-bbb7aca3a3f8.jpg",
        name: "웅크", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 20,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/766563/thumbnail/thumbnail_IMAG21_4049918251368723811.jpg",
        name: "히어로 킬러", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 21,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/773916/thumbnail/thumbnail_IMAG21_38fc373b-2ee2-4ab6-ae89-1a9e6b571ba9.jpg",
        name: "말년용사", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 22,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/764130/thumbnail/thumbnail_IMAG21_7077799551393019444.jpg",
        name: "그들이 사귀는 세상", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 23,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/765804/thumbnail/thumbnail_IMAG21_7003208699811542067.jpg",
        name: "A.I. 닥터", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 24,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/801555/thumbnail/thumbnail_IMAG21_e90dca57-f705-4a4e-8848-752d809b4b8b.jpg",
        name: "언다잉", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 25,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/800796/thumbnail/thumbnail_IMAG21_e5f6d283-25ac-4c32-be9a-b883c1ba7b87.jpg",
        name: "온리호프", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 26,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/783527/thumbnail/thumbnail_IMAG21_7147274388288581688.jpg",
        name: "그렇고 그런 바람에", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 27,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/800291/thumbnail/thumbnail_IMAG21_04ee3bef-e354-45ba-8cce-896a767278a9.jpg",
        name: "여자를 사귀고 싶다", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 28,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/745876/thumbnail/thumbnail_IMAG21_4135822025369399396.jpg",
        name: "플레이어", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 29,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/801038/thumbnail/thumbnail_IMAG21_8d5b3bb7-f943-4664-becb-8ac9b88a7e7d.jpg",
        name: "성스러운 그대 이르시길", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 30,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/784507/thumbnail/thumbnail_IMAG21_7076337200897603889.jpg",
        name: "푸쉬오프", // 웹툰 제목
        rend: 1, //대여 쿠키 개수
        have: 2, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 31,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/794383/thumbnail/thumbnail_IMAG21_7017509145513376051.jpg",
        name: "이터널 포스", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 32,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/796980/thumbnail/thumbnail_IMAG21_3545002734307981623.jpg",
        name: "선을 넘은 연애", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 33,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/800046/thumbnail/thumbnail_IMAG21_0c40e3a7-3b26-46fc-9e1d-d0c1d646844d.jpg",
        name: "문제적 왕자님", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 34,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/799524/thumbnail/thumbnail_IMAG21_07e6d676-f2fb-4ac3-a96c-faac8a87a6f6.jpg",
        name: "절대복종", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 35,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/741467/thumbnail/thumbnail_IMAG21_ea059962-650e-4424-ae2c-6d1dea40fec4.jpg",
        name: "너의 미소가 함정", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 36,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/732036/thumbnail/thumbnail_IMAG21_a5f5b19f-5c44-4adf-b801-ec831eadc27b.jpg",
        name: "후덜덜덜 남극전자", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 37,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/794102/thumbnail/thumbnail_IMAG21_f6a66314-b084-4f48-ae7d-e5ee5771f17a.jpg",
        name: "킬 더 드래곤", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 38,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/799838/thumbnail/thumbnail_IMAG21_e19883fb-74f1-4491-9b72-8731946a11fc.jpg",
        name: "메소드 연기법", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 39,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/758675/thumbnail/thumbnail_IMAG21_9fddb484-3fdd-4218-9b61-47d1da98239e.jpg",
        name: "그 기사가 레이디로 사는 법", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 40,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/756139/thumbnail/thumbnail_IMAG21_4eca2f9f-7265-4d1f-b49e-2f1060ae19c7.jpg",
        name: "스포", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 41,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/800006/thumbnail/thumbnail_IMAG21_57db1d57-6373-4923-a0e8-e3e218e94e3c.jpg",
        name: "미드우트", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 42,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/797442/thumbnail/thumbnail_IMAG21_902f4c44-b639-436f-ba18-129c1feba0a7.jpg",
        name: "멜빈이 그들에게 남긴 것", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 43,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/783540/thumbnail/thumbnail_IMAG21_96b17461-b1db-4d1b-b7c9-4f471a209dba.jpg",
        name: "여름여자 하보이", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 44,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/799148/thumbnail/thumbnail_IMAG21_434bf097-6304-4003-b87d-926c281d775d.jpg",
        name: "지니오패스", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 45,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/783256/thumbnail/thumbnail_IMAG21_7005740853565600102.jpg",
        name: "상위1%", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 46,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/783863/thumbnail/thumbnail_IMAG21_57dd91be-0a96-4371-838d-68d5097dbc3a.jpg",
        name: "이게 아닌데", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 47,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/798100/thumbnail/thumbnail_IMAG21_534781c7-b360-4d30-be0a-034fbff24682.jpg",
        name: "쿠쿠쿠쿠", // 웹툰 제목
        rend: 1, //대여 쿠키 개수
        have: 2, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 48,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/794743/thumbnail/thumbnail_IMAG21_cda3c8aa-f076-439a-94e9-cdac4f0b5db7.jpeg",
        name: "스토커의 하루", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 49,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/793853/thumbnail/thumbnail_IMAG21_749009db-d44c-401c-90e2-820f3bd60ec8.jpg",
        name: "악마라고 불러다오", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 50,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/758660/thumbnail/thumbnail_IMAG21_3833467305617220449.jpg",
        name: "네버엔딩달링", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 51,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/794742/thumbnail/thumbnail_IMAG21_15a45e09-4f78-4f0e-adef-9b3f6206a2c8.",
        name: "로또 황녀님", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 52,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/725586/thumbnail/thumbnail_IMAG21_17f81846-d1a9-43fd-83a4-f9e966b6b977.jpg",
        name: "1초", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 53,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/524520/thumbnail/thumbnail_IMAG21_f414ff6a-ad76-4ea5-a05b-783856a2f6fd.jpg",
        name: "트럼프", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 54,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/769747/thumbnail/thumbnail_IMAG21_3834592101818054758.jpg",
        name: "아찔한 전남편", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 55,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/780063/thumbnail/thumbnail_IMAG21_3978478587194062641.jpg",
        name: "달이 없는 나라", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 56,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/792139/thumbnail/thumbnail_IMAG21_7075778868856305717.jpg",
        name: "솔트앤페퍼", // 웹툰 제목
        rend: 1, //대여 쿠키 개수
        have: 2, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 57,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/644112/thumbnail/thumbnail_IMAG21_3618981192359294768.jpg",
        name: "몽홀", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 58,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/797221/thumbnail/thumbnail_IMAG21_7089289671999633716.jpg",
        name: "비밀친구", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 59,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/775140/thumbnail/thumbnail_IMAG21_2de7a216-571b-4bf9-81b6-11b37126d328.jpg",
        name: "인피니티", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 60,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/751999/thumbnail/thumbnail_IMAG21_8797d0ef-cefd-463b-bf97-1361a5de293b.jpg",
        name: "백년게임", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 61,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/783520/thumbnail/thumbnail_IMAG21_3846462416433133112.jpg",
        name: "재앙의 날", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 62,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/795540/thumbnail/thumbnail_IMAG21_5dbe14f7-5802-4643-9b1d-90d94542f450.jpg",
        name: "드래곤의 심장을 가지고 있습니다", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 63,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/771330/thumbnail/thumbnail_IMAG21_3d77367e-42d7-48ba-8946-239def634d70.jpg",
        name: "태권보이", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 64,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/794423/thumbnail/thumbnail_IMAG21_a0ed5931-cdc9-4f4f-b9d6-f688c06edaba.jpg",
        name: "너의 키스씬", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 65,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/785855/thumbnail/thumbnail_IMAG21_7089618408024717624.jpg",
        name: "짝사랑 마들렌", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 66,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/793410/thumbnail/thumbnail_IMAG21_e2baecd4-0f45-40b2-9de9-667f86e1f7f2.jpg",
        name: "별빛 커튼콜", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 67,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/798622/thumbnail/thumbnail_IMAG21_0ef0aa87-52c2-4ea1-9b2e-c604648d8d20.jpg",
        name: "천상의 주인", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 68,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/783552/thumbnail/thumbnail_IMAG21_7865e109-e5c6-4015-9eb2-7d7bac2b1e54.jpg",
        name: "리트리츠", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 69,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/799220/thumbnail/thumbnail_IMAG21_23f445b9-eaee-4cb9-b9b1-4683779bff21.jpg",
        name: "여름의 너에게", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 70,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/729036/thumbnail/thumbnail_IMAG21_e7de7318-0952-49a2-9e24-335e0a321ce8.jpg",
        name: "합법해적 파르페", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 71,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/799478/thumbnail/thumbnail_IMAG21_e7fe0b67-9791-42b0-ab36-19bd2d7ea8a5.jpg",
        name: "서울시 천사주의", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 72,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/773475/thumbnail/thumbnail_IMAG21_3558462959265145142.jpg",
        name: "팬시X팬시", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 73,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/799226/thumbnail/thumbnail_IMAG21_2c9e59fe-766a-4d2b-b58f-415213986d3d.jpg",
        name: "너에게 입덕중", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 74,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/791847/thumbnail/thumbnail_IMAG21_7162237642839505208.jpg",
        name: "스치면 인연 스며들면 사랑", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
    ],
    Sat: [
      {
        key: 0,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/792651/thumbnail/thumbnail_IMAG21_218f18ef-7f68-4d6a-972c-686a3e9f6138.jpg",
        name: "99강화나무뭉둥이", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 1,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/650305/thumbnail/thumbnail_IMAG21_3631086797392995425.jpg",
        name: "호랑이형님", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 2,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/727188/thumbnail/thumbnail_IMAG21_d4726354-42bc-4bdf-b500-02c951082eeb.jpg",
        name: "취사병 전설이 되다", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 3,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/784255/thumbnail/thumbnail_IMAG21_7003999451307455078.jpg",
        name: "먹는 인생", // 웹툰 제목
        rend: 1, //대여 쿠키 개수
        have: 2, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 4,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/597447/thumbnail/thumbnail_IMAG21_37e97fb1-5572-45cc-8672-2a60b6cb768e.jpg",
        name: "프리드로우", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 5,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/774862/thumbnail/thumbnail_IMAG21_cc92b18e-50b6-426b-bcf7-e55097b4c80b.jpg",
        name: "조조코믹스", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 6,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/783056/thumbnail/thumbnail_IMAG21_3775197790073796145.jpg",
        name: "여고생 드래곤", // 웹툰 제목
        rend: 1, //대여 쿠키 개수
        have: 2, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 7,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/773796/thumbnail/thumbnail_IMAG21_c673f6f3-c15a-45f1-beb6-e975a84751d2.jpg",
        name: "망나니 소교주로 환생했다", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 8,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/800312/thumbnail/thumbnail_IMAG21_90520e55-609b-4015-8260-974081bce964.jpg",
        name: "이십팔세기 광팬", // 웹툰 제목
        rend: 1, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 9,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/787500/thumbnail/thumbnail_IMAG21_7090184484697487202.jpg",
        name: "은탄", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 10,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/793283/thumbnail/thumbnail_IMAG21_4136055320174945841.jpg",
        name: "악몽의 형상", // 웹툰 제목
        rend: 1, //대여 쿠키 개수
        have: 2, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 11,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/801475/thumbnail/thumbnail_IMAG21_63818a49-407c-4d1d-8f9a-e541285abdd9.jpg",
        name: "세레나", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 12,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/724815/thumbnail/thumbnail_IMAG21_6710a409-b23f-414e-842a-5543c4334573.jpg",
        name: "아홉수 우리들", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 13,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/721948/thumbnail/thumbnail_IMAG21_b5efacb7-c212-422f-bc4a-15cf5dc84408.jpg",
        name: "스터디그룹", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 14,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/64997/thumbnail/thumbnail_IMAG21_3834645974328108595.jpg",
        name: "나이트런", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 15,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/746834/thumbnail/thumbnail_IMAG21_6412ed6b-2288-41df-8715-648a3da9154e.jpg",
        name: "청춘 블라썸", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 16,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/769568/thumbnail/thumbnail_IMAG21_4122307894377986102.jpg",
        name: "반드시 해피엔딩", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 17,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/793275/thumbnail/thumbnail_IMAG21_3631362972329534562.jpg",
        name: "작전명 순정", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 18,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/616239/thumbnail/thumbnail_IMAG21_7c320dd0-7f6e-4645-b82b-e46752ed7375.jpg",
        name: "윌유메리미", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 19,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/799503/thumbnail/thumbnail_IMAG21_34f3cf97-e658-48bd-80c2-ca4397b1ecfd.jpg",
        name: "간첩 18세", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 20,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/772853/thumbnail/thumbnail_IMAG21_7148394817198842420.jpg",
        name: "나태 공자,노력 천재 되다", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 21,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/787061/thumbnail/thumbnail_IMAG21_802bdc27-b7d9-4b97-8f6b-07fd392175ca.jpg",
        name: "소공녀 민트", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 22,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/801324/thumbnail/thumbnail_IMAG21_201ca646-5c79-42d2-ad28-49a435dc362e.jpg",
        name: "민간인 통제구역-일급기밀", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 23,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/703630/thumbnail/thumbnail_IMAG21_12acd584-a3fe-40a5-bf47-b1c36dc18387.jpg",
        name: "어글리후드", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 24,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/733280/thumbnail/thumbnail_IMAG21_ffc6f8e2-f633-4b4d-8059-d42f155c2011.jpg",
        name: "나를 바꿔줘", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 25,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/774864/thumbnail/thumbnail_IMAG21_7366025529484523875.jpg",
        name: "존잘주의", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 26,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/780404/thumbnail/thumbnail_IMAG21_e9eccbd9-b1c1-49b9-81a8-5bee3291315f.jpg",
        name: "물위의 우리", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 27,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/793350/thumbnail/thumbnail_IMAG21_3545852647434696500.jpg",
        name: "미나 이퀄", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 28,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/732021/thumbnail/thumbnail_IMAG21_3617062741365437232.jpg",
        name: "탑코너", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 29,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/786496/thumbnail/thumbnail_IMAG21_3473794169387889714.jpg",
        name: "아사", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 30,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/800828/thumbnail/thumbnail_IMAG21_bd9dbd1f-322c-4fdc-88f0-135d4a892735.jpg",
        name: "용두사망 소설 속의 악녀가 되었다", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 31,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/794154/thumbnail/thumbnail_IMAG21_7005690301766646114.jpg",
        name: "남편 먹는 여자", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 32,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/755559/thumbnail/thumbnail_IMAG21_5f1dbe14-8903-454e-9d00-bb6ce36b90fa.jpg",
        name: "태백:튜토리얼 맨", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 33,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/765157/thumbnail/thumbnail_IMAG21_7017797016515392057.jpg",
        name: "좀비 파이트", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 34,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/798182/thumbnail/thumbnail_IMAG21_89b76b37-09fe-4791-8de8-ec2ed174c95d.jpg",
        name: "디펜스 게임의 폭군이 되었다", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 35,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/703839/thumbnail/thumbnail_IMAG21_5868239b-e1f5-4bcc-ad21-9dba1539d693.jpg",
        name: "홍시는 날 좋아해!", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 36,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/783590/thumbnail/thumbnail_IMAG21_4135765916688540769.jpg",
        name: "용사참수인", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 37,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/793553/thumbnail/thumbnail_IMAG21_1afbb206-239d-41d8-832b-cbd6be2b0c0a.jpeg",
        name: "이계진입 리로디드", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 38,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/774832/thumbnail/thumbnail_IMAG21_12771bf7-d4aa-465b-b0cd-288df0445bab.jpg",
        name: "같은 학교 친구", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 39,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/797184/thumbnail/thumbnail_IMAG21_7161629625811166819.jpg",
        name: "대충 캠퍼스로맨스임", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 40,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/774051/thumbnail/thumbnail_IMAG21_0cf6ad18-a403-4a35-913b-e6648b66c5a8.jpg",
        name: "남편을 만렙으로 키우려 합니다", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 41,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/783814/thumbnail/thumbnail_IMAG21_3472617502213103923.jpg",
        name: "엑스애쉬", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 42,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/793072/thumbnail/thumbnail_IMAG21_3691042260166927713.jpg",
        name: "팬인데 왜요", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 43,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/762277/thumbnail/thumbnail_IMAG21_c1002487-225b-4984-8a38-28ceb6abfe28.jpg",
        name: "지옥급식", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 44,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/797844/thumbnail/thumbnail_IMAG21_3473510481684150625.jpg",
        name: "폭군 남편과 이혼하겠습니다", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 45,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/729047/thumbnail/thumbnail_IMAG21_835f4d2f-fa5a-4ef0-9106-0edeb5d6dd4c.jpg",
        name: "공유몽", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 46,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/801516/thumbnail/thumbnail_IMAG21_f1f2d0bc-e7c5-4697-92a6-e1bb3baeccee.jpg",
        name: "아이돌만 하고 싶었는데", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 47,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/784580/thumbnail/thumbnail_IMAG21_415eec4d-410d-4118-9e7e-e05a7e7c1997.jpg",
        name: "묘령의 황자", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 48,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/793374/thumbnail/thumbnail_IMAG21_3775484551403496548.jpg",
        name: "완벽한 부부는 없다", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 49,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/750582/thumbnail/thumbnail_IMAG21_7293407407885333561.jpg",
        name: "광해의 연인", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 50,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/774043/thumbnail/thumbnail_IMAG21_7305230228785542756.jpg",
        name: "메트로 헌터", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 51,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/776656/thumbnail/thumbnail_IMAG21_3559314170173470050.jpg",
        name: "최면학교", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 52,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/786269/thumbnail/thumbnail_IMAG21_3976731454544045158.jpg",
        name: "마법사가 죽음을 맞이하는 방법", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 53,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/783864/thumbnail/thumbnail_IMAG21_4135206492933678131.jpg",
        name: "전생연분", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 54,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/778580/thumbnail/thumbnail_IMAG21_7365744059571516773.jpg",
        name: "최강부캐", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 55,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/770964/thumbnail/thumbnail_IMAG21_fd38b2b9-196b-4390-b8ab-ff9e424b69c4.jpg",
        name: "키스 식스 센스", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 56,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/778284/thumbnail/thumbnail_IMAG21_0de7df32-623e-4e3b-9191-17479ee89c99.jpg",
        name: "은둔코인", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 57,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/796252/thumbnail/thumbnail_IMAG21_07b3c0bc-a24e-4411-8996-b38f6a6a2721.jpg",
        name: "다비,아찔하게 흐르는", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 58,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/784582/thumbnail/thumbnail_IMAG21_7220790153841828450.jpg",
        name: "소년 검사", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 59,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/794161/thumbnail/thumbnail_IMAG21_7377801329884803120.jpg",
        name: "복수를 위한 결혼동맹", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 60,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/789664/thumbnail/thumbnail_IMAG21_7364905132283607138.jpg",
        name: "적월의 나라", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 61,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/755744/thumbnail/thumbnail_IMAG21_ea3e8a31-f6ef-40b4-936b-acb0fac4e94f.jpg",
        name: "왕년엔 용사님", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 62,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/771065/thumbnail/thumbnail_IMAG21_7149803300217697074.jpg",
        name: "중매쟁이 아가 황녀님", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 63,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/764128/thumbnail/thumbnail_IMAG21_1d8ee74e-24c4-43b7-aee3-52ad2f7dbe9f.jpg",
        name: "모두 너였다", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 64,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/785260/thumbnail/thumbnail_IMAG21_3486966134075647588.jpg",
        name: "배달의 신", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 65,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/791936/thumbnail/thumbnail_IMAG21_220219e9-4d6c-4b9a-874b-a6780edb27d5.jpg",
        name: "키스의 여왕", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 66,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/797932/thumbnail/thumbnail_IMAG21_ef5d2231-8978-4ebd-8e85-8bf73437da62.jpg",
        name: "청춘일지", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 67,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/786978/thumbnail/thumbnail_IMAG21_c06d9d48-2f0d-47b8-8767-1cf8ce6f29b6.jpg",
        name: "7FATES: CHAKHO", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 68,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/733277/thumbnail/thumbnail_IMAG21_3762867875337430064.jpg",
        name: "도사 가온", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 69,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/778579/thumbnail/thumbnail_IMAG21_793b71dd-eb49-4b91-aff4-a53ba1141822.jpg",
        name: "스트릿 워크아웃", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 70,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/769193/thumbnail/thumbnail_IMAG21_63967208-c38f-42a0-9186-163653c54a47.jpg",
        name: "아가사", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 71,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/778968/thumbnail/thumbnail_IMAG21_7364286329789702709.jpg",
        name: "밤을 깨우는 마법", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 72,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/781339/thumbnail/thumbnail_IMAG21_3559031385248653620.jpg",
        name: "숨겨진 성녀", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 73,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/794458/thumbnail/thumbnail_IMAG21_7089291664123257185.jpg",
        name: "보고 있지?", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 74,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/786882/thumbnail/thumbnail_IMAG21_e0fa10e1-5bdc-43af-ba6c-596373173b1b.jpg",
        name: "좋아해 아니 싫어해", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 75,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/792720/thumbnail/thumbnail_IMAG21_7306017491928889145.jpg",
        name: "이건 그냥 연애 이야기", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 76,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/753304/thumbnail/thumbnail_IMAG21_7149294222022173752.jpg",
        name: "아침을 지나 밤으로", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 77,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/787721/thumbnail/thumbnail_IMAG21_3905296416854336824.jpg",
        name: "보듬보듬", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 78,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/785693/thumbnail/thumbnail_IMAG21_c01781fb-884a-4667-aa13-e3a316d2fa24.jpg",
        name: "실버 쥬얼", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
    ],
    Sun: [
      {
        key: 0,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/736277/thumbnail/thumbnail_IMAG21_bbbe3f76-021e-4dbc-830a-4358c1abec0c.jpg",
        name: "싸움독학", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 1,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/758150/thumbnail/thumbnail_IMAG21_4135492154714961716.jpg",
        name: "입학용병", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 2,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/710751/thumbnail/thumbnail_IMAG21_53aefc06-6bdf-40fb-93ac-fab7242146c6.jpg",
        name: "약한영웅", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 3,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/795262/thumbnail/thumbnail_IMAG21_b6090fe4-9f39-4ef9-802e-091184f38e30.jpg",
        name: "사형소년", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 4,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/748105/thumbnail/thumbnail_IMAG21_87f84b6f-a211-4940-8684-f4b8731357eb.jpg",
        name: "독립일기", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 5,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/774831/thumbnail/thumbnail_IMAG21_b4644a73-ecfb-4532-a96c-575b02accfd0.jpg",
        name: "수희0(tngmlek0", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 6,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/798664/thumbnail/thumbnail_IMAG21_c7250508-9855-409e-a8f6-0adf1d76a1f8.jpg",
        name: "자매전쟁", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 7,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/800778/thumbnail/thumbnail_IMAG21_fb2e458c-00bc-44cf-96ec-d486e4389b31.jpg",
        name: "칼끝에 입술", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 8,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/751207/thumbnail/thumbnail_IMAG21_051bb61f-1996-4082-871c-6f04ff279c11.jpg",
        name: "천하제일인", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 9,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/785251/thumbnail/thumbnail_IMAG21_3919877924477546549.jpg",
        name: "시월드가 내게 집착한다", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 10,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/737628/thumbnail/thumbnail_IMAG21_3774405050062168629.jpg",
        name: "별이삼샵", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 11,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/799267/thumbnail/thumbnail_IMAG21_f522ff4f-4f7c-40bf-b9f2-f58d049d4a82.jpg",
        name: "안녕,나의 수집", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 12,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/779632/thumbnail/thumbnail_IMAG21_4048795649913205816.jpg",
        name: "일타강사 백사부", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 13,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/764129/thumbnail/thumbnail_IMAG21_082cf9cf-165b-41f3-acae-0d5af28c3864",
        name: "살아남은 로맨스", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 14,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/799805/thumbnail/thumbnail_IMAG21_aff53990-84b6-4b97-973d-fa3a8add5da5.jpg",
        name: "분신으로 자동사냥", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 15,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/761104/thumbnail/thumbnail_IMAG21_d167ed04-9e4d-40ad-9ad3-2d6773f3aa3d.jpg",
        name: "곱게 키웠더니, 짐승", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 16,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/759567/thumbnail/thumbnail_IMAG21_3991657355780766050.jpg",
        name: "판사 이한영", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 17,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/703844/thumbnail/thumbnail_IMAG21_4122261748397257571.jpg",
        name: "가비지타임", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 18,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/800788/thumbnail/thumbnail_IMAG21_20e24a76-68af-4a5c-a4ae-2ac2b25cc1d1.jpg",
        name: "약빨이 신선함", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 19,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/778322/thumbnail/thumbnail_IMAG21_3918807004477994082.jpg",
        name: "무서운게 딱좋아!", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 20,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/695796/thumbnail/thumbnail_IMAG21_332bb25b-c77d-477f-9979-5a8607ebd7a5.jpg",
        name: "내일", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 21,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/800392/thumbnail/thumbnail_IMAG21_eed97262-22a4-4232-92b7-3e213f4819f2.jpg",
        name: "노량진 공격대", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 22,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/800101/thumbnail/thumbnail_IMAG21_68185df2-8958-47cc-948b-d5890bec9e45.jpg",
        name: "헬스던전", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 23,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/795529/thumbnail/thumbnail_IMAG21_3689631394330325350.jpg",
        name: "아카데미에 위장취업당했다", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 24,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/655746/thumbnail/thumbnail_IMAG21_3977301010156642611.jpg",
        name: "마법스크롤 상인 지오", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 25,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/730657/thumbnail/thumbnail_IMAG21_3991708112979517793.jpg",
        name: "오로지 너를 이기고 싶어", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 26,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/776092/thumbnail/thumbnail_IMAG21_3905524900524404791.jpg",
        name: "어느날 갑자기 서울은", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 27,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/769658/thumbnail/thumbnail_IMAG21_3559023722976457571.jpg",
        name: "경자 전성시대", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 28,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/801580/thumbnail/thumbnail_IMAG21_fe3ba1fc-a481-42db-bd91-7d2a02f599a6.jpg",
        name: "백설을 위하여", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 29,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/792694/thumbnail/thumbnail_IMAG21_8a8024b8-4db9-4ae8-b4c5-63deeb281c0c.jpg",
        name: "폰투스:극야2", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 30,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/728128/thumbnail/thumbnail_IMAG21_7089844928995668020.jpg",
        name: "합격시켜주세용", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 31,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/789966/thumbnail/thumbnail_IMAG21_3774973501885266274.jpg",
        name: "장풍전", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 32,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/778578/thumbnail/thumbnail_IMAG21_7377517646593603123.jpg",
        name: "위닝샷!", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 33,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/767874/thumbnail/thumbnail_IMAG21_7291385216975921457.jpg",
        name: "동생친구", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 34,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/783524/thumbnail/thumbnail_IMAG21_3761743981130101296.jpg",
        name: "고백 취소도 되나?", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 35,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/799509/thumbnail/thumbnail_IMAG21_1ef92df7-7d7f-48ab-9c8d-f342aad36d08.jpg",
        name: "손 안의 안단테", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 36,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/778967/thumbnail/thumbnail_IMAG21_f6cc88ac-290a-41e8-9e85-e7ae8f899480.jpg",
        name: "랑데뷰", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 37,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/730607/thumbnail/thumbnail_IMAG21_4050531779662669109.jpg",
        name: "평행도시", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 38,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/768473/thumbnail/thumbnail_IMAG21_3977634166458311222.jpg",
        name: "천치전능", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 39,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/773027/thumbnail/thumbnail_IMAG21_4063994409630774068.jpg",
        name: "생존로그", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 40,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/778991/thumbnail/thumbnail_IMAG21_3544721241449849699.jpg",
        name: "몸이 바뀌는 사정", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 41,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/768474/thumbnail/thumbnail_IMAG21_7cb64c7e-2528-4057-8118-ad1df1acf2f7.jpg",
        name: "장미같은 소리", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 42,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/761599/thumbnail/thumbnail_IMAG21_17ae3742-b2d1-476e-a366-bd031e53969d.jpg",
        name: "결혼까지 망상했어!", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 43,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/784140/thumbnail/thumbnail_IMAG21_2d94801c-0277-4f9e-ad45-b8e7a7f9920f.jpg",
        name: "후궁 스캔들", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 44,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/789651/thumbnail/thumbnail_IMAG21_0fcadb92-70c8-4c18-8371-1a40c33a3c20.jpg",
        name: "위험한 남편을 길들이는 법", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 45,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/798177/thumbnail/thumbnail_IMAG21_f0cbdfb5-413a-4418-bc13-9acaf6d8f3a5.jpg",
        name: "키미앤조이", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 46,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/801455/thumbnail/thumbnail_IMAG21_24d87e2b-c39c-4f30-8b11-4ba2ab86e253.jpg",
        name: "완벽한 파트너", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 47,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/798303/thumbnail/thumbnail_IMAG21_ba8821d3-95a0-4916-a95d-7ab265982ef8.jpg",
        name: "108명의 그녀들", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 48,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/793539/thumbnail/thumbnail_IMAG21_4377b048-3468-4b60-9b15-289d0f974340.jpg",
        name: "마왕의 고백", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 49,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/796251/thumbnail/thumbnail_IMAG21_6417177b-b3b2-4d95-b0a8-933eaa533688.jpg",
        name: "홍 의관의 은밀한 비밀", // 웹툰 제목
        rend: 1, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 50,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/790416/thumbnail/thumbnail_IMAG21_055ba017-9ab1-413f-8dab-dcab9b6ef090.jpg",
        name: "나의 작은 서점", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 51,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/786082/thumbnail/thumbnail_IMAG21_3617014152366941753.jpg",
        name: "여우애담", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 52,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/743838/thumbnail/thumbnail_IMAG21_3618142264182072120.jpg",
        name: "소녀재판", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 53,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/797155/thumbnail/thumbnail_IMAG21_f4040a49-edae-4b48-81c7-09b6426f3c81.jpg",
        name: "킬링킬러", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 54,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/783865/thumbnail/thumbnail_IMAG21_3847588535333106273.jpg",
        name: "돌&아이", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 55,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/753842/thumbnail/thumbnail_IMAG21_7089009287152952422.jpg",
        name: "데빌샷", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 56,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/794944/thumbnail/thumbnail_IMAG21_7148963260462883382.jpg",
        name: "하렘에서 살아남기", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 57,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/773473/thumbnail/thumbnail_IMAG21_7219612362120638771.jpg",
        name: "전설의 화석", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 58,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/798172/thumbnail/thumbnail_IMAG21_4d00e096-a0b4-492a-9b64-046607664f50.jpg",
        name: "내곁엔 없을까", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 59,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/786973/thumbnail/thumbnail_IMAG21_35f474fa-13bc-4ac5-9815-91f0e9d1ef95.jpg",
        name: "DARK MOON:달의 제단", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 60,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/786262/thumbnail/thumbnail_IMAG21_ef76cf9e-0742-400a-8dcb-2720679c9764.jpg",
        name: "생존고백", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 61,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/780409/thumbnail/thumbnail_IMAG21_7293356615652225585.jpg",
        name: "보스의 노골적 취향", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 62,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/791937/thumbnail/thumbnail_IMAG21_3991709225342808419.jpg",
        name: "6월의 라벤더", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 63,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/783599/thumbnail/thumbnail_IMAG21_629c1cd8-a02c-4ee3-80a8-2da6c5c6a57e.jpg",
        name: "블러드 리벤저", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 64,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/787465/thumbnail/thumbnail_IMAG21_3835207836886250084.jpg",
        name: "철수와 영희 이야기", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 65,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/796894/thumbnail/thumbnail_IMAG21_3473180633326577200.jpg",
        name: "마섹남-마술하는 섹시한 남자", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 66,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/779354/thumbnail/thumbnail_IMAG21_60a74bee-a71e-4a50-a02b-c434359e36a1.jpg",
        name: "패션쇼", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 67,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/779627/thumbnail/thumbnail_IMAG21_4134641338940612965.jpg",
        name: "보통아이", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 68,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/758664/thumbnail/thumbnail_IMAG21_3630856102589116464.jpg",
        name: "사람은 고쳐 쓰는 게 아니야!", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 69,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/737021/thumbnail/thumbnail_IMAG21_6758bf70-1d7a-4ceb-ae84-90698e808920.jpg",
        name: "마도", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 70,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/758665/thumbnail/thumbnail_IMAG21_3617063617572387171.jpg",
        name: "샤인 스타", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 71,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/795041/thumbnail/thumbnail_IMAG21_02f63d85-3d3c-468b-9b4c-a61203785747.jpg",
        name: "아마도,굿모닝", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 72,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/758676/thumbnail/thumbnail_IMAG21_3991651857397657649.jpg",
        name: "조선여우스캔들", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 73,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/794224/thumbnail/thumbnail_IMAG21_c063bfcc-d189-45c3-a29d-4e453d8b134b.jpg",
        name: "밀실 마피아 게임", // 웹툰 제목
        rend: 3, //대여 쿠키 개수
        have: 5, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 74,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/801277/thumbnail/thumbnail_IMAG21_17626518-c706-4b86-803b-3329ce2bff23.jpg",
        name: "그림자 잡기", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 75,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/776143/thumbnail/thumbnail_IMAG21_4134977780861710902.jpg",
        name: "독신마법사 기숙아파트", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 76,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/773524/thumbnail/thumbnail_IMAG21_7149293130308793392.jpg",
        name: "거래하실래요?", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 3, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 77,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/799213/thumbnail/thumbnail_IMAG21_3d88ad40-2cca-4255-a00c-a5d9dab3c29f.jpg",
        name: "어떤 소란", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
      {
        key: 78,
        thumb:
          "https://shared-comic.pstatic.net/thumb/webtoon/785812/thumbnail/thumbnail_IMAG21_7291439068095145059.jpg",
        name: "구해줘,호구!", // 웹툰 제목
        rend: 2, //대여 쿠키 개수
        have: 4, //소장 쿠키 개수
        isHave: false, //대여 혹은 소장 여부(기본값 대여)
        value: 0,
      },
    ],
  },
});
