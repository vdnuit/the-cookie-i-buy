//Choice 파일의 각 웹툰을 컴포넌트로 만들었습니다.
//이름, 사진, 체크박스를 담고 있으며 이것이 Choice.js에서 map 함수로 반복됩니다.
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100px;

  // border: 1px solid grey;
`;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    letter-spacing: -1px;
    font-weight: 100;
    font-size: 15px;
    margin: 2px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 80px;
    height: 20px;
  }
`;
const Webtoon = ({ webtoon, checkedItemHandler }) => {
  const [bChecked, setChecked] = useState(false);

  //checkbox에 클릭 이벤트가 들어오면 체크표시/해제합니다.
  const checkHandler = ({ target }) => {
    setChecked(!bChecked);
    checkedItemHandler(webtoon, target.checked);
  };
  return (
    <Container>
      <img src={webtoon.thumb} style={{ width: "100px" }}></img>
      <Title>
        <p>{webtoon.name}</p>
        <input
          type="checkbox"
          checked={bChecked}
          onChange={(e) => checkHandler(e)}
        />
      </Title>
    </Container>
  );
};

export default Webtoon;
