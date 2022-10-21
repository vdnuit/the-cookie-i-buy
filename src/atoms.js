//c언어의 전역 변수와 같이 모든 페이지에서 사용할 요소들을 선언하는 파일입니다.
//recoil을 사용했습니다.
import { atom } from "recoil";

export const isDarkAtom = atom({
  key: "isDark",
  default: true,
});

export const userNameAtom = atom({
  key: "userName",
  default: "내",
});

export const monCookieAtom = atom({
  key: "monCookie",
  default: 0,
});