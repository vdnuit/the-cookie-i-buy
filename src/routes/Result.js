import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { selectedAtom, monCookieAtom, userNameAtom } from "../atoms";
function Result() {
  const [selected, setSelected] = useRecoilState(selectedAtom);
  const [cookies, setCookies] = useRecoilState(monCookieAtom);
  const [name, setName] = useRecoilState(userNameAtom);

  console.log(selected);
  console.log(cookies);
  // 여기부터
  let finalResult = {
    weight: 0,
    optimalValue: 0,
    solution: [],
  };
  let countNode = 0;
  let bounds = [];
  let finalWebtoons = [];
  // 여기까지 터치 금지
  let data = {
    weights: [],
    values: [],
    limitWeight: cookies,
  };
  for (var i = 0; i < selected.length; i++) {
    data.values.push(selected[i].value);
  }
  for (i = 0; i < selected.length; i++) {
    var weight = 0;
    if (selected[i].isHave === true) {
      weight = selected[i].have * 4;
    }
    if (selected[i].isHave === false) {
      weight = selected[i].rend * 4;
    }
    data.weights.push(weight);
  }
  const branchAndBound = (data) => {
    for (let i = data.values.length - 1; i >= 0; i--) {
      bounds = [data.values[i] + (bounds[0] || 0)].concat(bounds);
    }

    dfs([], 0, data.weights, data.values, data.limitWeight);
    finalResult.countNode = countNode;
    return finalResult;
  };

  const validateBound = (tempArr, values, finalResult, bounds) => {
    let sumValue = 0;
    for (let i = 0; i < tempArr.length; i++) {
      if (tempArr[i] === 1) {
        sumValue += values[i];
      }
    }

    if (finalResult.optimalValue > sumValue + bounds[tempArr.length - 1])
      return false;
    return true;
  };

  const dfs = (tempArr, index, weights, values, limitWeight) => {
    countNode++;
    if (index === weights.length) {
      let sumWeight = 0;
      let sumValue = 0;

      for (let i = 0; i < tempArr.length; i++) {
        if (tempArr[i] === 1) {
          sumWeight += weights[i];
          sumValue += values[i];
        }
      }

      //update optimal solution if found
      if (sumWeight <= limitWeight && sumValue > finalResult.optimalValue) {
        finalResult.weight = sumWeight;
        finalResult.optimalValue = sumValue;
        finalResult.solution = tempArr;
      }

      return;
    }

    if (!validateBound(tempArr, values, finalResult, bounds)) {
      return;
    }

    dfs(tempArr.concat(0), index + 1, weights, values, limitWeight);
    dfs(tempArr.concat(1), index + 1, weights, values, limitWeight);
  };

  branchAndBound(data);
  console.log(finalResult);
  for (i = 0; i < finalResult.solution.length; i++) {
    if (finalResult.solution[i] == 1) {
      finalWebtoons.push(selected[i]);
    }
  }
  console.log(finalWebtoons);
  return (
    <>
      <h1>
        이번 달,
        <br />
        이렇게 쿠키를 구워보는 건 어때요?
      </h1>
      <p>
        {name} 님이 입력해주신 정보들을 바탕으로 ‘내가 만든 쿠키’가 최적의 쿠키
        소비 방법을 뽑아왔어요!
        <br />
        만족스러운 쿠키 소비가 되었으면 좋겠어요:-)
      </p>
      <h2>
        이번 달 {cookies}개의 쿠키 소비 플랜입니다.
        <br />
        {finalResult.weight}개를 구워 {cookies - finalResult.weight}개가
        남았습니다.
      </h2>
      {finalWebtoons.map((webtoon) => (
        <>
          <img src={webtoon.thumb} style={{ width: "100px" }} />
          <p>{webtoon.name}</p>
          <p>
            {webtoon.isHave === true ? "소장" : "대여"},{" "}
            {webtoon.isHave === true ? webtoon.have * 4 : webtoon.rend * 4}
          </p>
        </>
      ))}
    </>
  );
}

export default Result;
