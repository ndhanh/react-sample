import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../actions";

export default function Post() {
  const articles = useSelector((state) => state.remoteArticles.slice(0, 10));
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <ul>
      {articles.map((el, index) => (
        <li key={index}>{el.title}</li>
      ))}
    </ul>
  );
}
