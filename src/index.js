import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootNode = document.getElementById('root');

ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
  <RecoilRoot>
    <App />
  </RecoilRoot>
  </React.StrictMode>,
);

reportWebVitals();