import styled from "styled-components";
import TestBackgroundImg from '../../assets/images/testBackgroundImg.svg';

const TestContainer=styled.div`
  background-size : cover;
  background-image:url(${TestBackgroundImg});
  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction: column;
  font-family:"IM_Hyemin-Regular";
`;

export default TestContainer;