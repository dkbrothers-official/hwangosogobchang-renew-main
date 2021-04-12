import React from "react";
import styled from "styled-components";
import PcFifth from "./brand/PcFifth";
import PcFirst from "./brand/PcFirst";
import PcFourth from "./brand/PcFourth";
import PcSecond from "./brand/PcSecond";
import PcSeventh from "./brand/PcSeventh";
import PcSixth from "./brand/PcSixth";
import PcThird from "./brand/PcThird";

const PcPageStyle = styled.div`
  max-width: 1920px;
  margin-left: auto;
  margin-right: auto;
`;
function PcBrand() {
  return (
    <PcPageStyle>
      <PcFirst />
      <PcSecond />
      <PcThird />
      <PcFourth />
      <PcFifth />
      <PcSixth />
      <PcSeventh />
    </PcPageStyle>
  );
}

export default PcBrand;
