//Router.js는 routes 폴더 안의 각 페이지를 연결하는 파일이라고 생각하시면 됩니다.
//각 페이지의 위치와 이름, 경로를 지정하고 있습니다.
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./routes/Main";
import Name from "./routes/Name";
import Choice from "./routes/Choice";
import Like from "./routes/Like";
import Result from "./routes/Result";


function Router() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/Name/*" element={<Name />}></Route>
        <Route path="/Choice/*" element={<Choice />}></Route>
        <Route path="/Like/*" element={<Like />}></Route>
        <Route path="/Result/*" element={<Result />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
