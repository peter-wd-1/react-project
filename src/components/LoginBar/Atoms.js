import styled from "@emotion/styled";
import { Section } from "components/common";
import loginIcon from "images/loginIcon.svg";
export const LoginSection = styled(Section)`
  grid-row: 1/2;
  grid-column: 5/6;
`;

export const SocialSection = styled.div`
  width: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 10%;
`;

export const LoginButton = styled.div`
  width: 150px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  cursor: pointer;
  border-left: solid 2px lightgray;
  height: 30px;
  &:after {
    content: url(${loginIcon});
    padding-right: 10%;
  }
`;