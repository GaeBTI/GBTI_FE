import React from "react";
import TestResult from "./../components/resultPage/testResult";
import { useParams } from "react-router-dom";
import { HIDES } from "../assets/texts/results";

function Result({ cardUri }) {
  const { hide } = useParams();
  const mbti = Object.keys(HIDES).find((key) => HIDES[key] === hide);
  return (
    <>
      <TestResult mbti={mbti} cardUri={cardUri}></TestResult>
    </>
  );
}

export default Result;
