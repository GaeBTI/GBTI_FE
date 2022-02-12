import React from "react";
import TestResult from "./../components/resultPage/testResult";
import { useParams } from "react-router-dom";

function Result({mbti}) {
  return (
    <>
      <TestResult mbti={mbti}></TestResult>
    </>
  );
}

export default Result;
