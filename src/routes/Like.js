import { Link } from "react-router-dom";
import Webtoon from "../components/Webtoon";
import { useRecoilState } from "recoil";
import { selectedAtom } from "../atoms";
import { useState, useEffect } from "react";
import NumberPicker from "react-widgets/NumberPicker";
import Name from "./Name";

function Like() {
  const [selected, setSelected] = useRecoilState(selectedAtom);
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
    <>
      <h1>선호도 입력</h1>
      <p>
        각 웹툰의 등수를 매기고, 소장 여부 선택해주세요 (기본값은 ‘대여’입니다.)
      </p>
      {selected.map((webtoon, index, array) => (
        <>
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
          ;
        </>
      ))}
      <button onClick={selectedHandler}>
        <Link to={{ pathname: `/Result/*` }}>다음으로</Link>
      </button>
    </>
  );
}

export default Like;
