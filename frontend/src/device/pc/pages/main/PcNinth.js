import React from "react";
import styled from "styled-components";
const PageStyle = styled.div`
  width: 1920px;
  height: 1080px;
  background-image: url("./pc/pc_ninth_bg.png");
  background-size: 100% 100%;
`;
const InnerContainer = styled.div`
  padding-left: 485px;
`;
const Container = styled.div`
  padding-top: 195px;
  display: flex;
`;
const FirstBox = styled.div`
  display: flex;
  align-items: center;
`;
const IconStyle = styled.img`
  width: 42px;
  height: 42px;
  margin-right: 10px;
`;
const FirstFont = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
  color: #ffffff;
`;

const SnsImage = styled.div`
  margin-top: 40px;
  background-image: url("./pc/pc_ninth_sns.png");
  background-size: contain;
  width: 470px;
  height: 460px;
`;
const IconBox = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid white;
  padding-bottom: 20px;
`;
const SmallIconStyle = styled.img`
  width: 32px;
  height: 32px;
`;
const PlaneIconStyle = styled.img`
  width: 27px;
  height: 25px;
`;
const DotsStyle = styled.img`
  width: 47px;
  height: 8px;
`;
const LeftIconBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 233px;
`;
const HashFont = styled.div`
  margin-top: 20px;
  font-size: 20px;
  font-weight: 500;
  line-height: 29px;
  color: #ffffff;
`;
const RightContainer = styled.div`
  margin-left: 40px;
`;
const RightTitle = styled.div`
  margin-top: 128px;
  font-size: 46px;
  font-weight: bold;
  line-height: 66px;
  color: #e4c893;
`;
const RightMainFont = styled.div`
  margin-top: 30px;
  font-size: 22px;
  font-weight: 500;
  line-height: 32px;
  color: #ffffff;
`;
function PcNinth() {
  return (
    <PageStyle>
      <InnerContainer>
        <Container>
          <div>
            <FirstBox>
              <IconStyle src="./assets/small_logo.svg" />
              <FirstFont>@hwangsogobchang</FirstFont>
            </FirstBox>
            <SnsImage></SnsImage>
            <IconBox>
              <LeftIconBox>
                <SmallIconStyle src="./assets/heart.svg" />
                <SmallIconStyle src="./assets/ballon.svg" />
                <PlaneIconStyle src="./assets/airplane.svg" />
                <DotsStyle src="./assets/dots.svg" />
              </LeftIconBox>
              <SmallIconStyle src="./assets/mark.svg" />
            </IconBox>
            <HashFont>
              #뿔난황소곱창 #곱창#소곱창 #수제곱창 #곱창의_자존심
              <br />
              #곱창맛집 #곱창핫플 #세젤맛 #단골예약
            </HashFont>
          </div>
          <RightContainer>
            <RightTitle>
              후기가 증명하는
              <br />
              황소곱창의 찐! 위엄
            </RightTitle>
            <RightMainFont>
              고객들의 실제 후기가
              <br />
              뿔난 황소곱창의 뿔난 자존심의 맛을 증명합니다.
            </RightMainFont>
            <RightMainFont>
              짧은 시간에 축적된 고객들의 실제 후기를 보고
              <br />
              뿔소곱창의 찐 위엄을 느껴보세요.
            </RightMainFont>
          </RightContainer>
        </Container>
      </InnerContainer>
    </PageStyle>
  );
}

export default PcNinth;
