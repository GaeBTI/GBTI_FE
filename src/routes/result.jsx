import React from "react";
import TestResult from "./../components/resultPage/testResult";
import { useParams } from "react-router-dom";

function Result({mbti, cardUri}) {
  return (
    <>
      <TestResult mbti={mbti} cardUri={cardUri}></TestResult>
    </>
  );
}

export default Result;
