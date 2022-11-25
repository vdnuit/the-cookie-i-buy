import { createGlobalStyle } from "styled-components";
import Router from "./Router";
import reset from "styled-reset";
import Footer from "./components/Footer";
function App() {
  return (
    <>
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
