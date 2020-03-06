import { useState, useEffect } from "react";
import debounce from "../utils/debounce";

const MAX_STORIES = 500;
const STORY_IMCREMENT = 60;

const useScrollbar = () => {
  const [loading, setLoadingState] = useState(false);
  const [count, setCountState] = useState(STORY_IMCREMENT);

  const handleScroll = debounce(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    ) {
      return false;
    }
    setLoadingState(true);
  },50);

  useEffect(() => {
    if (!loading) return;

    if (count + STORY_IMCREMENT >= MAX_STORIES) {
      setCountState(MAX_STORIES);
    } else {
      setCountState(count + STORY_IMCREMENT);
    }
    setLoadingState(false);
  }, [loading]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return { count };
};

export default useScrollbar;
