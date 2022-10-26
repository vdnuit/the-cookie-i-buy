//Choice 파일의 각 웹툰을 컴포넌트로 만들었습니다. 
//이름, 사진, 체크박스를 담고 있으며 이것이 Choice.js에서 map 함수로 반복됩니다.
import {useState} from 'react';


const Webtoon = ({ webtoon, checkedItemHandler }) => {
  const [bChecked, setChecked] = useState(false);
  
  //checkbox에 클릭 이벤트가 들어오면 체크표시/해제합니다.
  const checkHandler = ({ target }) => {
    setChecked(!bChecked);
    checkedItemHandler(webtoon, target.checked);
    
  };
  return (
    <>
    <img src={webtoon.thumb} style={{width: '100px'}}></img>
    <p>{webtoon.name}</p>
    <input type="checkbox" checked={bChecked} onChange={(e) => checkHandler(e)}/>
    </>
  );
};

export default Webtoon;