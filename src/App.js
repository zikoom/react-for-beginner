import "./App.css";

import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();

    if (toDo) {
      setToDos((curArray) => [...curArray, toDo]);
      setToDo("");
    }
  };
  console.log(toDos);
  return (
    <div>
      <h1>My ToDos: {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={toDo} placeholder="Write to do" />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
