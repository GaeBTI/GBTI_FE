import { React } from "react";
import { isMobile } from "react-device-detect";
import styled from "styled-components";
import { ModalCancelBtnBg } from "./modalIcon";

const Modal=({children, setIsOpen, w, h })=>{
    const fWidth= isMobile? window.innerWidth :375;
    return <ModalPageBox style={{top:window.scrollY}} onClick={ (e)=>e.stopPropagation()}>
        <ModalBox style={{width:w, height:h}}>
        <ModalCancelBtn style={{top:(window.innerHeight-h)/2-10, right:(fWidth-w)/2-10}} onClick={()=>setIsOpen((cur)=>!cur)}><ModalCancelBtnBg/></ModalCancelBtn>
            {children}
        </ModalBox>
    </ModalPageBox>;
}

const ModalPageBox=styled.div`
    position:absolute;
    width:${isMobile?`100vw`:`375px`};
    height:calc(var(--vh, 1vh) * 100);
    background:#00000080;
    z-index:10000;

    display: flex;
    align-items: center;
    justify-content:center;
`;

const ModalBox=styled.div`
    background:white;
    border-radius:10px;

    overflow:auto;
`;

const ModalCancelBtn=styled.button`
    width:35px;
    height:35px;
    padding:0px;
    
    margin-top:2px;
    margin-right:2px;
    float:right;
`;
export default Modal;