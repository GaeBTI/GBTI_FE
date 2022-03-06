import styled from "styled-components";
import { RefreshBtnBg } from "./decoIcon";

const RefreshButton =({doRefresh})=>{
    return <RefreshBox>
    <RefreshBtn onClick={doRefresh}>
      <RefreshButtonBGBox>
        <RefreshBtnBg />
      </RefreshButtonBGBox>
      <RefreshText>초기화</RefreshText>
    </RefreshBtn>
  </RefreshBox>
}
const RefreshBox = styled.div`
  width: 111px;
  height: 48px;
  position: relative;
  margin-right:20px;
`;
const RefreshBtn = styled.div`
  padding:0;
`;
const RefreshText = styled.div`
  width: 111px;
  height: 48px;
  position: absolute;
  font-family: "IM_Hyemin-Regular";
  font-size: 25px;
  line-height: 48px;
  text-align: center;
  color: #000000;
`;
const RefreshButtonBGBox = styled.div`
  position: absolute;
`; //4,11
export default RefreshButton;