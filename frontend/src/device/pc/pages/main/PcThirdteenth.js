import React, { useState } from "react";
import styled from "styled-components";
import Terms from "../../components/Terms";
const PageStyle = styled.div`
  width: 1920px;
  height: 1746px;
  background-color: #faf8f5;
`;
const InnerContainer = styled.div``;
const TableStyle = styled.table`
  padding-left: 430px;
  height: 970px;
  border-spacing: 0 20px;
`;
const TableHead = styled.div`
  padding-top: 130px;
  margin-bottom: 150px;
  font-weight: bold;
  font-size: 60px;
  color: #000000;
  line-height: 80px;
  text-align: center;
`;
const TableTdFont = styled.td`
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  color: #8e111b;
  text-align: left;
`;
const TableTdStyle = styled.td`
  padding-left: 55px;
`;
const TableTrStyle = styled.tr``;
const InputBox = styled.input`
  width: 300px;
  height: 60px;
  font-size: 20px;
  line-height: 30px;
  padding: 1rem;
  /* border: 1px solid black; */
  &:focus,
  textarea:focus,
  select:focus {
    outline: none;
  }
`;
const TextAreaBox = styled.textarea`
  width: 830px;
  height: 260px;
  font-size: 20px;
  line-height: 30px;
  padding: 1rem;
  /* border: 1px solid #ededed; */
  &:focus,
  textarea:focus,
  select:focus {
    outline: none;
  }
`;
const TermBox = styled.textarea`
  width: 830px;
  height: 260px;
  font-size: 16px;
  line-height: 30px;
  font-weight: 500;
  padding: 1rem;
  border: 1px solid #ededed;
  &:focus,
  textarea:focus,
  select:focus {
    outline: none;
  }
`;
const CheckBoxStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LabelStyle = styled.label`
  cursor: pointer;
  font-weight: bold;
  font-size: 21px;
  color: #000000;
  line-height: 29px;
  display: flex;
  align-items: center;
  margin-left: 20px;
`;
const CheckIcon = styled.img`
  cursor: pointer;
  width: 36px;
  height: 36px;
`;
const ButtonBoxStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 103px;
`;
const ButtonStyle = styled.button`
  width: 270px;
  height: 66px;
  background-color: #8e111b;
  font-weight: bold;
  font-size: 30px;
  color: #ffffff;
  cursor: pointer;
`;
function PcThirdteenth() {
  const [checked, setChecked] = useState(false);
  //checkbox ???????????????
  const handleClick = (event) => {
    if (event === "false") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };
  const CheckUI = {
    true: (
      <CheckIcon
        src="./assets/checked.svg"
        onClick={() => handleClick(checked ? "true" : "false")}
      ></CheckIcon>
    ),
    false: (
      <CheckIcon
        src="./assets/check.svg"
        onClick={() => handleClick(checked ? "true" : "false")}
      ></CheckIcon>
    ),
  };
  return (
    <PageStyle>
      <InnerContainer>
        <TableHead>????????????</TableHead>
        <form>
          <TableStyle>
            <tbody>
              <tr>
                <TableTdFont>??????</TableTdFont>
                <TableTdStyle>
                  <InputBox></InputBox>
                </TableTdStyle>
              </tr>
              <TableTrStyle>
                <TableTdFont>?????????</TableTdFont>
                <TableTdStyle>
                  <InputBox></InputBox>
                </TableTdStyle>
              </TableTrStyle>
              <TableTrStyle>
                <TableTdFont>?????? ?????? ??????</TableTdFont>
                <TableTdStyle>
                  <InputBox></InputBox>
                </TableTdStyle>
              </TableTrStyle>
              <TableTrStyle>
                <TableTdFont>?????? ??????</TableTdFont>
                <TableTdStyle>
                  <TextAreaBox></TextAreaBox>
                </TableTdStyle>
              </TableTrStyle>
              <TableTrStyle>
                <TableTdFont>
                  ???????????? ?????? ???<br />
                  ????????????
                </TableTdFont>
                <TableTdStyle>
                  <TermBox defaultValue={Terms} readonly></TermBox>
                </TableTdStyle>
              </TableTrStyle>
            </tbody>
          </TableStyle>
          <CheckBoxStyle>
            {CheckUI[checked]}
            <LabelStyle onClick={() => handleClick(checked ? "true" : "false")}>
              <span>??????????????????????????? ???????????? ?????? ???????????????.</span>
            </LabelStyle>
          </CheckBoxStyle>
          <ButtonBoxStyle>
            <ButtonStyle type="submit">????????????</ButtonStyle>
          </ButtonBoxStyle>
        </form>
      </InnerContainer>
    </PageStyle>
  );
}

export default PcThirdteenth;
