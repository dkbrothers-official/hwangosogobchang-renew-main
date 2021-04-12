import React from "react";
import styled from "styled-components";

const PageStyle = styled.div`
  width: 1920px;
  height: 370px;
  background-color: #8e111b;
`;
const InnerContainer = styled.div`
  padding-right: 289px;
  padding-left: 289px;
  display: flex;
`;
const BoldFont = styled.div`
  margin-top: 81px;
  font-size: 46px;
  font-weight: bold;
  line-height: 70px;
  color: #ffffff;
`;
const ColorFont = styled.div`
  display: inline;
  color: #e4c893;
`;
const RegularFont = styled.div`
  margin-top: 32px;
  font-size: 28px;
  font-weight: 500;
  line-height: 40px;
  color: #ffffff;
`;
const LogoStyle = styled.img`
  margin-top: 130px;
  margin-left: 150px;
  width: 490px;
  height: 118px;
`;
function PcSecond() {
  return (
    <PageStyle>
      <InnerContainer>
        <div>
          <BoldFont>
            황소 곱창이 새롭게
            <br />
            <ColorFont>“뿔난 황소곱창”</ColorFont> 으로 돌아왔습니다!
          </BoldFont>
          <RegularFont>업그레이드 된 강력한 맛과 탄탄한 시스템</RegularFont>
        </div>
        <LogoStyle src="./pc/pc_second_icon.svg" />
      </InnerContainer>
    </PageStyle>
  );
}

export default PcSecond;
