import React from "react";
import styled from "styled-components";

const PageStyle = styled.div`
  background-image: url("./pc/brand_second_bg.png");
  background-size: 100% 100%;
  width: 1920px;
  height: 1080px;
`;
const InnerContainer = styled.div`
  padding-top: 260px;
  padding-left: 250px;
  display: flex;
`;
const LeftContainer = styled.div`
  margin-right: 300px;
`;
const IconStyle = styled.img`
  width: 207px;
  height: 48px;
`;
const LeftFont = styled.div`
  font-size: 60px;
  font-weight: bold;
  line-height: 80px;
  color: #ffffff;
`;
const ColorFont = styled.div`
  display: inline;
  color: #8e111b;
`;
const RightBoldFont = styled.div`
  font-size: 20px;
  font-weight: bold;
  line-height: 35px;
  color: #ffffff;
`;
const RightRegularFont = styled.div`
  margin-top: 50px;
  font-size: 20px;
  font-weight: 500;
  line-height: 35px;
  color: #ffffff;
`;
function PcSecond() {
  return (
    <PageStyle>
      <InnerContainer>
        <LeftContainer>
          <IconStyle src="./pc/brand_second_icon.png" />
          <LeftFont>
            <ColorFont>곱창의 명가,</ColorFont>
            <br />
            뿔난 황소곱창
          </LeftFont>
        </LeftContainer>
        <div>
          <RightBoldFont>
            황소곱창은 당일 도축한 한우로 최고의 맛을내기 위해 숙련된 기술과
            <br />
            노하우로 가공하여 가맹점에 원팩으로 납품됩니다.
          </RightBoldFont>
          <RightRegularFont>
            맛있는 음식이라도 청결하지 않으면 최고가 될 수 없다는 신념으로
            위생에 가장 신경쓰며,
            <br />
            최고의 맛을 위해 항상 노력하고 연구하고 있습니다.
          </RightRegularFont>
          <RightRegularFont>
            대한민국 No.1을 넘어 K-FOOD를 이끄는 브랜드가 목표이며, 고객의
            생각과 요구를 읽고
            <br />
            만족시킬 수 있도록 수제 곱창의 No.1 황소곱창이 되겠습니다. 여러분은
            최고의 맛과 서비스를 즐겨주세요!
          </RightRegularFont>
        </div>
      </InnerContainer>
    </PageStyle>
  );
}

export default PcSecond;
