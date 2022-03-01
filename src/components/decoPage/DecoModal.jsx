import { React } from "react";
import styled from "styled-components";
import Modal from "../common/Modal";
import { ModalExImg } from "./decoIcon";
const ContentBox=styled.div`
    width:335px;
    height:488px;
    
    display: flex;
    align-items: center;
    justify-content:center;
    flex-direction: column;
`;
const ContentText=styled.div`
    width: 284px;
    height: 126px;
    margin-top:29px;

    font-family: IM_Hyemin-Regular;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 40px;

    text-align: center;
`;
const DecoModal =({setIsOpen})=>{
    return <Modal setIsOpen={setIsOpen} w={335} h={488}>
        <ContentBox>
            <ModalExImg/>
            <ContentText>
                다양한 스티커를 통해<br/>나만의 캐릭터 카드를<br/>꾸며보세요!
            </ContentText>
        </ContentBox>
    </Modal>
}
export default DecoModal;