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