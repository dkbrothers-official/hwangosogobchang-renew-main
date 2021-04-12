import React from "react";
import styled from "styled-components";
const PageStyle = styled.div`
  width: 1920px;
  height: 2610px;
`;
const InnerContainer = styled.div`
  padding-top: 200px;
  padding-right: 250px;
  padding-left: 250px;
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: ${(props) => props.marginT};
`;
const ImageStyle = styled.img`
  width: 800px;
  height: 660px;
  margin-left: ${(props) => props.marginL};
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: ${(props) => props.align};
  margin-top: 70px;
  align-items: ${(props) => props.flex};
`;
const FirstFont = styled.div`
  font-family: Amarillo;
  font-size: 24px;
  line-height: 28.8px;
  color: #e4c893;
`;
const StardosFont = styled.div`
  margin-top: 26px;
  font-family: Stardos Stencil;
  font-size: 50px;
  line-height: 63px;
  color: #ffffff;
  font-weight: bold;
`;
const RegularFont = styled.div`
  margin-top: 15px;
  font-size: 24px;
  line-height: 38px;
  color: #ffffff;
  font-weight: 500;
  white-space: nowrap;
`;
const MediumFont = styled.div`
  margin-top: 31px;
  font-size: 24px;
  line-height: 38px;
  color: #ffffff;
  font-weight: 400;
  white-space: nowrap;
`;
const ButtonStyle = styled.div`
  margin-top: 41px;
  border-radius: 25px;
  border: 1px solid #822021;
  width: 173px;
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: #8e111b;
  cursor: pointer;
  background: linear-gradient(to left, transparent 50%, #8e111b 50%) right;
  background-size: 200%;
  transition: 0.5s ease-out;
  transition: all, 0.5s;
  &:hover {
    background-position: left;
    color: white;
  }
`;
const ButtonFont = styled.div`
  font-size: 18px;
  line-height: 30px;
  font-weight: 500;
  white-space: nowrap;
`;
const FristIcon = styled.img`
  width: 196px;
  height: 48px;
`;
const SecondIcon = styled.img`
  width: 217px;
  height: 48px;
`;
const ThirdIcon = styled.img`
  width: 141px;
  height: 42px;
`;
const ButtonArrow = styled.img`
  transform: rotate(180deg);
`;
function PcThrid() {
  return (
    <PageStyle>
      <InnerContainer>
        <Container>
          <TextContainer>
            <FristIcon src="./pc/pc_third_icon1.png" />
            <StardosFont>
              취향없이 즐기는
              <br />
              대중적인 맛의
              <br />
              No.1 소곱창
            </StardosFont>
            <RegularFont>
              차별화된 뿔난 황소곱창의 맛있는 기술로
              <br />
              건대 소곱창계의 핫플레이스로 자리 잡았습니다.
            </RegularFont>
            <MediumFont>
              오랫동안 쌓아온 기술과 경험을 바탕으로
              <br />
              수제 곱창의 비법을 담아 소중한 고객에게
              <br />
              맛있고 행복한 추억을 선물합니다.
            </MediumFont>
            <ButtonStyle>
              <ButtonFont>브랜드 스토리</ButtonFont>
              <ButtonArrow src="./assets/button_arrow.svg" />
            </ButtonStyle>
          </TextContainer>
          <ImageStyle src="./pc/pc_third_1.png" />
        </Container>
        <Container marginT={"140px"}>
          <ImageStyle src="./pc/pc_third_2.png" />
          <TextContainer align={"right"} flex={"flex-end"}>
            <SecondIcon src="./pc/pc_third_icon2.png" />
            <StardosFont>
              오직 맛으로만 승부하는,
              <br />
              자꾸 생각나는 그맛!
            </StardosFont>
            <RegularFont>
              오직 맛으로만 세워진 뿔난 자존심!
              <br />
              남녀노소 누구나 쉽게 즐기는 그맛!
            </RegularFont>
            <MediumFont>
              뿔난 황소곱창은 언제나 고객에게
              <br />
              최고의 맛을 선물합니다. 믿고 먹는 소곱창과
              <br />
              소스의 황홀한 조합까지 느껴보세요.
            </MediumFont>
            <ButtonStyle>
              <ButtonFont>메뉴안내</ButtonFont>
              <ButtonArrow src="./assets/button_arrow.svg" />
            </ButtonStyle>
          </TextContainer>
        </Container>
        <Container marginT={"140px"}>
          <TextContainer>
            <ThirdIcon src="./pc/pc_third_icon1.png" />
            <StardosFont>
              작지만 끊임없이
              <br />
              성장하는 황소곱창
            </StardosFont>
            <RegularFont>
              전국 13개의 점포를 가진 황소곱창의
              <br />
              무섭도록 빠른 성장률!
            </RegularFont>
            <MediumFont>
              오랫동안 쌓아온 기술과 경험을 바탕으로
              <br />
              수제 곱창의 비법을 담아 소중한 고객에게
              <br />
              맛있고 행복한 추억을 선물합니다.
            </MediumFont>
            <ButtonStyle>
              <ButtonFont>매장안내</ButtonFont>
              <ButtonArrow src="./assets/button_arrow.svg" />
            </ButtonStyle>
          </TextContainer>
          <ImageStyle src="./pc/pc_third_3.png" />
        </Container>
      </InnerContainer>
    </PageStyle>
  );
}

export default PcThrid;
