import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Loading=({finalScores})=>{
    let navigate = useNavigate();
    useEffect(() => {
		setTimeout(() => navigate(`/result`), 2000);
	}, [navigate,finalScores]);
    return(
        <>
        <div>loading..</div>
        <div>
            {finalScores.map((score,i)=>{
                return (<div key={i}>
                    <span>{score.type}</span>
                    <br/>
                    <span>{score.score}</span>
                </div>);
            })}
        </div>
        </>
    );
}
export default Loading;