import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Start from "./routes/start";
import Test from "./routes/test";
import Result from "./routes/result";
import Loading from "./routes/loading";
import Deco from "./routes/deco";
import Card from "./routes/card";
import { isMobile } from "react-device-detect";
import ReactGA from "react-ga";

const { Kakao } = window;
const JAVASCRIPT_KEY = process.env.REACT_APP_KAKAO_KEY;
const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;
function App() {
  // 화면 높이에 맞춰 렌더링
  function setScreenSize() {
    let vw = window.innerWidth * 0.01;
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    document.documentElement.style.setProperty("--vw", `${vw}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
  useEffect(() => {
    ReactGA.initialize(GA_TRACKING_ID);
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  const [scores, setScores] = useState([
    {
      type: "EnI",
      score: 0,
    },
    {
      type: "NnS",
      score: 0,
    },
    {
      type: "TnF",
      score: 0,
    },
    {
      type: "PnJ",
      score: 0,
    },
  ]); // EnI, NnS, TnF, PnJ
  const [cardUri, setCardUri] = useState("");
  useEffect(() => {
    if (!Kakao.isInitialized()) {
      Kakao.init(JAVASCRIPT_KEY);
    }
  }, []);
  return (
    <div
      className="App"
      style={isMobile ? { margin: "auto" } : { width: 375, margin: "auto" }}
    >
      <Router>
        <Routes>
          <Route exact path="/" element={<Start />}></Route>
          <Route path="/test" element={<Test setScores={setScores} />}></Route>
          <Route
            path="/loading"
            element={<Loading finalScores={scores} />}
          ></Route>
          <Route
            path="/result/:hide"
            element={<Result cardUri={cardUri} />}
          ></Route>
          <Route
            path="/deco/:hide"
            element={<Deco setCardUri={setCardUri} />}
          ></Route>
          <Route path="/card/:hide" element={<Card />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
