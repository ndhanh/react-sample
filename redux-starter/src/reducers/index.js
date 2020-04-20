import {
  ADD_ARTICLE,
  DATA_LOADED,
  DATA_LOADED_SAGA,
} from "../constants/action-types";

const initialState = {
  articles: [],
  remoteArticles: [],
  sagaArticles: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload),
      });
    case DATA_LOADED:
      return Object.assign({}, state, {
        remoteArticles: state.remoteArticles.concat(action.payload),
      });
    case DATA_LOADED_SAGA:
      return Object.assign({}, state, {
        sagaArticles: state.sagaArticles.concat(action.payload),
      });
    default:
      return state;
  }
};

export default rootReducer;
