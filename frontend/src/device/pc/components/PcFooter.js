import React from "react";
import styled from "styled-components";
const PageStyle = styled.div`
  width: 1920px;
  height: 300px;
`;
const InnerContainer = styled.div`
  padding-left: 289px;
  padding-right: 289px;
`;
const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const LogoStyle = styled.img`
  width: 208px;
  height: 50px;
  margin-bottom: 30px;
`;
const InfoBox = styled.div`
  margin-top: 50px;
`;
const MainFont = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  line-height: 30px;
`;
const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;
const RightFont = styled.div`
  font-weight: bold;
  font-size: 30px;
  color: #ffffff;
  line-height: 30px;
`;
function PcFooter() {
  return (
    <PageStyle>
      <InnerContainer>
        <ContentBox>
          <InfoBox>
            <LogoStyle src="./assets/pc_logo.svg"></LogoStyle>
            <MainFont>
              서울특별시 광진구 아차산로 29길 16 황소곱창 건대본점 | Tel :
              02-467-2270 | Mail : ttfc2270@naver.com
            </MainFont>
            <MainFont>
              대표이사 : 오세민 | 사업자등록번호 : 주식회사 케이브로스에프앤비
              563-87-00929
            </MainFont>
            <MainFont>
              Copyright ©주식회사 케이브로스에프앤비 co., Ltd. All rights
              Reserved.
            </MainFont>
          </InfoBox>
          <RightBox>
            <RightFont>창업문의 1811-9970</RightFont>
          </RightBox>
        </ContentBox>
      </InnerContainer>
    </PageStyle>
  );
}

export default PcFooter;
