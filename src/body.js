import React, { useContext } from "react";
import styled from "styled-components";

import StoryCard from "./components/story-card.component";

import { StoryContext } from "./provider/story/story.provider";
import useScrollbar from "./hooks/use-scrollbar";

import { BLACK } from "./utils/colors";

const BodyContainer = styled.div`
  margin: 1.5rem;
  flex: 1;
  background-color: ${BLACK};
  align-items: center;
  justify-content: center;
  color: white;
  height: 40rem;
  overflow-y: scroll;
`;


const Body = () => {
  const { storyIds } = useContext(StoryContext)
  const { count } = useScrollbar();
  const {getPopularStoryIds} = useContext(StoryContext)
  getPopularStoryIds();
  return (
    <BodyContainer>
      {storyIds.slice(0, count).map(storyId => (
        <StoryCard key={storyId} storyId={storyId} />
      ))}
    </BodyContainer>
  );
};

export default Body;
