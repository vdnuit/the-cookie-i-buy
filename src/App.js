import { createGlobalStyle } from "styled-components";
import Router from "./Router";
import reset from "styled-reset";

function App() {
  return (
    <>
      <Router />
      <GlobalStyle />
    </>
  );
}
const GlobalStyle = createGlobalStyle`
${reset}
  // font import

 `;
export default App;
