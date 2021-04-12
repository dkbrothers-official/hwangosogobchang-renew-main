import React from "react";
import styled from "styled-components";
import PcFirst from "./main/PcFirst";
import PcSecond from "./main/PcSecond";
import PcThrid from "./main/PcThrid";
import PcFourth from "./main/PcFourth";
import PcFifth from "./main/PcFifth";
import PcSixth from "./main/PcSixth";
import PcSeventh from "./main/PcSeventh";
import PcEighth from "./main/PcEighth";
import PcNinth from "./main/PcNinth";
import PcTenth from "./main/PcTenth";
import PcEleventh from "./main/PcEleventh";
import PcTwelfth from "./main/PcTwelfth";
import PcThirdteenth from "./main/PcThirdteenth";
const PcPageStyle = styled.div`
  max-width: 1920px;
  margin-left: auto;
  margin-right: auto;
`;
function PcMain() {
  return (
    <PcPageStyle>
      <PcFirst />
      <PcSecond />
      <PcThrid />
      <PcFourth />
      <PcFifth />
      <PcSixth />
      <PcSeventh />
      <PcEighth />
      <PcNinth />
      <PcTenth />
      <PcEleventh />
      <PcTwelfth />
      <PcThirdteenth />
    </PcPageStyle>
  );
}

export default PcMain;
