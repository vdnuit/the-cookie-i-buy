import { createGlobalStyle, ThemeProvider } from "styled-components";
import Router from "./Router";
import Header from "./components/Header";
import { darkTheme, lightTheme } from "./theme";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atoms";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
  // font import

 `;

function App() {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <> 
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header></Header>
      <Router />
    </ThemeProvider>
    </>
  );
}

export default App;