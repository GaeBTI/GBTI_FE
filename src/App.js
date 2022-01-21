import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Start from "./routes/start";
import Test from "./routes/test";
import Result from "./routes/result";

function App() {
  const [score,setScore]= useState();
  return (
    <div className="App" style={{ width: 375, margin: "auto" }}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Start />}></Route>
          <Route path="/test" element={<Test />}></Route>
          <Route path="/result" element={<Result />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
