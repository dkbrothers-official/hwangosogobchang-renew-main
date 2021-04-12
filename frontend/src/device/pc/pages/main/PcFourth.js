import React from "react";
import styled from "styled-components";

const PageStyle = styled.div`
  width: 1920px;
  height: 1080px;
  background-image: url("./pc/pc_fourth_bg.png");
  background-size: cover;
`;
const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TopContainer = styled.div`
  margin-top: 216.4px;
  display: flex;
  align-items: center;
`;
const TitleFont = styled.div`
  font-size: 52px;
  line-height: 75px;
  font-weight: 500;
  color: #ffffff;
`;
const ColorFont = styled.div`
  display: inline;
  color: #c31321;
`;
const IconBox = styled.div`
  margin-top: 98px;
  background-image: url(${(props) => props.url});
  margin-right: ${(props) => props.marginR};
  margin-top: ${(props) => props.marginT};
  background-size: cover;
  width: 340px;
  height: 340px;
`;
const IconContainer = styled.div`
  display: flex;
  height: 474px;
  margin-top: 98px;
  text-align: center;
`;
const StoreFont = styled.div`
  margin-top: 117px;
  font-size: 27px;
  line-height: 38px;
  color: #ffffff;
`;
const NumFont = styled.div`
  margin-top: 12px;
  font-family: Stardos Stencil;
  font-size: 44px;
  font-weight: bold;
  line-height: 77px;
  color: #fdc559;
`;
const ButtonStyle = styled.div`
  margin-left: 50px;
  border-radius: 25px;
  background-color: #8e111b;
  width: 173px;
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
`;
const ButtonFont = styled.div`
  font-size: 16px;
  line-height: 16px;
  color: #ffffff;
  font-weight: bold;
  white-space: nowrap;
`;
const ButtonArrow = styled.img`
  transform: rotate(180deg);
`;
function PcFourth() {
  return (
    <PageStyle>
      <InnerContainer>
        <TopContainer>
          <TitleFont>
            작지만 강한 황소곱창의 <ColorFont>월매출 TOP3!</ColorFont>
          </TitleFont>
          <ButtonStyle>
            <ButtonFont>창업페이지</ButtonFont>
            <ButtonArrow src="./assets/white_arrow.svg" />
          </ButtonStyle>
        </TopContainer>
        <IconContainer>
          <IconBox
            url={"./pc/pc_fourth_icon2.svg"}
            marginR={"50px"}
            marginT={"133px"}
          >
            <StoreFont>목포점</StoreFont>
            <NumFont>98,700,000</NumFont>
          </IconBox>
          <IconBox
            url={"./pc/pc_fourth_icon1.svg"}
            marginR={"50px"}
            marginT={"0"}
          >
            <StoreFont>건대본점</StoreFont>
            <NumFont>143,000,000</NumFont>
          </IconBox>
          <IconBox url={"./pc/pc_fourth_icon3.svg"} marginT={"133px"}>
            <StoreFont>부산덕천점</StoreFont>
            <NumFont>83,400,000</NumFont>
          </IconBox>
        </IconContainer>
      </InnerContainer>
    </PageStyle>
  );
}

export default PcFourth;
