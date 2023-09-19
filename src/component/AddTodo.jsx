import { useState } from "react";
import { useTodo } from "./Taskprovider";

function AddTodo() {
  const [text, setText] = useState("");
  const { todo, setTodo } = useTodo();
  function handleAdd() {
    if (text) {
      // if input would be empty it wont add anything
      setTodo([
        ...todo,
        {
          id: nextId++,
          text: text,
          done: false,
        },
      ]);
      fetch("http://localhost:5000/todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ text: text, done: false }),
      });
    }
    setText("");
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-primary w-full max-w-xs"
        onChange={(e) => setText(e.target.value)}
        required
        value={text}
        // i add value when add pres button input will be cleaned i add setText('') in handleAdd func
      />
      <button className="btn btn-outline btn-accent" onClick={handleAdd}>
        Add todo
      </button>
    </div>
  );
}
export default AddTodo;
let nextId = 2;
