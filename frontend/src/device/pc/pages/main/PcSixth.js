import React from "react";
import styled from "styled-components";
const PageStyle = styled.div`
  width: 1920px;
  height: 1080px;
  background-image: url("./pc/pc_sixth_bg.png");
`;
const InnerContainer = styled.div`
  padding-right: 255px;
  padding-left: 255px;
  display: flex;
  flex-direction: column;
`;
const TopContainer = styled.div`
  margin-top: 130px;
  display: flex;
  justify-content: space-between;
`;
const LeftText = styled.div`
  font-size: 50px;
  line-height: 65px;
  font-weight: bold;
  color: #ffffff;
`;
const ColorFont = styled.div`
  display: inline;
  color: #e4c893;
`;
const RightText = styled.div`
  font-size: 28px;
  line-height: 41px;
  font-weight: 500;
  color: #ffffff;
  text-align: right;
`;
const IconContainer = styled.div`
  margin-top: 186px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const IconStyle = styled.img`
  width: 300px;
  height: 300px;
`;
function PcSixth() {
  return (
    <PageStyle>
      <InnerContainer>
        <TopContainer>
          <LeftText>
            <ColorFont>제대로 뿔난</ColorFont>
            <br />
            곱창의 명가 황소곱창
          </LeftText>
          <RightText>
            황소곱창은 홀운영과 더불어 배달, 포장까지
            <br />
            함께 운영한 시스템을 제공해드리고 있으며,
            <br />
            언택트 시대에 보다 안정적인 매출 운영을
            <br />할 수 있도록 최선의 지원을 약속드립니다.
          </RightText>
        </TopContainer>
        <IconContainer>
          <IconStyle src="./pc/pc_sixth_icon1.svg" />
          <img src="./pc/plus_icon.svg" />
          <IconStyle src="./pc/pc_sixth_icon2.svg" />
          <img src="./pc/plus_icon.svg" />
          <IconStyle src="./pc/pc_sixth_icon3.svg" />
          <img src="./pc/equal_icon.svg" />
          <IconStyle src="./pc/pc_sixth_icon4.svg" />
        </IconContainer>
      </InnerContainer>
    </PageStyle>
  );
}
export default PcSixth;
