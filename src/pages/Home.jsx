import AddTodo from "../component/AddTodo";

import { useTodo } from "../component/Taskprovider";
import PropTypes from "prop-types";

function Home() {
  const { todo, setTodo } = useTodo();
  function handleDelete(todos) {
    setTodo(todo.filter((td) => td.id !== todos.id));
    if (todos.id > 1) {
      fetch("http://localhost:5000/todo/" + todos.id, {
        method: "DELETE",
      });
    }
  }
  return (
    <div className="text-center py-9 ">
      <div className=" m-auto">
        <AddTodo />
      </div>
      <div className="overflow-x-auto py-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>todo</th>
              <th>done</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            <ToDo todo={todo} onDelete={handleDelete} />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;

export function ToDo({ todo, onDelete }) {
  return (
    <>
      {todo &&
        todo.map((td) => (
          <>
            <tr className="bg-base-200">
              <th>{td.id}</th>
              <td>{td.text}</td>
              <td>{todo.done ? "is done" : "not done yet"}</td>
              <td>
                <button
                  className="btn btn-outline btn-secondary"
                  onClick={() => onDelete(td)}
                >
                  delete
                </button>
              </td>
            </tr>
          </>
        ))}
    </>
  );
}

ToDo.propTypes = {
  todo: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func,
};
