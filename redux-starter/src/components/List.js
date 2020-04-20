import React from "react";
import { useSelector } from "react-redux";

export default function List() {
  const articles = useSelector((state) => state.articles);
  return (
    <ul>
      {articles.map((el, index) => (
        <li key={index}>{el.title}</li>
      ))}
    </ul>
  );
}
