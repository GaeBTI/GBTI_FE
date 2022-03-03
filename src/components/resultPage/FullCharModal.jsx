import { React, useEffect } from "react";
import styled from "styled-components";
import { MBTIS } from "../../assets/texts/results";
import Modal from "../common/Modal";// components/common/Modal/index.jsx"

const FullCharModal=({setIsOpen})=>{
    console.log(Object.keys(MBTIS));
    // 모달 오버레이에서 스크롤 방지
    useEffect(() => {
        document.body.style.cssText = `
        position: fixed; 
        top: -${window.scrollY}px;
        overflow-y: scroll;
        width: 100%;`;
        return () => {
        const scrollY = document.body.style.top;
        document.body.style.cssText = '';
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        };
    }, []);
    return <Modal setIsOpen={setIsOpen} w={335} h={608}>
        <ContentBox>
            <TitleText>전체 결과 보기</TitleText>
            {
                Object.keys(MBTIS).map((mbti,idx)=>(
                    <MbtiCardBox key={idx}>
                        <CharImg src={require(`../../assets/images/characters/${mbti}.png`)}></CharImg>
                        <CharKeyBox>
                            <CharKeySentenceText>
                                <div>{MBTIS[mbti].keySentence1}</div>
                                <div>{MBTIS[mbti].keySentence2}</div>
                            </CharKeySentenceText>
                            <CharKeyWordText>
                                <div>{MBTIS[mbti].keyWord1}</div>
                                <div>{MBTIS[mbti].keyWord2}</div>
                            </CharKeyWordText>
                        </CharKeyBox>
                    </MbtiCardBox>
                ))
            }
        </ContentBox>
    </Modal>
}
const ContentBox=styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    font-family: IM_Hyemin-Regular;
    padding:10px;
`;
const TitleText=styled.div`
    width: 167px;
    height: 31px;
    margin-top:28px;

    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 26px;

    text-align: center;
`;
const MbtiCardBox=styled.div`
    width: 305px;
    height: 137px;
    margin-top:17px;

    background: #FFFDF1;

    display:flex;
    justify-content: center;
    align-items: center;
`
const CharImg=styled.img`
    width:120px;
    height:120px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5));
`;
const CharKeyBox=styled.div`
    width:180px;
    height:70px;

    font-weight: 900;
`;
const CharKeySentenceText=styled.div`
    font-size: 15px;
    line-height: 22px;

    color: #585858;
`;
const CharKeyWordText=styled.div`
    font-size: 20px;
    line-height: 26px;
    color: #3C3C3C;
    -webkit-text-stroke: 0.75px #3C3C3C;
`;
export default FullCharModal;