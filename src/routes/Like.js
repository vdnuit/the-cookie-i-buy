import { Link } from "react-router-dom";
import Webtoon from "../components/Webtoon";
import { useRecoilState } from "recoil";
import { selectedAtom } from "../atoms";
import {useState, useEffect} from 'react';

// const PRODUCT_DATA = [
//   { id: null, value: '등수를 선택하세요.' },
//   checkedItems.map((element, index) => (
//     { id: index, value: index }
//   ))
// ];

function Like() {
  const [selected,setSelected] = useRecoilState(selectedAtom);
  const [checkedItems, setCheckedItems] = useState([...selected]);

  const checkedItemHandler = (key, isChecked) => {
    if (isChecked) {
      for(var i = 0; i < checkedItems.length; i++){ 
        if (checkedItems[i].key === key.key) { 
          // 이거 key 말고 name 으로 바꿔야함 요일 별로 같은 key값이 있음... 아래도 마찬가지
          checkedItems.splice(i, 1); 
          i--;
        }
      }
      const copy = JSON.parse(JSON.stringify(key));
      copy["isHave"]=true;
      console.log(copy);
      checkedItems.push(copy);
      setCheckedItems(checkedItems);
    } else if (!isChecked) {
      const copy = JSON.parse(JSON.stringify(key));
      copy["isHave"]=true;
      for(var i = 0; i < checkedItems.length; i++){ 
        if (checkedItems[i].key === key.key) { 
          checkedItems.splice(i, 1); 
          i--;
        }
      }
      copy["isHave"]=false;
      console.log(copy);
      checkedItems.push(copy);
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
    <h1>선호도 입력</h1>
    <p>각 웹툰의 등수를 매기고, 소장 여부 선택해주세요
(기본값은 ‘대여’입니다.)</p>
    {selected.map((webtoon, index) => (
      <>
        <Webtoon key={webtoon.id} webtoon={webtoon} checkedItemHandler={checkedItemHandler}></Webtoon>
        <p>드롭다운</p>
      </>
    ))}
    <button onClick={selectedHandler}>
      <Link to={{pathname: `/Result/*`,}}>
        다음으로
      </Link>
    </button>
    </>
  );
}

export default Like;