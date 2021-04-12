import React from "react";
import styled from "styled-components";
const PageStyle = styled.div`
  width: 1920px;
  height: 1200px;
`;
const InnerContainer = styled.div`
  padding-top: 220px;
  padding-left: 250px;
  padding-right: 250px;
`;
const TitleFont = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 60px;
  font-weight: bold;
  line-height: 80px;
  color: #ffffff;
`;
const Container = styled.div`
  margin-top: 170px;
  display: flex;
  justify-content: space-between;
`;
const CardTitle = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 30px;
  font-weight: bold;
  line-height: 80px;
  color: #ffffff;
`;
const CardMain = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 20px;
  font-weight: 500;
  line-height: 35px;
  color: #ffffff;
`;
const IconContainer = styled.div`
  margin-top: 150px;
  display: flex;
  justify-content: space-between;
`;
const IconStyle = styled.img`
  width: 280px;
  height: 280px;
`;
function PcSixth() {
  return (
    <PageStyle>
      <InnerContainer>
        <TitleFont>BI</TitleFont>
        <Container>
          <div>
            <CardTitle>심볼마크</CardTitle>
            <CardMain>
              전국을 접수할 대한민국 지도와 자신 있는
              <br />
              황소의 뿔을 결합하여 뿔난 황소곱창의 고집과
              <br />
              패기를 심볼마크에 적극 반영하였습니다.
            </CardMain>
          </div>
          <div>
            <CardTitle>워드마크</CardTitle>
            <CardMain>
              자신 있는 한우 수제 곱창의 고집을 끝까지
              <br />
              이어가겠다는 마음으로 뿔난 황소곱창의
              <br />
              이유 있는 고집과 바램을 담은 워드마크입니다.
            </CardMain>
          </div>
          <div>
            <CardTitle>콤비네이션 마크</CardTitle>
            <CardMain>
              정성스레 손질하고 준비하는 의미있는 한 그릇을
              <br />
              대접하겠다는 소중하고 뜻 깊은 마음이 담긴
              <br />
              뿔난 황소곱창의 마크입니다.
            </CardMain>
          </div>
        </Container>
        <IconContainer>
          <IconStyle src="./pc/brand_sixth_icon1.png" />
          <IconStyle src="./pc/brand_sixth_icon2.png" />
          <IconStyle src="./pc/brand_sixth_icon3.png" />
        </IconContainer>
      </InnerContainer>
    </PageStyle>
  );
}

export default PcSixth;
