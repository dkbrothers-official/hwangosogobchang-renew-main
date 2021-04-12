import React from "react";
import styled from "styled-components";
const PageStyle = styled.div`
  width: 1920px;
  height: 1200px;
`;
const InnerContainer = styled.div`
  padding-top: 200px;
  padding-left: 290px;
  padding-right: 290px;
`;
const TitleFont = styled.div`
  text-align: center;
  font-size: 50px;
  line-height: 50px;
  color: #ffffff;
  font-weight: bold;
  padding-bottom: 100px;
  border-bottom: 1px solid #495057;
`;
const Container = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #495057;
`;
const DateBox = styled.div`
  margin-left: 100px;
`;
const DayFont = styled.div`
  margin-bottom: 10px;
  font-size: 60px;
  line-height: 60px;
  color: #ffffff;
  font-weight: bold;
`;
const YearFont = styled.div`
  font-size: 20px;
  line-height: 20px;
  color: #ffffff;
  font-weight: bold;
`;
const CenterBox = styled.div``;
const CenterTitle = styled.div`
  font-size: 20px;
  line-height: 20px;
  color: #ffffff;
  font-weight: bold;
`;
const CenterMain = styled.div`
  margin-top: 17px;
  font-size: 16px;
  line-height: 16px;
  color: #ffffff;
  font-weight: bold;
`;
const ImageStyle = styled.img`
  width: 190px;
  height: 110px;
  margin-right: 100px;
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;
const InfoButton = styled.div`
  margin-top: 80px;
  border-radius: 25px;
  border: 1px solid #000000;
  width: 125px;
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  color: #ffffff;
  background: linear-gradient(to left, transparent 50%, #8e111b 50%) right;
  background-size: 200%;
  transition: 0.5s ease-out;
  transition: all, 0.5s;
  &:hover {
    background-position: left;
  }
`;
const ButtonFont = styled.div`
  font-size: 16px;
  line-height: 30px;
  font-weight: 500;
  white-space: nowrap;
`;
const ButtonArrow = styled.img`
  transform: rotate(180deg);
`;
function PcTwelfth() {
  return (
    <PageStyle>
      <InnerContainer>
        <TitleFont>뿔난 황소곱창 소식</TitleFont>
        <Container>
          <DateBox>
            <DayFont>02</DayFont>
            <YearFont>2021.03</YearFont>
          </DateBox>
          <CenterBox>
            <CenterTitle>
              뿔난 황소곱창 CM송 ‘뿔뿔송’ MBC FM4U 라디오광고 3월 스케쥴 안내
            </CenterTitle>
            <CenterMain>
              뿔난 황소곱창 CM송 ‘뿔뿔송’ MBC FM4U 라디오광고 3월 스케쥴 안내
              라디오광고 3월 스케쥴 라디오광고 3월 …
            </CenterMain>
          </CenterBox>
          <ImageStyle src="./pc/pc_twelf_1.png" />
        </Container>
        <Container>
          <DateBox>
            <DayFont>02</DayFont>
            <YearFont>2021.03</YearFont>
          </DateBox>
          <CenterBox>
            <CenterTitle>
              뿔난 황소곱창 CM송 ‘뿔뿔송’ MBC FM4U 라디오광고 3월 스케쥴 안내
            </CenterTitle>
            <CenterMain>
              뿔난 황소곱창 CM송 ‘뿔뿔송’ MBC FM4U 라디오광고 3월 스케쥴 안내
              라디오광고 3월 스케쥴 라디오광고 3월 …
            </CenterMain>
          </CenterBox>
          <ImageStyle src="./pc/pc_twelf_2.png" />
        </Container>
        <Container>
          <DateBox>
            <DayFont>02</DayFont>
            <YearFont>2021.03</YearFont>
          </DateBox>
          <CenterBox>
            <CenterTitle>
              뿔난 황소곱창 CM송 ‘뿔뿔송’ MBC FM4U 라디오광고 3월 스케쥴 안내
            </CenterTitle>
            <CenterMain>
              뿔난 황소곱창 CM송 ‘뿔뿔송’ MBC FM4U 라디오광고 3월 스케쥴 안내
              라디오광고 3월 스케쥴 라디오광고 3월 …
            </CenterMain>
          </CenterBox>
          <ImageStyle src="./pc/pc_twelf_3.png" />
        </Container>
        <ButtonBox>
          <InfoButton>
            <ButtonFont>소식 더보기</ButtonFont>
            <ButtonArrow src="./assets/white_arrow.svg" />
          </InfoButton>
        </ButtonBox>
      </InnerContainer>
    </PageStyle>
  );
}

export default PcTwelfth;
