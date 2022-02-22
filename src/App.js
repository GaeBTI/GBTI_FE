import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Start from "./routes/start";
import Test from "./routes/test";
import Result from "./routes/result";
import Loading from "./routes/loading";
import Deco from "./routes/deco";
import Card from "./routes/card";
const { Kakao } = window;
const JAVASCRIPT_KEY = process.env.REACT_APP_KAKAO_KEY;
const getCode = (scores) => {
  let code = "";
  for (let scoreObj of scores) {
    //if score==0 > 에러 처리 필요
    code += scoreObj.score > 0 ? scoreObj.type[0] : scoreObj.type[2];
    console.log("code", code);
    console.log(scoreObj.type[2]);
  }
  return code;
};
function App() {
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
  const [mbti, setMBTI] = useState("INFP");
  console.log("app", scores);
  const [cardUri, setCardUri] = useState("");
  useEffect(() => {
    if (!Kakao.isInitialized()) {
      Kakao.init(JAVASCRIPT_KEY);
      console.log("kakadosodfo", Kakao.isInitialized());
    }
  }, []);
  return (
    <div className="App" style={{ width: 375, margin: "auto" }}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Start />}></Route>
          <Route path="/test" element={<Test setScores={setScores} />}></Route>
          <Route
            path="/loading"
            element={<Loading finalScores={scores} setMBTI={setMBTI} />}
          ></Route>
          <Route
            path="/result"
            element={<Result mbti={mbti} cardUri={cardUri} />}
          ></Route>
          <Route
            path="/deco"
            element={<Deco mbti={mbti} setCardUri={setCardUri} />}
          ></Route>
          <Route path="/card" element={<Card mbti={mbti} />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
