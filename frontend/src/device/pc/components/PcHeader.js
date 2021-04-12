import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PageStyle = styled.div`
  width: 1920px;
  height: 100px;
  position: fixed;
  z-index: 10;
  background-color: black;
`;
const InnerContainer = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  padding-left: 250px;
  padding-right: 250px;
`;
const LogoStyle = styled.img`
  width: 208px;
  height: 50px;
`;
const NavStyle = styled.div`
  display: flex;
  margin-left: 235px;
`;

const Button = styled.button``;
const NavFont = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 29px;
  color: #ffffff;
  opacity: 0.4;
  margin-left: ${(props) => props.marginL};
  white-space: nowrap;
`;
const ContactBox = styled.div`
  background-color: #272727;
  width: 130px;
  height: 50px;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  margin-left: 205px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to left, #272727 50%, #8e111b 50%) right;
  background-size: 200%;
  transition: 0.5s ease-out;
  transition: all, 0.5s;
  cursor: pointer;
  &:hover {
    background-position: left;
  }
`;
const PhoneStyle = styled.div`
  font-size: 18px;
  font-weight: bold;
  line-height: 24px;
  color: #ffffff;
  text-align: right;
  margin-left: 22px;
`;
function PcHeader() {
  return (
    <PageStyle>
      <InnerContainer>
        <Link to="/">
          <LogoStyle src="./assets/pc_logo.svg" />
        </Link>
        <NavStyle>
          <Link to="/brand">
            <NavFont>브랜드</NavFont>
          </Link>
          <NavFont marginL={"100px"}>메뉴소개</NavFont>
          <NavFont marginL={"100px"}>매장안내</NavFont>
          <NavFont marginL={"100px"}>소식</NavFont>
        </NavStyle>
        <ContactBox>창업문의</ContactBox>
        <PhoneStyle>
          창업문의
          <br />
          <Button onclick="document.location.href='tel:1811-9970'">
            1811-9970
          </Button>
        </PhoneStyle>
      </InnerContainer>
    </PageStyle>
  );
}

export default PcHeader;
