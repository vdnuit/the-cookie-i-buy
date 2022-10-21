import { Link } from "react-router-dom";

function Main() {
  
    return (
     <div>
        <h1>내가 사는 쿠키</h1>
        <p>내가 사는 쿠키는 네이버 웹툰 사용자에게 합리적인 쿠키 소비를 위한 최적의 쿠키 소비 플랜을 제공합니다.</p>
        <button>
            <Link to={{pathname: `/Name/*`,}}>
                시작
            </Link>
        </button>
     </div>
    );
  }
    
export default Main;