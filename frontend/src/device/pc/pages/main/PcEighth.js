import React from "react";
import styled from "styled-components";
import ReviewBox from "../../components/ReviewBox";
const PageStyle = styled.div`
  width: 1920px;
  height: 900px;
  background-color: #8e111b;
`;
const InnerContainer = styled.div`
  padding-top: 116px;
  padding-right: 205px;
  padding-left: 205px;
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const ColorTitle = styled.div`
  font-size: 56px;
  font-weight: bold;
  line-height: 56px;
  color: #e4c893;
  margin-right: 15px;
`;
const TitleFont = styled.div`
  font-size: 60px;
  font-weight: bold;
  line-height: 60px;
  color: #ffffff;
`;
const ReviewBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const UpReviewContainer = styled.div`
  margin-top: 65px;
`;
const DownReviewContainer = styled.div`
  margin-top: 30px;
`;
function PcEighth() {
  return (
    <PageStyle>
      <InnerContainer>
        <TitleContainer>
          <ColorTitle>뿔난 황소곱창은</ColorTitle>
          <TitleFont>배달도 맛있다!</TitleFont>
        </TitleContainer>
        <UpReviewContainer>
          <ReviewBoxContainer>
            <ReviewBox
              title={"뿔난 황소곱창 화양점"}
              score={"5.0"}
              review={"최근리뷰 206 | 최근사장님 댓글 125"}
            />
            <ReviewBox
              title={"뿔난 황소곱창 인천송도점"}
              score={"4.9"}
              review={"최근리뷰 206 | 최근사장님 댓글 125"}
            />
            <ReviewBox
              title={"뿔난 황소곱창 갈매점"}
              score={"4.9"}
              review={"최근리뷰 206 | 최근사장님 댓글 125"}
            />
          </ReviewBoxContainer>
        </UpReviewContainer>
        <DownReviewContainer>
          <ReviewBoxContainer>
            <ReviewBox
              title={"뿔난 황소곱창 다산점"}
              score={"5.0"}
              review={"최근리뷰 206 | 최근사장님 댓글 125"}
            />
            <ReviewBox
              title={"뿔난 황소곱창 강서구청점"}
              score={"4.9"}
              review={"최근리뷰 206 | 최근사장님 댓글 125"}
            />
            <ReviewBox
              title={"뿔난 황소곱창 부산시청점"}
              score={"4.9"}
              review={"최근리뷰 206 | 최근사장님 댓글 125"}
            />
          </ReviewBoxContainer>
        </DownReviewContainer>
      </InnerContainer>
    </PageStyle>
  );
}

export default PcEighth;
