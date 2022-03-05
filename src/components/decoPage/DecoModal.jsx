import { React } from "react";
import styled from "styled-components";
import Modal from "../common/Modal";
import { ModalExImg } from "./decoIcon";

const DecoModal =({setIsOpen})=>{
    return <Modal setIsOpen={setIsOpen} w={335} h={488}>
        <ContentBox>
            <ModalExImg/>
            <ContentTextBox>
                <TitleText style={{fontSize:"22px"}}>나만의 캐릭터 카드 꾸미기</TitleText>
                <ContentText>
                    다양한 스티커와 배경을 통해<br/>
                    나만의 GBTI 캐릭터 카드를 만들어보세요!<br/>
                    스티커는 자유롭게 회전, 크기조절이 가능합니다.<br/>
                </ContentText>
            </ContentTextBox>
        </ContentBox>
    </Modal>
}
const ContentBox=styled.div`
    width:335px;
    
    display: flex;
    align-items: center;
    justify-content:center;
    flex-direction: column;
`;
const ContentTextBox=styled.div`
    width: 274px;
    height: 126px;
    margin-top:13px;

    font-family: IM_Hyemin-Regular;
    font-style: normal;
    font-weight: bold;
`;
const TitleText=styled.div`
    height: 38px;
    margin-bottom:8px;

    font-size: 22px;
    line-height: 40px;

    color: #3A3A3A;
`;
const ContentText=styled.div`
    height: 80px;

    font-size: 14px;
    line-height: 27px;
    
    color: #635C5C;
`;
export default DecoModal;