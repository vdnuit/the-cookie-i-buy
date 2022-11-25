import { createGlobalStyle } from "styled-components";
import Router from "./Router";
import reset from "styled-reset";
import Footer from "./components/Footer";
import NoMobile from "./components/NoMobile";
import InterTTF from "./assets/Inter.ttf";

function App() {
  return (
    <>
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
