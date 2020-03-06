import axios from "axios";

const BASE_URL = "https://hacker-news.firebaseio.com/v0/";
const NEW_STORIES_URL = `${BASE_URL}newstories.json`;
const POPULAR_STORIES_ULR = `${BASE_URL}topstories.json`;

const STORY_URL = `${BASE_URL}item/`;

export const getNewStoryIds = async () => {
  try {
    const newsResponse = await axios.get(NEW_STORIES_URL);
    const news = await newsResponse.data;
    return news;
  } catch (err) {
    console.log("loading error");
  }
};

export const getPopularStoryIds = async () => {
  try {
    const newsResponse = await axios.get(POPULAR_STORIES_ULR);
    const news = await newsResponse.data;
    return news;
  } catch (err) {
    console.log("loading error");
  }
};


export const getStory = async storyId => {
  const storyResponse = await axios.get(`${STORY_URL + storyId}.json`);
  const story = await storyResponse.data;
  return story;
};
