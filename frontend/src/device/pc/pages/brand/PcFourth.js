import React from "react";
import styled from "styled-components";
const PageStyle = styled.div`
  width: 1920px;
  height: 1110px;
  background-image: url("./pc/brand_fourth_bg.png");
  background-size: 100% 100%;
`;
const InnerContainer = styled.div`
  padding-left: 250px;
  padding-right: 250px;
  padding-top: 250px;
  display: flex;
`;
const LeftContainer = styled.div`
  margin-right: 330px;
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
function PcFourth() {
  return (
    <PageStyle>
      <InnerContainer>
        <LeftContainer>
          <IconStyle src="./pc/brand_fourth_icon.png" />
          <LeftFont>
            트렌드를 넘어,
            <br />
            스테디로 자리 잡은
            <br />
            “곱창”의 경쟁력
          </LeftFont>
        </LeftContainer>
        <div>
          <RightBoldFont>
            뿔난 황소곱창은 역사가 길진 않지만 2016년 6월, 오픈 직후부터
            지금까지
            <br />
            폭발적인 반응으로 건대 소곱창계의 핫플레이스로 자리잡았습니다.
          </RightBoldFont>
          <RightRegularFont>
            지난 17년간 여러 프랜차이즈 경험과 소곱창 프랜차이즈 가맹점을
            운영하며
            <br />
            수많은 시행착오 끝에 최고의 맛과 조리시간 단축, 높은 회전율을
            이끌어낼 수 있는
            <br />
            새로운 브랜드인 ‘뿔난 황소곱창’을 런칭하였습니다.
          </RightRegularFont>
          <RightRegularFont>
            본사만이익을 보는 구조가 아닌 본사, 점주, 고객 모두가 상생할 수 있는
            시스템을
            <br />
            구현하고자 가맹점을 모집하고 있습니다.
            <br />
            항상 성공창업을 꿈꾸는 예비 점주님들의 도우미가 되어 함께하겠습니다.
          </RightRegularFont>
        </div>
      </InnerContainer>
    </PageStyle>
  );
}

export default PcFourth;
