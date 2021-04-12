import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
const PageStyle = styled.div`
  width: 1920;
  height: 600px;
  background-image: url("./pc/pc_seventh_bg.png");
  background-size: cover;
`;
const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  width: ${(props) => props.width};
  justify-content: space-between;
  margin-top: ${(props) => props.marginT};
  animation: ${(props) => (props.active ? "fadein 3s" : "fadeout 3s")};
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;
const DownContainer = styled.div`
  display: flex;
  width: ${(props) => props.width};
  justify-content: space-between;
  margin-top: ${(props) => props.marginT};
  animation: ${(props) => (props.active ? "fadein 5s" : "fadeout 5s")};
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;
const Box = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  width: 468px;
  height: 119px;
  display: flex;
  justify-content: center;
`;
const BoxFont = styled.div`
  padding-top: 30px;
  font-size: 24px;
  line-height: 24px;
  color: #fdc559;
  font-weight: 400;
`;
const MiddleBox = styled.div`
  margin-top: 31px;
  font-size: 38px;
  font-weight: 400;
  line-height: 78px;
  color: #ffffff;
  text-align: center;
`;
const MiddleBigFont = styled.div`
  display: inline;
  font-size: 44px;
  font-weight: bold;
  line-height: 74px;
  color: #ffffff;
`;
function PcSeventh() {
  //현재 위치가 이곳에 왔을때 active true
  const [active, setActive] = useState(false);
  const element = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.pageYOffset + 100; //현재 위치
      //현재 페이지 상단
      const pagePosTop =
        element.current.getBoundingClientRect().top + window.pageYOffset;
      //현재 페이지 하단
      const pagePosBot =
        element.current.getBoundingClientRect().bottom + window.pageYOffset;
      if (pagePosTop < scrollTop && scrollTop < pagePosBot) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [active]);
  return (
    <PageStyle ref={element}>
      <InnerContainer>
        <Container width={"1373px"} marginT={"83.5px"} active={active}>
          <Box url={"./pc/pc_seventh_left.svg"}>
            <BoxFont>믿고 먹는 맛있는 한우 수제 곱창!</BoxFont>
          </Box>
          <Box url={"./pc/pc_seventh_right.svg"}>
            <BoxFont>원팩 시스템으로 쉽고 간편하게!</BoxFont>
          </Box>
        </Container>
        <MiddleBox>
          수제 곱창을 믿고 합리적으로 먹을 수 있는 곳,
          <br />
          <MiddleBigFont>뿔난 황소곱창입니다.</MiddleBigFont>
        </MiddleBox>
        <DownContainer width={"1628px"} active={active}>
          <Box url={"./pc/pc_seventh_left.svg"}>
            <BoxFont>물류 최소마진을 통해 점주님의 수익 극대화</BoxFont>
          </Box>
          <Box url={"./pc/pc_seventh_right.svg"}>
            <BoxFont>본사와 점주의 동등한 수평관계</BoxFont>
          </Box>
        </DownContainer>
      </InnerContainer>
    </PageStyle>
  );
}

export default PcSeventh;
