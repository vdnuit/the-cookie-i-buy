import { useRecoilValue } from "recoil";
//각 페이지에 들어갈 헤더를 컴포넌트로 만들었습니다.
//{userName}이/가 사는 쿠키를 처리하고 있습니다.
import { userNameAtom } from "../atoms";

function Header() {
  
  const userName = useRecoilValue(userNameAtom);

  function isEndWithConsonant(korStr) {
    const finalChrCode = korStr.charCodeAt(korStr.length - 1)
    // 0 = 받침 없음, 그 외 = 받침 있음
    const finalConsonantCode = (finalChrCode - 44032) % 28
    return finalConsonantCode !== 0
  };
  // 을/를 덧붙히기
  String.prototype.appendEulReul = function() {
      return this + (isEndWithConsonant(this) ? "이" : "가")
  };
  return (
    <div>
      <h1>COOKIE I BUY</h1>
      <p>{userName.appendEulReul()} 사는 쿠키</p>

    </div>
  );
}
    
export default Header;