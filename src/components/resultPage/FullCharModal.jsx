import { React } from "react";
import styled from "styled-components";
import { MBTIS } from "../../assets/texts/results";
import Modal from "../common/Modal";// components/common/Modal/index.jsx"
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

    background: #EDFFF9;

    display:flex;
    justify-content: center;
    align-items: center;
`
const CharImg=styled.img`
    width:120px;
    height:120px;
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
`;
const FullCharModal=({setIsOpen})=>{
    console.log(Object.keys(MBTIS));
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

export default FullCharModal;