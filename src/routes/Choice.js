//웹툰을 선택하는 페이지입니다.
//전체적인 구조는 체크박스 클릭->해당 아이템 리스트에 복사->확인 버튼 클릭->리스트를 Atom에 복사 가 될 예정입니다.
/*
[미완료된 것]
1. checkedItems submit 버튼 누르면 SelectedAtom으로 전송해아함. [완료]
2. 현재 월요일 웹툰만 목록으로 적용된 상황. 다른 요일도 테스트 해보기
3. styled component 미적용
*/
import { Link } from "react-router-dom";
import Webtoon from "../components/Webtoon";
import { useRecoilState } from "recoil";
import { userNameAtom, webtoonsAtom, selectedAtom } from "../atoms";
import { useState } from "react";
import styled from "styled-components";
import CookieImg from "../assets/CookieImg.png";

const Container = styled.div`
  background-color: #fafafa;
  padding: 5vw 12vw;
`;
const Title = styled.h1`
  letter-spacing: -0.5vh;
  font-family: Inter;
  font-style: normal;
  font-weight: 100;
  font-size: 8vh;
  line-height: 10vh;
  color: #464646;
  margin: 2vw 0vw;
`;
const Detail = styled.p`
  letter-spacing: -0.2vh;
  font-family: Inter;
  font-weight: 400;
  font-size: 3vh;
  line-height: 4vh;
  color: #464646;

  margin-bottom: 10vh;
`;
const Button = styled.div`
  text-align: center;
  padding: 2vh 1vw;
  font-size: 2vh;
  margin: 3vh 0px;
  font-family: "Inter";
  color: #754b36;
  font-weight: 700;
`;
const Week = styled.span`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Day = styled.div`
  border: 1px solid grey;
  padding: 1vw;
  h3 {
    text-align: center;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 3vh;
    margin-bottom: 2vh;
    color: #464646;
  }
`;
function Choice() {
  const [webtoons, setWebtoons] = useRecoilState(webtoonsAtom);
  const [selected, setSelected] = useRecoilState(selectedAtom);

  const userName = useRecoilState(userNameAtom);
  const [checkedItems, setCheckedItems] = useState(new Array());
  console.log(webtoons);
  const checkedItemHandler = (key, isChecked) => {
    if (isChecked) {
      checkedItems.push(key);
      setCheckedItems(checkedItems);
    } else if (!isChecked) {
      for (var i = 0; i < checkedItems.length; i++) {
        if (checkedItems[i] === key) {
          checkedItems.splice(i, 1);
          i--;
        }
      }
      setCheckedItems(checkedItems);
    }
    console.log(checkedItems);
  };
  const selectedHandler = (key, isChecked) => {
    setSelected(checkedItems);
    console.log(selected);
  };

  return (
    <Container>
      <Title>좋아하는 웹툰을 선택해주세요.</Title>
      {/* 웹툰 정보들을 Webtoon으로 전송 */}
      <Detail>
        좋아하는 웹툰을 ‘내가 사는 쿠키’에게 알려주세요.
        <br />
        ‘내가 사는 쿠키’는 {userName}님이 좋아하는 웹툰을 기반으로 쿠키 소비를
        추천해드립니다. <br />
        방법은 간단합니다! 웹툰 썸네일 왼쪽 상단에 있는 체크 버튼을 눌러주세요.
      </Detail>

      <Button onClick={selectedHandler}>
        <Link to={{ pathname: `/Like/*` }}>
          <img src={CookieImg} style={{ width: "10vh", margin: "1vh" }} />
        </Link>
        <p>
          선택완료 후, <br />
          쿠키를 눌러주세요!
        </p>
      </Button>
      <Week>
        <Day>
          <h3>월요웹툰</h3>
          {webtoons.Mon.map((webtoon, index) => (
            <>
              <Webtoon
                key={webtoon.id}
                webtoon={webtoon}
                checkedItemHandler={checkedItemHandler}
              ></Webtoon>
            </>
          ))}
        </Day>
        <Day>
          <h3>화요웹툰</h3>
          {webtoons.Tue.map((webtoon, index) => (
            <>
              <Webtoon
                key={webtoon.id}
                webtoon={webtoon}
                checkedItemHandler={checkedItemHandler}
              ></Webtoon>
            </>
          ))}
        </Day>
        <Day>
          <h3>수요웹툰</h3>
          {webtoons.Wed.map((webtoon, index) => (
            <>
              <Webtoon
                key={webtoon.id}
                webtoon={webtoon}
                checkedItemHandler={checkedItemHandler}
              ></Webtoon>
            </>
          ))}
        </Day>
        <Day>
          <h3>목요웹툰</h3>
          {webtoons.Thu.map((webtoon, index) => (
            <>
              <Webtoon
                key={webtoon.id}
                webtoon={webtoon}
                checkedItemHandler={checkedItemHandler}
              ></Webtoon>
            </>
          ))}
        </Day>
        <Day>
          <h3>금요웹툰</h3>
          {webtoons.Fri.map((webtoon, index) => (
            <>
              <Webtoon
                key={webtoon.id}
                webtoon={webtoon}
                checkedItemHandler={checkedItemHandler}
              ></Webtoon>
            </>
          ))}
        </Day>
        <Day>
          <h3>토요웹툰</h3>
          {webtoons.Sat.map((webtoon, index) => (
            <>
              <Webtoon
                key={webtoon.id}
                webtoon={webtoon}
                checkedItemHandler={checkedItemHandler}
              ></Webtoon>
            </>
          ))}
        </Day>
        <Day>
          <h3>일요웹툰</h3>
          {webtoons.Sun.map((webtoon, index) => (
            <>
              <Webtoon
                key={webtoon.id}
                webtoon={webtoon}
                checkedItemHandler={checkedItemHandler}
              ></Webtoon>
            </>
          ))}
        </Day>
      </Week>
    </Container>
  );
}

export default Choice;
