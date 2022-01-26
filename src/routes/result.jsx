import React from "react";
import TestResult from "./../components/resultPage/testResult";
import { useParams } from "react-router-dom";

function Result() {
  const {code}=useParams();
  return (
    <>
      <div style={{fontSize:"30px"}}>{code}</div>
      <TestResult></TestResult>
    </>
  );
}

export default Result;
