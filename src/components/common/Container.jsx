import styled from "styled-components";
import TestBackgroundImg from '../../assets/images/testBackgroundImg.svg';

const Container=styled.div`
  height:100vh;
  background-size : cover;
  background-image:url(${TestBackgroundImg});

  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction: column;
`;
export default Container;