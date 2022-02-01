import React from "react";
import TestResult from "./../components/resultPage/testResult";
import { useParams } from "react-router-dom";

function Result() {
  const { code } = useParams();
  return (
    <>
      <TestResult mbti={code}></TestResult>
    </>
  );
}

export default Result;
