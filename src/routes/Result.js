import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { selectedAtom, monCookieAtom, userNameAtom } from "../atoms";
function Result() {
  const [selected, setSelected] = useRecoilState(selectedAtom);
  const [cookies, setCookies] = useRecoilState(monCookieAtom);
  console.log(selected);
  console.log(cookies);
  let finalResult = {
    weight: 0,
    optimalValue: 0,
    solution: [],
  };
  let countNode = 0;
  let bounds = [];

  let data = {
    weights: [3, 2, 3, 4],
    values: [2, 3, 100, 2],
    limitWeight: cookies,
  };
  const branchAndBound = (data) => {
    for (let i = data.values.length - 1; i >= 0; i--) {
      bounds = [data.values[i] + (bounds[0] || 0)].concat(bounds);
    }

    dfs([], 0, data.weights, data.values, data.limitWeight);
    finalResult.countNode = countNode;
    return finalResult;
  };

  const validateBound = (tempArr, values, finalResult, bounds) => {
    //calculate sum value
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
    //reach the end of state-space search tree
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
  return <div>Result</div>;
}

export default Result;
