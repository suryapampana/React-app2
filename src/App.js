import "./App.css";
import { useState } from "react";

export default function App() {
  const [textInput, setTextInput] = useState("");
  const updateTextInput = (e) => setTextInput(e.target.value);

  const [list, setList] = useState([]);
  const postTweet = () => {
    setList([textInput, ...list]);
    setTextInput("");
  };

  return (
    <div>
      <h1 className="bg-primary text-light p-3" style={{ textAlign: "center" }}>
        Mini Twitter
      </h1>

      <div className="alert alert-dark row">
        <input
          type="text"
          value={textInput}
          onChange={(e) => updateTextInput(e)}
          className="form-control mb-1"
          placeholder="post tweet"
        />
        <input
          type="button"
          className="btn btn-dark"
          onClick={() => postTweet()}
          value="Tweet"
        />
      </div>

      {list.map((item, index) => (
        <div key={index} className="alert alert-secondary">
          {item}
        </div>
      ))}
    </div>
  );
}
