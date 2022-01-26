import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TESTS } from "../assets/texts/questions"
import {TestContainer,QuestionSection,AnswerSection} from "../components/testPage";

function Test({setScores}) {
  let navigate=useNavigate();
  const[currentNum,setCurrentNum]=useState(0);
  const handleClick = (type,clickedFirst) => {
    console.log(type,clickedFirst);
    setScores((scores)=>{
      let newScores = scores.map((scoreObj)=>{
        return (scoreObj.type===type 
        ? ( clickedFirst
            ? {...scoreObj,score:scoreObj.score+1}
            : {...scoreObj,score:scoreObj.score-1}
          ): scoreObj
        )
      })
      console.log(newScores);
      return newScores;
    });
    if(currentNum===TESTS.length-1){
      console.log("last page of Test");
      navigate("/loading");
    } else{
      setCurrentNum((currentNum)=>currentNum+1);
    }
	};
  return (
    <TestContainer>
        <QuestionSection currentNum={currentNum}/>
        <AnswerSection currentNum={currentNum} handleClick={handleClick}/>
    </TestContainer>
    );
}

export default Test;