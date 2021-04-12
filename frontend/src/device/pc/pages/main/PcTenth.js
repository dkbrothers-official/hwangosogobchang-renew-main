import React, { useState } from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const PageStyle = styled.div`
  width: 1920px;
  height: 1080px;
`;
const InnerContainer = styled.div`
  display: flex;
`;
const LeftBox = styled.div`
  width: 1120px;
  height: 1080px;
`;
const LeftImage = styled.img`
  width: 1120px;
  height: 1080px;
`;
const RightContainer = styled.div`
  width: 800px;
  height: 1080px;
  background-color: #e4c893;
  padding-left: 100px;
`;
const MenuButton = styled.div`
  margin-top: 234px;
  border-radius: 25px;
  border: 1px solid #000000;
  width: 173px;
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
`;
const ButtonFont = styled.div`
  font-size: 15px;
  line-height: 30px;
  color: #000000;
  font-weight: 500;
  white-space: nowrap;
`;
const TitleFont = styled.div`
  margin-top: 45px;
  font-size: 60px;
  line-height: 80px;
  color: #000000;
  font-weight: 500;
`;
const BoldFont = styled.div`
  display: inline;
  font-weight: bold;
`;
const UnderLine = styled.div`
  margin-top: 122px;
  margin-bottom: 10px;
  margin-left: 5px;
  width: 78px;
  border-bottom: 1px solid black;
`;
const MenuTitle = styled.div`
  font-size: 34px;
  line-height: 34px;
  color: #000000;
  font-weight: bold;
`;
const MenuExplain = styled.div`
  margin-top: 20px;
  font-size: 24px;
  line-height: 37px;
  color: #000000;
  font-weight: 500;
`;
const MenuBox = styled.div``;
const MeneExplain = {
  0: (
    <MenuBox>
      <MenuTitle>곱창모듬 (뿔소모듬)</MenuTitle>
      <MenuExplain>
        곱창,막창,대창을 한꺼번에!
        <br />
        모든 구성을 맛볼 수 있는 뿔소모듬!
        <br />
        메뉴 선택이 고민된다면 모듬 어때요?
      </MenuExplain>
    </MenuBox>
  ),
  1: (
    <MenuBox>
      <MenuTitle>소곱창</MenuTitle>
      <MenuExplain>
        소곱창 특유의 식감과,
        <br />
        씹을수록 입가에 퍼지는
        <br />
        고소함에 포인트!
        <br />
        부추와 곁들이면 환상의 조화!
      </MenuExplain>
    </MenuBox>
  ),
  2: (
    <MenuBox>
      <MenuTitle>소막창</MenuTitle>
      <MenuExplain>
        쫄깃쫄깃한 부드러움,
        <br />
        먹고 먹어도 질리지 않은 그 맛 !
        <br />못 먹으면 아쉬운 소막창
      </MenuExplain>
    </MenuBox>
  ),
  3: (
    <MenuBox>
      <MenuTitle>소대창</MenuTitle>
      <MenuExplain>
        야들야들, 속이 꽉 채워진 두툼 ~ 한<br />
        대창 씹으면 톡 터지는
        <br />
        고소함과 식감이 일품!
      </MenuExplain>
    </MenuBox>
  ),
  4: (
    <MenuBox>
      <MenuTitle>특양대창</MenuTitle>
      <MenuExplain>
        뿔난황소곱창에서 수년간의
        <br />
        연구로 만들어진
        <br />
        세계최초로 내놓은 특양대창
      </MenuExplain>
    </MenuBox>
  ),
};
function PcTenth() {
  const [slideIndex, setSlideIndex] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    pauseOnHover: false,
    arrows: false,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      return setSlideIndex(next);
    },
  };
  return (
    <PageStyle>
      <InnerContainer>
        <LeftBox>
          <Slider {...settings}>
            <LeftImage src="./pc/pc_tenth_1.png" />
            <LeftImage src="./pc/pc_tenth_2.png" />
            <LeftImage src="./pc/pc_tenth_3.png" />
            <LeftImage src="./pc/pc_tenth_4.png" />
            <LeftImage src="./pc/pc_tenth_5.png" />
          </Slider>
        </LeftBox>
        <RightContainer>
          <MenuButton>
            <ButtonFont>메뉴 안내</ButtonFont>
            <ButtonFont>></ButtonFont>
          </MenuButton>
          <TitleFont>
            황소곱창을 즐기는
            <br />
            <BoldFont>다양한 방법</BoldFont>
          </TitleFont>
          <UnderLine></UnderLine>
          {MeneExplain[slideIndex]}
        </RightContainer>
      </InnerContainer>
    </PageStyle>
  );
}

export default PcTenth;
