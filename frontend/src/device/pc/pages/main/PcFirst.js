import React from "react";
import styled from "styled-components";

const PageStyle = styled.div`
  width: 1920px;
  height: 1080px;
  padding-top: 100px;
  background-image: url("./pc/pc_first_bg.png");
  background-size: 100% 100%;
`;
const InnerContainer = styled.div`
  padding-top: 160px;
  text-align: center; ;
`;
const MediumFont = styled.div`
  font-size: 52px;
  font-weight: 400;
  line-height: 75px;
  color: #ffffff;
  display: inline-block;
  height: 75px;
`;
const BoldFont = styled.div`
  margin-top: 40px;
  font-size: 130px;
  font-weight: bold;
  line-height: 91px;
  color: #ffffff;
  height: 200px;
`;
const ColorFont = styled.div`
  display: inline;
  color: #8e111b;
`;
function PcFirst() {
  return (
    <PageStyle>
      <InnerContainer>
        <MediumFont>
          작지만 강한 황소곱창의 <ColorFont>화끈한 누적 판매량</ColorFont>
        </MediumFont>
        <BoldFont>1,158,903인분</BoldFont>
      </InnerContainer>
    </PageStyle>
  );
}

export default PcFirst;
