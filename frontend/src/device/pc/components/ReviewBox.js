import React from "react";
import styled from "styled-components";
const BoxContainer = styled.div`
  width: 483px;
  height: 243px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
const TitleFont = styled.div`
  margin-top: 33px;
  font-size: 37px;
  font-weight: 400;
  line-height: 37px;
  color: #212529;
`;
const MiddleBox = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: center;
`;
const StarIcon = styled.img`
  width: 200px;
  height: 45px;
`;
const MiddleFont = styled.div`
  padding-top: 5px;
  font-size: 28px;
  font-weight: 500;
  line-height: 28px;
  color: #212529;
`;
const UnderFont = styled.div`
  margin-top: 20px;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  color: #868e96;
`;
function ReviewBox(props) {
  return (
    <BoxContainer>
      <TitleFont>{props.title}</TitleFont>
      <MiddleBox>
        <StarIcon src="./assets/star.svg" />
        <MiddleFont>{props.score}</MiddleFont>
      </MiddleBox>
      <UnderFont>{props.review}</UnderFont>
    </BoxContainer>
  );
}

export default ReviewBox;
