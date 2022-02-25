import styled from "styled-components";
import backgroundImg from "../../assets/images/background.svg";

const Container=styled.div`
  height:100vh;
  background-size : cover;
  background-image:url(${backgroundImg});

  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction: column;
`;
//background-image:url("/public/images/background.svg");
// const Container=()=>{
//   return <ContainerDiv></ContainerDiv>
// }

export default Container;