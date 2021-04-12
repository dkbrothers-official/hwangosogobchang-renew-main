import React from "react";
import styled from "styled-components";

const PageStyle = styled.div`
  width: 1920px;
  height: 650px;
  background-color: #e4c893;
`;
const InnerContainer = styled.div`
  padding-left: 130px;
  padding-right: 130px;
  padding-top: 100px;
  display: flex;
  justify-content: space-between;
`;
const IconStyle = styled.img`
  width: 207px;
  height: 48px;
`;
const LeftFont = styled.div`
  font-size: 60px;
  font-weight: 500;
  line-height: 80px;
  color: #000000;
`;
const BoldFont = styled.div`
  display: inline;
  font-weight: bold;
`;
const CardContainer = styled.div`
  width: 345px;
  height: 448px;
  background-color: white;
`;
const CardImage = styled.img`
  width: 345px;
  height: 255px;
`;
const CardTitle = styled.div`
  margin-top: 27px;
  font-size: 28px;
  font-weight: 500;
  line-height: 28px;
  color: #000000;
  text-align: center;
`;
const CardMain = styled.div`
  margin-top: 21px;
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  color: #000000;
  text-align: center;
`;
function PcThird() {
  return (
    <PageStyle>
      <InnerContainer>
        <div>
          <IconStyle src="./pc/brand_third_icon.png" />
          <LeftFont>
            뿔난 황소곱창의
            <br />
            <BoldFont>브랜드 경쟁력</BoldFont>
          </LeftFont>
        </div>
        <CardContainer>
          <CardImage src="./pc/brand_third_card1.png" />
          <CardTitle>다양한 메뉴구성</CardTitle>
          <CardMain>
            소곱창부터 대창,막창,특양대창,
            <br />
            서브메뉴까지! 다양한 각종 메뉴구성
          </CardMain>
        </CardContainer>
        <CardContainer>
          <CardImage src="./pc/brand_third_card2.png" />
          <CardTitle>메인같은 서브메뉴</CardTitle>
          <CardMain>
            뿔난 황소곱창의 서브메뉴는
            <br />
            메인메뉴와 같은 퀄리티를 자랑합니다!
          </CardMain>
        </CardContainer>
        <CardContainer>
          <CardImage src="./pc/brand_third_card3.png" />
          <CardTitle>황홀한 네가지 소스</CardTitle>
          <CardMain>
            뿔난 황소곱창을 100배 더 맛있게
            <br />
            해주는 네가지의 특제 마약소스!
          </CardMain>
        </CardContainer>
      </InnerContainer>
    </PageStyle>
  );
}

export default PcThird;
