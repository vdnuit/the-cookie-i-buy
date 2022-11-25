// 메인페이지입니다 Link를 이용해 다음으로 넘어가는 버튼을 둔 것을 볼 수 있습니다.
import { Link } from "react-router-dom";
import ArrowImg from "../assets/Arrow.png";
import PagesImg from "../assets/Pages.png";
import styled from "styled-components";

const Container = styled.div`
  //배경에 대한 css
  background: linear-gradient(
      0deg,
      rgba(76, 157, 88, 0.21875) 60.56%,
      rgba(73, 147, 83, 0) 71.74%
    ),
    #61d271;
  height: 200vh;
  overflow: hidden;
`;
const Title = styled.h1`
  letter-spacing: -0.5vw;
  font-family: Inter;
  font-style: normal;
  font-weight: 1000;
  font-size: 12vw;
  color: #ffffff;
  margin: 10vh 6vw;
  padding: 1vw;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black,
    2px 2px 4px grey;
`;
const Arrow = styled.img`
  //화살표 사진에 대한 css

  width: 20vw;
  height: auto;
  margin: 3vw 6vw;
`;
const Detail = styled.p`
  //상세설명에 대한 css
  letter-spacing: -0.15vw;
  color: white;
  padding: 1vw;

  margin: 10vh 6vw;
  font-family: "Inter";
  font-style: normal;
  font-weight: 200;
  font-size: 2vw;
  line-height: 5vh;
`;
const Pages = styled.img`
  //상세설명에 대한 css

  width: 100vw;
  height: 150vh;
`;

function Main() {
  return (
    <>
      <Container>
        <Title>
          내가 사는 <br /> 쿠키
          <Link to={{ pathname: `/Name/*` }}>
            <Arrow src={ArrowImg} />
          </Link>
        </Title>

        <Detail>
          내가 사는 쿠키는 Knapsack 알고리즘을 사용하여 네이버 웹툰 사용자에게
          <br />
          합리적인 쿠키 소비를 위한 최적의 쿠키 소비 플랜을 제공합니다.
        </Detail>
        <Pages src={PagesImg} />
      </Container>
    </>
  );
}

export default Main;
