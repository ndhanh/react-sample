import {
  ADD_ARTICLE,
  DATA_LOADED,
  DATA_REQUESTED,
} from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function getData() {
  return async function (dispatch) {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await response.json();
    dispatch({ type: DATA_LOADED, payload: json });
  };
}

export function getDataWithSaga(url) {
  return { type: DATA_REQUESTED, payload: { url } };
}
