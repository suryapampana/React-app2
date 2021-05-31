import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [list] = useState([1, 1, 1, 1]);

  return (
    <div>
      <h1 className="bg-light text-danger p-3 sticky-top" className="App">
        React Bootstrap
      </h1>

      {list.map((item, index) => (
        <div key={index} className="alert-secondary p-3 m-3 rounded">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          ipsa, hic similique laboriosam iusto ea dolor maiores ullam voluptatum
          error numquam ad dolore impedit? Suscipit rerum odio distinctio
          eveniet dolore!
        </div>
      ))}
    </div>
  );
}
