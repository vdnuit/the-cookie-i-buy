import { useRecoilValue } from "recoil";
import { userNameAtom } from "./atoms";

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
    <h1>{userName.appendEulReul()} 사는 쿠키</h1>

    </div>
  );
}
    
export default Header;