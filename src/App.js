import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styles from "./app.module.css";
import Start from "./routes/start";
import Test from "./routes/test";
import Result from "./routes/result";

function App() {
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
