import { ADD_TWEET } from "./actionTypes";
export const addTweet = (content) => ({
  type: ADD_TWEET,
  payload: {
    content,
  },
});
