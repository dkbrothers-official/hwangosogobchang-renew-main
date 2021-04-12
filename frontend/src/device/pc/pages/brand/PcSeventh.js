import React from "react";
import styled from "styled-components";
const PageStyle = styled.div`
  width: 1920px;
  height: 1080px;
  background-image: url("./pc/brand_seventh_bg.png");
  background-size: 100% 100%;
`;
const InnerContainer = styled.div`
  padding-top: 290px;
  padding-left: 250px;
  padding-right: 250px;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImageStyle = styled.img`
  width: 437px;
  height: 610px;
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const IconStyle = styled.img`
  width: 215px;
  height: 50px;
`;
const TitleFont = styled.div`
  font-size: 60px;
  font-weight: bold;
  line-height: 80px;
  color: #ffffff;
  text-align: right;
`;
const MainFont = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 33px;
  color: #ffffff;
  text-align: right;
`;
function PcSeventh() {
  return (
    <PageStyle>
      <InnerContainer>
        <Container>
          <ImageStyle src="./pc/brand_seventh_img.png" />
          <RightContainer>
            <IconStyle src="./pc/brand_seventh_icon.png" />
            <TitleFont>특허출원</TitleFont>
            <MainFont>
              더 신선하고 더 나은 재료로 맛에 최선을
              <br />
              다하며 최상의 맛을 유지하는 뿔난 황소곱창입니다.
            </MainFont>
          </RightContainer>
        </Container>
      </InnerContainer>
    </PageStyle>
  );
}

export default PcSeventh;
