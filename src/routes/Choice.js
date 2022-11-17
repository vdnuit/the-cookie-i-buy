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
import { webtoonsAtom, selectedAtom } from "../atoms";
import { useState } from "react";

function Choice() {
  const [webtoons, setWebtoons] = useRecoilState(webtoonsAtom);
  const [selected, setSelected] = useRecoilState(selectedAtom);
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
    <>
      <div>좋아하는 웹툰을 선택해주세요.</div>
      {/* 웹툰 정보들을 Webtoon으로 전송 */}
      {webtoons.Mon.map((webtoon, index) => (
        <>
          <Webtoon
            key={webtoon.id}
            webtoon={webtoon}
            checkedItemHandler={checkedItemHandler}
          ></Webtoon>
        </>
      ))}
      {webtoons.Tue.map((webtoon, index) => (
        <>
          <Webtoon
            key={webtoon.id}
            webtoon={webtoon}
            checkedItemHandler={checkedItemHandler}
          ></Webtoon>
        </>
      ))}
      {webtoons.Wed.map((webtoon, index) => (
        <>
          <Webtoon
            key={webtoon.id}
            webtoon={webtoon}
            checkedItemHandler={checkedItemHandler}
          ></Webtoon>
        </>
      ))}
      {webtoons.Thu.map((webtoon, index) => (
        <>
          <Webtoon
            key={webtoon.id}
            webtoon={webtoon}
            checkedItemHandler={checkedItemHandler}
          ></Webtoon>
        </>
      ))}
      {webtoons.Fri.map((webtoon, index) => (
        <>
          <Webtoon
            key={webtoon.id}
            webtoon={webtoon}
            checkedItemHandler={checkedItemHandler}
          ></Webtoon>
        </>
      ))}
      {webtoons.Sat.map((webtoon, index) => (
        <>
          <Webtoon
            key={webtoon.id}
            webtoon={webtoon}
            checkedItemHandler={checkedItemHandler}
          ></Webtoon>
        </>
      ))}
      {webtoons.Sun.map((webtoon, index) => (
        <>
          <Webtoon
            key={webtoon.id}
            webtoon={webtoon}
            checkedItemHandler={checkedItemHandler}
          ></Webtoon>
        </>
      ))}
      <button onClick={selectedHandler}>
        <Link to={{ pathname: `/Like/*` }}>다음으로</Link>
      </button>
    </>
  );
}

export default Choice;
