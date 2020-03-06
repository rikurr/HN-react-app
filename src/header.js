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

const Name = styled.h3`
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
      <Name>News HN</Name>

    </HeaderContainer>
  );
};

export default Header;
