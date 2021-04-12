import React from "react";
import styled from "styled-components";

const PageStyle = styled.div`
  width: 1920px;
  height: 1080px;
  background-image: url("./pc/pc_fifth_bg.png");
  background-size: cover;
`;
const InnerContainer = styled.div`
  padding-right: 289px;
  padding-left: 289px;
  display: flex;
  flex-direction: column;
`;
const TitleFont = styled.div`
  margin-top: 230px;
  font-size: 52px;
  line-height: 75px;
  color: #ffffff;
  font-weight: 400;
`;
const ColorFont = styled.div`
  display: inline;
  color: #e4c893;
`;
const MainFont = styled.div`
  margin-top: 60px;
  font-size: 28px;
  line-height: 40px;
  color: #ffffff;
  font-weight: 400;
`;
const BoxContainer = styled.div`
  margin-top: 110px;
  display: flex;
  justify-content: space-between;
`;
const Box = styled.div`
  width: 424px;
  height: 233px;
  border: 1px solid white;
  margin-right: ${(props) => props.marginR};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BoxTitle = styled.div`
  margin-top: 30px;
  font-size: 32px;
  line-height: 32px;
  font-weight: bold;
  color: #ffffff;
`;
const BoxMain = styled.div`
  margin-top: 38px;
  display: flex;
  font-weight: bold;
  color: #ffffff;
  align-items: flex-end;
`;
const BoxBigFont = styled.div`
  display: inline-block;
  font-size: 90px;
  line-height: 90px;
  margin-right: 10px;
`;
const BoxSmallFont = styled.div`
  font-size: 48px;
  line-height: 48px;
`;
function PcFifth() {
  return (
    <PageStyle>
      <InnerContainer>
        <TitleFont>
          <ColorFont>코로나19</ColorFont>에도 흔들림 없는
          <br />
          곱창 No.1 브랜드
        </TitleFont>
        <MainFont>
          숫자보다 중요한건 이 숫자를 만든 방법입니다.
          <br />
          뿔난 황소곱창은 전수창업을 시작으로 음식을 만드는 사람의
          <br />
          윤리의식을 가지고 맛으로 천천히 성장하고있는 브랜드입니다.
        </MainFont>
        <BoxContainer>
          <Box>
            <BoxTitle>월간 상담 수</BoxTitle>
            <BoxMain>
              <BoxBigFont>50</BoxBigFont>
              <BoxSmallFont>건</BoxSmallFont>
            </BoxMain>
          </Box>
          <Box>
            <BoxTitle>최근 1년 오픈 수</BoxTitle>
            <BoxMain>
              <BoxBigFont>9</BoxBigFont>
              <BoxSmallFont>지점</BoxSmallFont>
            </BoxMain>
          </Box>
          <Box>
            <BoxTitle>일 최고 매출</BoxTitle>
            <BoxMain>
              <BoxBigFont>780</BoxBigFont>
              <BoxSmallFont>만원</BoxSmallFont>
            </BoxMain>
          </Box>
        </BoxContainer>
      </InnerContainer>
    </PageStyle>
  );
}

export default PcFifth;
