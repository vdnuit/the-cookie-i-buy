import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userNameAtom, monCookieAtom } from "../atoms";

function Name() {
  
  const [name, setNameAtom] = useRecoilState(userNameAtom);
  const [cookie, setCookieAtom] = useRecoilState(monCookieAtom);

  const onNameHandler=(event) => {
    setNameAtom(event.currentTarget.value);
  }
  const onCookieHandler=(event) => {
    setCookieAtom(event.currentTarget.value);
  }

  return (
    <>
      <div>당신의 이름은 무엇인가요?</div>
      <input valutype="text" value={name} onChange={onNameHandler} placeholder="유저이름"></input>
      
      <div>이번 달 몇 개의 쿠키를 소비할 예정인가요?</div>
      <input valutype="text" value={cookie} onChange={onCookieHandler} placeholder="이번 달의 쿠키"></input>
      <button>
        <Link to={{pathname: `/Choice/*`,}}>
          다음으로
        </Link>
      </button>
    </>
  );
}
    
export default Name;