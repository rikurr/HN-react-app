import React from "react";
import styled from "styled-components";

import SideList from './components/list.component'
import { LIGHT_BLACK } from "./utils/colors";

const SideVarContainer = styled.div`
  background-color: ${LIGHT_BLACK};
  flex: 0 0 18%;
  border-radius: 0 0 0 30px;
  display: flex;
`;

const SideVar = () => {
  return (
    <SideVarContainer>
      <SideList />
    </SideVarContainer>
  );
};

export default SideVar;
