import React from "react";
import List from "./List";
import Form from "./Form";
import Post from "./Posts";
import PostSaga from "./PostSaga";

const App = () => {
  return (
    <>
      <div>
        <h2>Articles</h2>
        <List />
      </div>
      <div>
        <h2>Add a new article</h2>
        <Form />
      </div>
      <div>
        <h2>API posts using redux-thunk</h2>
        <Post />
      </div>
      <div>
        <h2>API posts using redux-saga</h2>
        <PostSaga />
      </div>
    </>
  );
};

export default App;
