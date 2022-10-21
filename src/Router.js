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
