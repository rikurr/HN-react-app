import React, { useContext } from "react";
import styled from "styled-components";

import { StoryContext } from "../provider/story/story.provider";

import { LIGHT_ASH, PURPLE } from "../utils/colors";

const ListContainer = styled.ul`
  font-size: 1.2rem;
  color: ${LIGHT_ASH};
  list-style: none;
  margin-top: 4rem;
`;

const ListItem = styled.ul`
  color: ${LIGHT_ASH};
  text-decoration: none;
  display: block;
  padding: 1rem 2rem;
  position: relative;
  display: flex;

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 3px;
    background-color: ${PURPLE};
    transform: scaleY(0);
    transition: transform 0.2s, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s;
  }

  &:hover::before {
    transform: scaleY(1);
    width: 100%;
  }
`;

const Span = styled.span`
  position: relative;
  z-index: 100;
`;
const SideList = () => {
  const {
    handleGetNewStory,
    handleGetTopStories,
  } = useContext(StoryContext);

  return (
    <ListContainer>
      <ListItem>
        <Span onClick={handleGetTopStories}>Top Stories</Span>
      </ListItem>
      <ListItem>
        <Span onClick={handleGetNewStory}>New Stories</Span>
      </ListItem>
    </ListContainer>
  );
};

export default SideList;
