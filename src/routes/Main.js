// 메인페이지입니다 Link를 이용해 다음으로 넘어가는 버튼을 둔 것을 볼 수 있습니다.
import { Link } from "react-router-dom";
import Arrow from "../assets/Arrow.png";

function Main() {
  
    return (
     <div>
        <h1>내가 사는 쿠키</h1>
        <p>내가 사는 쿠키는 Knapsack 알고리즘을 사용하여 네이버 웹툰 사용자에게 합리적인 쿠키 소비를 위한 최적의 쿠키 소비 플랜을 제공합니다.</p>
        <img src={Arrow}/>
        <button>
            <Link to={{pathname: `/Name/*`,}}>
                시작
            </Link>
        </button>
     </div>
    );
  }
    
export default Main;