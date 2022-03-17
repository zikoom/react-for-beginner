import "./App.css";

import Button from "./Button";
import styles from "./App.module.css";

import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("hello");
    return () => {
      console.log("bye");
    };
  }, []);
  return <h1>haha</h1>;
}

function App() {
  const [isShoing, setIsShoing] = useState(false);
  const onClick = () => setIsShoing((prev) => !prev);
  return (
    <div>
      <button onClick={onClick}>{isShoing ? "hide" : "show"}</button>
      {isShoing ? <Hello /> : null}
      <h1
        style={{
          display: isShoing ? "block" : "none",
        }}
      >
        hide and seek
      </h1>
    </div>
  );
}

export default App;
