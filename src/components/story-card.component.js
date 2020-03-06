import React, { useState, useEffect} from "react";
import styled from "styled-components";

import { getStory } from "../utils/story-url";
import { mapTime } from "./map-time";

import {
  LIGHT_BLACK,
  OX,
  DARK_GREY,
  LIGHT_ASH,
  GREEN,
  ASH
} from "../utils/colors";

const StoryCardContainer = styled.div`
  background-color: ${LIGHT_BLACK};
  border-radius: 10px;
  box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.5);
  margin-top: 1rem;
`;

const StoryText = styled.div`
  position: relative;
  border-radius: 3px;
  display: grid;
`;

const ByStory = styled.p`
  grid-row-start: 3;
  margin: 0;
  color: ${LIGHT_ASH};
  font-size: 0.8rem;
`;

const StoryUrl = styled.a`
  grid-row-start: 1;
  text-decoration: none;
  color: ${OX};

  &:hover {
    color: ${DARK_GREY};
  }
`;

const initialState = {
  title: "",
  url: "",
  by: "",
  time: ""
};

const StoryCard = ({ storyId }) => {
  const [story, setStoryState] = useState(initialState);

  const { title, url, by, time } = story;
  useEffect(() => {
    getStory(storyId).then(data => setStoryState(data));
  }, []);

  return (
    <StoryCardContainer>
      <StoryText>
        <StoryUrl href={url} target="blank">
          {title}
        </StoryUrl>
        <ByStory>
          By: {by} Posted: {mapTime(time)}
        </ByStory>
      </StoryText>
    </StoryCardContainer>
  );
};

export default StoryCard;
