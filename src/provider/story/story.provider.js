import React, { createContext, useState, useEffect } from "react";

import {
  getNewStoryIds,
  getPopularStoryIds,
  getStory
} from "../../utils/story-url";

export const StoryContext = createContext();

const StoryProvider = ({ children }) => {
  const [storyIds, setStoryIds] = useState([]);
  const [select, setSelect] = useState(false);

  const handleGetNewStory = () => {
    getNewStoryIds().then(data => setStoryIds(data));
    setSelect(!select);
  };

  const handleGetTopStories = () => {
    getPopularStoryIds().then(data => setStoryIds(data));
    setSelect(!select);
  };

  useEffect(() => {
    getNewStoryIds().then(data => setStoryIds(data));
  }, [select]);

  return (
    <StoryContext.Provider
      value={{
        storyIds,
        getNewStoryIds,
        getPopularStoryIds,
        getStory,
        handleGetNewStory,
        handleGetTopStories,
      }}
    >
      {children}
    </StoryContext.Provider>
  );
};

export default StoryProvider;
