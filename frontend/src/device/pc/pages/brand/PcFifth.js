import React from "react";
import styled from "styled-components";
const PageStyle = styled.div`
  width: 1920px;
  height: 1290px;
  background-image: url("./pc/brand_fifth_bg.png");
`;
const InnerContainer = styled.div`
  padding-top: 400px;
  padding-left: 250px;
  padding-right: 250px;
`;
const TitleFont = styled.div`
  font-size: 60px;
  font-weight: bold;
  line-height: 80px;
  color: #ffffff;
`;
const ColorFont = styled.div`
  display: inline;
  color: #fdc559;
`;
const Container = styled.div`
  margin-top: 186px;
  display: flex;
  justify-content: space-between;
`;
const CardTitle = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 50px;
  font-weight: bold;
  line-height: 80px;
  color: #ffffff;
`;
const CardMain = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 26px;
  font-weight: bold;
  line-height: 50px;
  color: #ffffff;
`;
function PcFifth() {
  return (
    <PageStyle>
      <InnerContainer>
        <TitleFont>
          고객은 브랜드를 <ColorFont>맛</ColorFont>으로 만납니다
        </TitleFont>
        <Container>
          <div>
            <CardTitle>Mission</CardTitle>
            <CardMain>
              고집스러운 맛에 대한
              <br />
              자존심이 고객을 웃게합니다.
            </CardMain>
          </div>
          <div>
            <CardTitle>Vision</CardTitle>
            <CardMain>
              한철 피고지는 브랜드를 넘어
              <br />
              한발짝씩 차근히 나아가는
              <br />
              브랜드가 되겠습니다.
            </CardMain>
          </div>
          <div>
            <CardTitle>Core value</CardTitle>
            <CardMain>사람, 초심, 정성</CardMain>
          </div>
        </Container>
      </InnerContainer>
    </PageStyle>
  );
}

export default PcFifth;
