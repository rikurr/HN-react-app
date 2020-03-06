import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";

import { getStory } from "../utils/story-url";
import { mapTime } from "./map-time";

import { StoryContext } from "../provider/story/story.provider";

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

const FavIcon = styled.span`
  position: absolute;
  right: 2rem;
  fill: ${ASH};
  &:hover {
    fill: ${GREEN};
  }
  @media screen and (max-width: 1200px) {
    position: relative;
    grid-row-start: 1;
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
  const [favorite, setFavorite] = useState([]);
  const [favCount, setFavCount] = useState(0);

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
        <FavIcon>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <title>star-empty</title>
            <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798zM16 23.547l-6.983 3.671 1.334-7.776-5.65-5.507 7.808-1.134 3.492-7.075 3.492 7.075 7.807 1.134-5.65 5.507 1.334 7.776-6.983-3.671z"></path>
          </svg>
        </FavIcon>
      </StoryText>
    </StoryCardContainer>
  );
};

export default StoryCard;
