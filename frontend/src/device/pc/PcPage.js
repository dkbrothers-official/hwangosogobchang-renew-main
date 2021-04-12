import React from "react";
import { Route } from "react-router";
import styled from "styled-components";
import PcFooter from "./components/PcFooter";
import PcHeader from "./components/PcHeader";
import PcBrand from "./pages/PcBrand";
import PcMain from "./pages/PcMain";

const PcPageStyle = styled.div`
  max-width: 1920px;
  margin-left: auto;
  margin-right: auto;
`;
function PcPage() {
  return (
    <PcPageStyle>
      <PcHeader />
      <Route exact path="/" component={PcMain} />
      <Route exact path="/brand" component={PcBrand} />
      <PcFooter />
    </PcPageStyle>
  );
}

export default PcPage;
