import React from "react";
import { useDispatch } from "react-redux";
import { addArticle } from "../actions";

export default function Form() {
  const [title, setTitle] = React.useState("");
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addArticle({ title }));
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" value={title} onChange={handleChange} />
      </div>
      <button type="submit">SAVE</button>
    </form>
  );
}

// const Form = connect(null, mapDispatchToProps)(ConnectedForm);

// export default Form;
