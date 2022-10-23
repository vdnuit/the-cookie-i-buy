//웹툰을 선택하는 페이지입니다.
//전체적인 구조는 체크박스 클릭->해당 아이템 리스트에 복사->확인 버튼 클릭->리스트를 Atom에 복사 가 될 예정입니다.
/*
[미완료된 것]
1. checkedItems submit 버튼 누르면 SelectedAtom으로 전송해아함.
2. 현재 월요일 웹툰만 목록으로 적용된 상황. 다른 요일도 테스트 해보기
3. styled component 미적용
*/
import { Link } from "react-router-dom";
import Webtoon from "./Webtoon";
import { useRecoilState } from "recoil";
import { webtoonsAtom } from "../atoms";
import {useState} from 'react';

function Choice() {
  const [webtoons,setWebtoons] = useRecoilState(webtoonsAtom);
  const [checkedItems, setCheckedItems] = useState(new Set());
  const checkedItemHandler = (key, isChecked) => {
    if (isChecked) {
      checkedItems.add(key);
      setCheckedItems(checkedItems);
    } else if (!isChecked && checkedItems.has(key)) {
      checkedItems.delete(key);
      setCheckedItems(checkedItems);
    }
    
    {console.log(checkedItems)}
  };
  return (
    <>
    <div>좋아하는 웹툰을 선택해주세요.</div>
    {/* 웹툰 정보들을 Webtoon으로 전송 */}
    {webtoons.Mon.map((webtoon, index) => (
      <>
        <Webtoon key={webtoon.id} webtoon={webtoon} checkedItemHandler={checkedItemHandler}></Webtoon>
      </>
    ))}
    <button>
      <Link to={{pathname: `/Like/*`,}}>
        다음으로
      </Link>
    </button>
    </>
     
  );
}
    
export default Choice;