import { ADD_TWEET } from "../actionTypes";
const initialState = {
  tweets: [],
};

const tweetReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TWEET: {
      const { content } = action.payload;
      return {
        ...state,
        tweets: [...state.tweets, content],
      };
    }
    default:
      return state;
  }
};
