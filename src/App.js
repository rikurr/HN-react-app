import React from "react";
import styled from "styled-components";

import Header from "./header";
import SideVar from "./side-var";
import Body from "./body";

import {BLACK} from './utils/colors'

const StyledContainer = styled.div`
  max-width: 120rem;
  min-height: 100%;
  background-color: ${BLACK};
  box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.5);
  border-radius: 30px;
`;
const Content = styled.div`
  display: flex;
`;

const App = () => {
  return (
    <StyledContainer>
      <Header />
      <Content>
        <SideVar />
        <Body />
      </Content>
    </StyledContainer>
  );
};

export default App;
