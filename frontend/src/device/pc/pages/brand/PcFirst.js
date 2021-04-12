import React from "react";
import styled from "styled-components";
const PageStyle = styled.div`
  padding-top: 100px;
  width: 1920px;
  height: 980px;
`;
const InnerContainer = styled.div`
  background-image: url("./pc/brand_first_bg.png");
  width: 1920px;
  background-size: 100% 100%;
  height: 980px;
`;
const Titlefont = styled.div`
  padding-top: 280px;
  padding-left: 250px;
  font-size: 60px;
  font-weight: bold;
  line-height: 80px;
  color: #ffffff;
`;
const ColorFont = styled.div`
  display: inline;
  color: #fdc559;
`;
const VerticalLine = styled.div`
  margin-top: 134px;
  margin-left: 280px;
  border-right: 1px solid #ffffff;
  width: 1px;
  height: 50px;
`;
const ScrollFont = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
  color: #ffffff;
  margin-left: 250px;
  margin-top: 15px;
`;
function PcFirst() {
  return (
    <PageStyle>
      <InnerContainer>
        <Titlefont>
          소곱창을 문화로 만들고
          <br />
          웃음과 이야기가 가득한 공간으로 만드는
          <br />
          <ColorFont>‘뿔난 황소곱창’</ColorFont>입니다.
        </Titlefont>
        <VerticalLine></VerticalLine>
        <ScrollFont>SCROLL</ScrollFont>
      </InnerContainer>
    </PageStyle>
  );
}

export default PcFirst;
