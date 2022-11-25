import { useRecoilValue } from "recoil";
//각 페이지에 들어갈 헤더를 컴포넌트로 만들었습니다.
//{userName}이/가 사는 쿠키를 처리하고 있습니다.
import { userNameAtom } from "../atoms";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  // 초록 박스에 대한 css
  background-color: #61d271;
  display: flex;
  justify-content: space-between;
  height: 15vh;
`;
const Title = styled.h1`
  //CookieIBuy에 대한 css
  text-align: center;
  color: white;
  font-family: Inter;
  font-style: normal;
  font-weight: 1000;
  font-size: 4vh;
  margin: 4.5vh 3vw;
  letter-spacing: -0.1vh;
  line-height: 3vh;
  text-decoration: none;
`;
const Detail = styled.p`
  //내가 만든 쿠키에 대한 css (오른쪽 정렬이 필수입니다. 글자수가 변하기 때문에..)
  color: white;
  font-size: 3.5vh;
  margin: 6vh 3vw;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;
function Header() {
  const userName = useRecoilValue(userNameAtom);

  function isEndWithConsonant(korStr) {
    const finalChrCode = korStr.charCodeAt(korStr.length - 1);
    // 0 = 받침 없음, 그 외 = 받침 있음
    const finalConsonantCode = (finalChrCode - 44032) % 28;
    return finalConsonantCode !== 0;
  }
  // 을/를 덧붙히기
  String.prototype.appendEulReul = function () {
    return this + (isEndWithConsonant(this) ? "이" : "가");
  };
  return (
    <Container>
      <StyledLink to={{ pathname: `/` }}>
        <Title>
          COOKIE
          <br />I BUY
        </Title>
      </StyledLink>
      <Detail>{userName.appendEulReul()} 사는 쿠키</Detail>
    </Container>
  );
}

export default Header;
