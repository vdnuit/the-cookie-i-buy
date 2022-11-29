//Router.js는 routes 폴더 안의 각 페이지를 연결하는 파일이라고 생각하시면 됩니다.
//각 페이지의 위치와 이름, 경로를 지정하고 있습니다.
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./routes/Main";
import Name from "./routes/Name";
import Choice from "./routes/Choice";
import Like from "./routes/Like";
import Result from "./routes/Result";
import Header from "./components/Header";

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} errorElement={<Main />}></Route>
        <Route
          path="/Name/*"
          element={<Name />}
          errorElement={<Main />}
        ></Route>
        <Route
          path="/Choice/*"
          element={<Choice />}
          errorElement={<Main />}
        ></Route>
        <Route
          path="/Like/*"
          element={<Like />}
          errorElement={<Main />}
        ></Route>
        <Route
          path="/Result/*"
          element={<Result />}
          errorElement={<Main />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
