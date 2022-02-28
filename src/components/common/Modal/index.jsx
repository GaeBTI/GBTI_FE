import { React } from "react";
import styled from "styled-components";
import { ModalCancelBtnBg } from "./modalIcon";
const ModalPageBox=styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:#00000080;
    z-index:10000;

    display: flex;
    align-items: center;
    justify-content:center;
`;

const ModalBox=styled.div`
    width:335px;
    height:488px;

    background:white;
    border-radius:10px;
    
    display: flex;
    align-items: center;
    justify-content:center;
`;

const ModalCancelBtn=styled.button`
    width:35px;
    height:35px;
    padding:0px;

    position:absolute;
    top:22%;
    right:7%;
`;
const Modal=({children, setIsOpen})=>{
    return <ModalPageBox>
        <ModalBox>
        <ModalCancelBtn onClick={()=>setIsOpen((cur)=>!cur)}><ModalCancelBtnBg/></ModalCancelBtn>
            {children}
        </ModalBox>
    </ModalPageBox>;
}

export default Modal;