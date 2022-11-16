// 메인페이지입니다 Link를 이용해 다음으로 넘어가는 버튼을 둔 것을 볼 수 있습니다.
import { Link } from "react-router-dom";
import ArrowImg from "../assets/Arrow.png";
import styled from "styled-components";

const Container = styled.div`
  //배경에 대한 css
`;
const Title = styled.h1`
  //내가 사는 쿠키에 대한 css
`;
const Detail = styled.p`
  //상세설명에 대한 css
`;
const Arrow = styled.img`
  //화살표 사진에 대한 css
`;
function Main() {
  return (
    <Container>
      <Title>내가 사는 쿠키</Title>
      <Detail>
        내가 사는 쿠키는 Knapsack 알고리즘을 사용하여 네이버 웹툰 사용자에게
        합리적인 쿠키 소비를 위한 최적의 쿠키 소비 플랜을 제공합니다.
      </Detail>
      <Link to={{ pathname: `/Name/*` }}>
        <Arrow src={ArrowImg} />
      </Link>
    </Container>
  );
}

export default Main;
