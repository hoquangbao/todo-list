import React, { useState } from "react";

function App() {
  const [list, setList] = useState([]);

  const [todoItem, setTodoItem] = useState();

  const handleSubmit = event => {
    event.preventDefault();
    const tmp = [...list, todoItem];
    setList(tmp);
    setTodoItem("");
  };

  const handleChange = event => {
    setTodoItem(event.target.value);
  };

  return (
    <div>
      <header>
        <h1>TODO LIST</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Input todo item"
          value={todoItem}
          onChange={handleChange}
        />
        <button>Add</button>

        {list.map(function(item) {
          return <p style={{ color: "red" }}>{item}</p>;
        })}
      </form>
    </div>
  );
}

export default App;
