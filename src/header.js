import React from "react";
import styled from "styled-components";

import Input from "./components/input.component";
import { GREEN, OX, LIGHT_BLACK } from "./utils/colors";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  height: 5rem;
  background-color: ${LIGHT_BLACK};
  border-radius: 20px 20px 0 0;
  align-items: center;
`;

const Logo = styled.span`
  stroke: ${OX};
  margin-left: 3rem;
`;

const Icon = styled.span`
  margin-right: 3rem;
  fill: ${GREEN};
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <title>enlarge</title>
          <path d="M32 0h-13l5 5-6 6 3 3 6-6 5 5z"></path>
          <path d="M32 32v-13l-5 5-6-6-3 3 6 6-5 5z"></path>
          <path d="M0 32h13l-5-5 6-6-3-3-6 6-5-5z"></path>
          <path d="M0 0v13l5-5 6 6 3-3-6-6 5-5z"></path>
        </svg>
      </Logo>
      <Input />
      <Icon>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <title>star-empty</title>
          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798zM16 23.547l-6.983 3.671 1.334-7.776-5.65-5.507 7.808-1.134 3.492-7.075 3.492 7.075 7.807 1.134-5.65 5.507 1.334 7.776-6.983-3.671z"></path>
        </svg>24
      </Icon>
    </HeaderContainer>
  );
};

export default Header;
