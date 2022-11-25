import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  z-index: 99;
  height: 300vh;
  background-color: #61d271;
  width: 100vw;
  display: flex;
  justify-content: center;
  top: 0;
  p {
    margin: 25vw;
    color: white;
    font-size: 3vw;
  }
`;
function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function NoMobile() {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);

    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });
  return (
    <>
      {dimensions.width < 700 ? (
        <Container>
          <p>
            화면 너비가 충분하지 않습니다. <br />
            웹으로 접속해주세요.
          </p>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
}

export default NoMobile;
