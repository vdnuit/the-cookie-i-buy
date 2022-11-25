import { Link } from "react-router-dom";
import Webtoon from "../components/SelectedWebtoon";
import { useRecoilState } from "recoil";
import { selectedAtom, userNameAtom } from "../atoms";
import { useState, useEffect } from "react";
import NumberPicker from "react-widgets/NumberPicker";
import styled from "styled-components";
import CookieImg from "../assets/CookieImg.png";
import "react-widgets/styles.css";

const Container = styled.div`
  background-color: #fafafa;
  padding: 5vw 0vw;
`;
const Title = styled.h1`
  letter-spacing: -0.5vh;
  font-family: Inter;
  font-style: normal;
  font-weight: 100;
  font-size: 8vh;
  line-height: 10vh;
  color: #464646;
  margin: 2vw 12vw;
`;
const Detail = styled.p`
  letter-spacing: -0.2vh;
  font-family: Inter;
  font-weight: 400;
  font-size: 3vh;
  line-height: 4vh;
  color: #464646;
  margin-right: 12vw;
  margin-left: 12vw;
  margin-bottom: 10vh;
`;
const Webtoons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin: 0vw 3vw;
`;
const One = styled.div`
  margin: 3vw;

  border: 3px solid lightgrey;
  padding: 1vw;
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
function Like() {
  const [selected, setSelected] = useRecoilState(selectedAtom);
  const userName = useRecoilState(userNameAtom);
  const [checkedItems, setCheckedItems] = useState([...selected]);

  const checkedItemHandler = (key, isChecked) => {
    if (isChecked) {
      for (var i = 0; i < checkedItems.length; i++) {
        if (checkedItems[i].name === key.name) {
          var arr = checkedItems.slice(i, i + 1);
          checkedItems.splice(i, 1);
          i--;
        }
      }

      const copy = JSON.parse(JSON.stringify(arr[0]));
      copy["isHave"] = true;
      console.log(copy);
      checkedItems.push(copy);
      setCheckedItems(checkedItems);
      console.log(checkedItems);
    } else if (!isChecked) {
      for (var i = 0; i < checkedItems.length; i++) {
        if (checkedItems[i].name === key.name) {
          var arr = checkedItems.slice(i, i + 1);
          checkedItems.splice(i, 1);
          i--;
        }
      }
      const copy = JSON.parse(JSON.stringify(arr[0]));
      copy["isHave"] = false;
      checkedItems.push(copy);
      setCheckedItems(checkedItems);
    }
    console.log(checkedItems);
  };
  const selectedHandler = (key, isChecked) => {
    setSelected(checkedItems);
    console.log(selected);
  };
  const valueHandler = (key, value, array) => {
    for (var i = 0; i < checkedItems.length; i++) {
      if (checkedItems[i].name === key.name) {
        var arr = checkedItems.slice(i, i + 1);
        console.log(arr);
        checkedItems.splice(i, 1);
        i--;
      }
    }
    console.log(arr);
    const copy = JSON.parse(JSON.stringify(arr[0]));
    console.log(copy);
    copy["value"] = array.length - value + 1;
    checkedItems.push(copy);
    setCheckedItems(checkedItems);
    console.log(checkedItems);
  };
  return (
    <Container>
      <Title>이 웹툰을 얼마나 좋아하시나요?</Title>
      <Detail>
        최적의 쿠키 소비를 위해서는 {userName}님이 이 웹툰을 얼마나 좋아하는지에
        대한 정보가 필요하답니다. <br />
        ‘내가 사는 쿠키’가 이미 좋아하시는 웹툰을 준비해두었으니, 이 웹툰을
        얼마나 좋아하는지만 알려주세요.
        <br />
        아, 중요한 것을 잊어버릴뻔 했어요! <br />
        특정 웹툰을 대여가 아닌 소장하고 싶다면 해당 웹툰에 체크 버튼을
        눌러주세요! (기본값은 ‘대여’입니다.)
      </Detail>
      <Webtoons>
        {selected.map((webtoon, index, array) => (
          <One>
            <Webtoon
              key={webtoon.id}
              webtoon={webtoon}
              checkedItemHandler={checkedItemHandler}
            ></Webtoon>
            <NumberPicker
              defaultValue={null}
              max={array.length}
              min={1}
              onChange={(value) => valueHandler(webtoon, value, array)}
            />
          </One>
        ))}
      </Webtoons>

      <Button onClick={selectedHandler}>
        <Link to={{ pathname: `/Result/*` }}>
          <img src={CookieImg} style={{ width: "10vh", margin: "1vh" }} />
        </Link>
        <p>
          선택완료 후, <br />
          쿠키를 눌러주세요!
        </p>
      </Button>
    </Container>
  );
}

export default Like;
