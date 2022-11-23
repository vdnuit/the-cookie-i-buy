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
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
  // font import

 `;
export default App;
