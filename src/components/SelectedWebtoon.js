//Choice 파일의 각 웹툰을 컴포넌트로 만들었습니다.
//이름, 사진, 체크박스를 담고 있으며 이것이 Choice.js에서 map 함수로 반복됩니다.
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 240px;
  text-align: center;
`;
const Title = styled.div`
  display: flex;
  
  justify-content: space-between;
  p {
    
    letter-spacing: -1px;
    font-weight: 100;
    font-size: 20px;
    margin: 2vh;
    
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    
   display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical
    width: 150px;
    height: 50px;
  }
`;
const Input = styled.div`
  margin: 1vh;

  width: 30px;
  label {
    font-size: 13px;
    color: #61d271;
  }
  input {
    width: 20px;
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
      <img src={webtoon.thumb} style={{ width: "235px" }}></img>
      <Title>
        <p>{webtoon.name}</p>
        <Input>
          <input
            type="checkbox"
            checked={bChecked}
            onChange={(e) => checkHandler(e)}
          />

          <label>소장</label>
        </Input>
      </Title>
    </Container>
  );
};

export default Webtoon;
