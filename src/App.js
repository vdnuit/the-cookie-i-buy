import { createGlobalStyle } from "styled-components";
import Router from "./Router";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
  // font import

 `;

function App() {
  return (
    <>
      <Router />
      <GlobalStyle />
    </>
  );
}

export default App;
