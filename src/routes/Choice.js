import { Link } from "react-router-dom";

function Choice() {
  
    return (
      <>
      <div>좋아하는 웹툰을 선택해주세요.</div>
      <button>
        <Link to={{pathname: `/Like/*`,}}>
          다음으로
        </Link>
      </button>
      </>
     
    );
  }
    
    export default Choice;