import { createGlobalStyle } from "styled-components";
import Router from "./Router";
import reset from "styled-reset";
import Footer from "./components/Footer";
import NoMobile from "./components/NoMobile";

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

 `;
export default App;
