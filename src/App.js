import { createGlobalStyle } from "styled-components";
import Router from "./Router";
import reset from "styled-reset";
import Footer from "./components/Footer";
import NoMobile from "./components/NoMobile";
import InterTTF from "./assets/Inter.ttf";
import Helmet from "react-helmet";
import CookieImg from "./assets/CookieImg.png";

function App() {
  return (
    <>
      <Helmet>
        <title>내가 사는 쿠키</title>
        <meta
          name="description"
          content="네이버 웹툰 쿠키 계산 서비스인 <내가 사는 쿠키>입니다."
        />

        <link rel="icon" href={CookieImg} />
      </Helmet>
      <NoMobile />
      <Router />
      <GlobalStyle />
      <Footer />
    </>
  );
}
const GlobalStyle = createGlobalStyle`
  ${reset}
  // font import
  @font-face {
    font-family: 'Inter';
    src: local('Inter'), local('Inter');
    font-style: normal;
    src: url(${InterTTF}) format('truetype');
}
 `;
export default App;
