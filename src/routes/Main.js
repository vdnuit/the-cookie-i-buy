// 메인페이지입니다 Link를 이용해 다음으로 넘어가는 버튼을 둔 것을 볼 수 있습니다.
import { Link } from "react-router-dom";
import ArrowImg from "../assets/Arrow.png";
import PagesImg from "../assets/Pages.png";
import styled from "styled-components";
import Seohyun from "../assets/Seohyun.png";
import Somi from "../assets/Somi.png";
import Eunseo from "../assets/Eunseo.png";
import Chaeyoung from "../assets/Chaeyoung.png";

const Container = styled.div`
  //배경에 대한 css
  background: linear-gradient(
      0deg,
      rgba(76, 157, 88, 0.21875) 60.56%,
      rgba(73, 147, 83, 0) 71.74%
    ),
    #61d271;
  height: 120vh;
  overflow: hidden;
`;
const Title = styled.h1`
  letter-spacing: -0.5vw;
  font-family: Inter;
  font-style: normal;
  font-weight: 900;
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
  margin-top: -15vh;
  width: 100%;
  height: 30vh;
`;
const White = styled.div`
  background-color: #fafafa;
  margin-top: -1vh;
  padding-bottom: 10vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const MText = styled.div`
  margin: 3vw;
  h3 {
    font-family: "Inter";
    font-weight: 900;
    font-size: 10vh;
    margin: 4.5vh 3vw;
    letter-spacing: -0.3vh;
    line-height: 10vh;
  }
  p {
    text-align: center;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 2vh;
    line-height: 27px;

    color: #00e063;
  }
`;
const Members = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Member = styled.div`
  margin: 1vw;
  img {
    width: 23vh;
    margin-top: 7vh;
  }
  h1 {
    text-align: center;
    font-family: "Inter";
    font-weight: 900;
    font-size: 3vw;
    margin: 4.5vh 1vw;
    letter-spacing: -0.3vh;
    line-height: 1vw;
  }
  p {
    text-align: center;
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 3vh;
    line-height: 27px;

    color: #00e063;
  }
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
      </Container>

      <Pages src={PagesImg} />
      <White>
        <MText>
          <h3>
            People
            <br />
            baking
            <br />
            Cookie
          </h3>
          <p>김이강 팀의 조원들을 소개합니다.</p>
        </MText>
        <Members>
          <Member>
            <img src={Seohyun} alt="Seohyun" />
            <h1>강서현</h1>
            <p>메인 코더/배포</p>
          </Member>
          <Member>
            <img src={Somi} alt="Somi" />
            <h1>김소미</h1>
            <p>UX/UI</p>
          </Member>
          <Member>
            <img src={Eunseo} alt="Eunseo" />
            <h1>김은서</h1>
            <p>조장/서브 코더</p>
          </Member>
          <Member>
            <img src={Chaeyoung} alt="Chaeyoung" />
            <h1>이채영</h1>
            <p>데이터 수집</p>
          </Member>
        </Members>
      </White>
    </>
  );
}

export default Main;
