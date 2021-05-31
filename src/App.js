import "./App.css";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <MyDynamicInputCompoent />
      <MyInputCompoent />
    </div>
  );
}

const MyDynamicInputCompoent = () => {
  const [list, setList] = useState([]);

  // STEP 1
  const [tweetInput, setTweetInput] = useState("");

  // STEP 2 :: e is important here;
  const readAndUpdateTweet = (e) => setTweetInput(e.target.value);

  const postTheTweet = () => {
    setList([tweetInput, ...list]);
    setTweetInput("");
  };

  return (
    <div>
      <h2>Tweets</h2>
      <div>
        {/** STEP 3 value and onChange */}
        <input
          type="text"
          value={tweetInput}
          onChange={(e) => readAndUpdateTweet(e)}
          placeholder="your thought..."
        />
        <input
          type="button"
          value="Tweet here"
          onClick={() => postTheTweet()}
        />
      </div>

      {list.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

const MyInputCompoent = () => {
  const [list, setList] = useState(["Delhi", "Kolkata"]);

  const postTheTweet = () => {
    setList(["MUMBAI", ...list]);
  };

  return (
    <div>
      <h1>Mini Twitter</h1>
      <div>
        <input type="text" value="" placeholder="your thought..." />
        <input
          type="button"
          value="Tweet here"
          onClick={() => postTheTweet()}
        />
      </div>

      <h2>Tweets</h2>
      {list.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};
