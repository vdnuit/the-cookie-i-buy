import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { selectedAtom } from "../atoms";
function Result() {
  const [selected,setSelected] = useRecoilState(selectedAtom);
  console.log(selected);
    return (
     <div>Result</div>
    );
  }
    
export default Result;