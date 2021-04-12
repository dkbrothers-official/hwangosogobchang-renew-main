import React, { useRef } from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const PageStyle = styled.div`
  width: 1920px;
  height: 1600px;
`;
const InnerContainer = styled.div`
  padding-left: 250px;
  padding-right: 250px;
  padding-top: 200px;
`;
const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 160px;
`;
const TopFont = styled.div`
  font-size: 50px;
  font-weight: bold;
  line-height: 65px;
  color: #ffffff;
`;
const TopSmallFont = styled.div`
  margin-top: 20px;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  color: #ffffff;
`;
const IconStyle = styled.img`
  cursor: pointer;
  margin-right: ${(props) => props.margin};
  width: 60px;
  height: 60px;
`;
const SlideBox = styled.div`
  width: 490px;
  display: flex;
  flex-direction: column;
`;
const SlideImage = styled.img`
  width: 490px;
  height: 590px;
  margin: 10px;
  margin-top: ${(props) => props.marginT};
`;
const SliderStyle = styled(Slider)`
  display: flex;
  align-items: center;
  height: 100%;
  width: 1720px;
`;
function PcEleventh() {
  const sliderRef = useRef();
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const gotoNext = () => {
    sliderRef.current.slickNext();
  };
  const gotoPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <PageStyle>
      <InnerContainer>
        <TopContainer>
          <div>
            <TopFont>견고한 브랜드 경쟁력</TopFont>
            <TopSmallFont>
              미디어 노출로 쌓여가는 뿔난 황소곱창의 인지도
            </TopSmallFont>
          </div>
          <div>
            <IconStyle
              margin={"20px"}
              src="./assets/LeftArrow.svg"
              onClick={() => gotoNext()}
            />
            <IconStyle
              src="./assets/RightArrow.svg"
              onClick={() => gotoPrev()}
            />
          </div>
        </TopContainer>
        <SliderStyle {...settings} ref={sliderRef}>
          <SlideBox>
            <SlideImage marginT={"300px"} src="./pc/pc_tv_1.png" />
          </SlideBox>
          <SlideBox>
            <SlideImage src="./pc/pc_tv_2.png" />
            <SlideImage src="./pc/pc_tv_3.png" />
          </SlideBox>
          <SlideBox>
            <SlideImage marginT={"300px"} src="./pc/pc_tv_4.png" />
          </SlideBox>
          <SlideBox>
            <SlideImage src="./pc/pc_tv_5.png" />
            <SlideImage src="./pc/pc_tv_6.png" />
          </SlideBox>
          <SlideBox>
            <SlideImage marginT={"300px"} src="./pc/pc_tv_7.png" />
          </SlideBox>
        </SliderStyle>
      </InnerContainer>
    </PageStyle>
  );
}

export default PcEleventh;
