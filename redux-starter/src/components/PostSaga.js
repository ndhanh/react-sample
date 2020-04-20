import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDataWithSaga } from "../actions";

export default function PostSaga() {
  const articles = useSelector((state) => state.sagaArticles.slice(0, 10));
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getDataWithSaga("https://api.valentinog.com/api/link/"));
  }, [dispatch]);

  return (
    <ul>
      {articles.map((el, index) => (
        <li key={index}>{el.title}</li>
      ))}
    </ul>
  );
}
