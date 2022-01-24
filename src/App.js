import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Start from "./routes/start";
import Test from "./routes/test";
import Result from "./routes/result";
import Loading from "./routes/loading";

function App() {
  const [scores,setScores]= useState([
    {
      type:"EnI",
      score:0
    },
    {
      type:"NnS",
      score:0
    },
    {
      type:"TnF",
      score:0
    },
    {
      type:"PnJ",
      score:0
    },
  ]); // EnI, NnS, TnF, PnJ
  console.log('app',scores);
  return (
    <div className="App" style={{ width: 375, margin: "auto" }}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Start />}></Route>
          <Route path="/test" element={<Test setScores={setScores}/>}></Route>
          <Route path="/loading" element={<Loading finalScores={scores} />}></Route>
          <Route path="/result" element={<Result />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
