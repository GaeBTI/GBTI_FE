import React from "react";
import TestResult from "./../components/resultPage/testResult";
import { useParams } from "react-router-dom";

function Result({code}) {
  return (
    <>
      <TestResult mbti={code}></TestResult>
    </>
  );
}

export default Result;
