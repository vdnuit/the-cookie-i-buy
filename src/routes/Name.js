//이름과 쿠키를 입력하면 이를 각 Atom에 저장하는 Name.js입니다.
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userNameAtom, monCookieAtom } from "../atoms";
import CookieImg from "../assets/CookieImg.png";
import { useEffect } from "react";
const Container = styled.div`
  background-color: #fafafa;
  padding: 5vw;
`;

const Title = styled.h1`
  letter-spacing: -0.5vh;
  font-family: Inter;
  font-style: normal;
  font-weight: 100;
  font-size: 8vh;
  line-height: 10vh;
  color: #464646;
  margin: 2vw 0vw;
`;
const Detail = styled.p`
  letter-spacing: -0.2vh;
  font-family: Inter;
  font-weight: 400;
  font-size: 3vh;
  line-height: 4vh;
  color: #464646;
`;
const Questions = styled.div`
  margin: 3vw 0vw;
  display: flex;
`;
const Question = styled.h2`
  letter-spacing: -0.2vh;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 6vh;
  line-height: 7vh;
  width: 45vw;
  color: #464646;
  min-width: 200px;
`;
const Input = styled.input`
  padding: 2vh 1vw;
  font-size: 3vh;
  margin: 3vh 0px;
  font-family: "Inter";
  border: 1px solid #61d271;
  border-radius: 1vh;
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

function Name() {
  const [name, setNameAtom] = useRecoilState(userNameAtom);
  const [cookie, setCookieAtom] = useRecoilState(monCookieAtom);
  useEffect(() => {
    setNameAtom("");
  }, []);
  const onNameHandler = (event) => {
    setNameAtom(event.currentTarget.value);
  };
  const onCookieHandler = (event) => {
    setCookieAtom(event.currentTarget.value);
  };

  return (
    <Container>
      <Title>기본 정보를 입력해주세요!</Title>
      <Detail>
        ‘내가 사는 쿠키’가 최적의 쿠키 소비를 알려드릴 수 있게 기본 정보를
        입력해주세요. <br />
        이름과 소비 예정인 쿠키 개수만 알려주시면 된답니다! <br />
        입력된 정보는 저장되지 않으니 걱정하시지 않으셔도 됩니다:-)
      </Detail>
      <Questions>
        <Question>
          <p>
            당신의 이름은
            <br />
            무엇인가요?
          </p>
          <Input
            valutype="text"
            value={name}
            onChange={onNameHandler}
            placeholder="이름 입력"
          ></Input>
        </Question>

        <Question>
          <p>
            이번 달 몇 개의
            <br />
            쿠키를 소비할 예정인가요?
          </p>
          <Input
            valutype="text"
            value={cookie}
            onChange={onCookieHandler}
            placeholder="이번 달의 쿠키 개수"
          ></Input>
        </Question>
      </Questions>
      <Button>
        <Link to={{ pathname: `/Choice/*` }}>
          <img src={CookieImg} style={{ width: "10vh", margin: "1vh" }} />
        </Link>
        <p>쿠키를 눌러주세요!</p>
      </Button>
    </Container>
  );
}

export default Name;
