import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addNumber, addTodo, deleteTodo } from "./redux/actions/todo";

function App() {
  const todoList = useSelector((state) => state.todo.todoList);
  console.log("todolist", todoList);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo("");
  };

  const handleDelete = (key) => {
    return todoList.filter((list) => list.key !== key);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="todoapp"
            onChange={(e) => setTodo(e.target.value)}
            placeholder=""
            value={todo}
          />
          <input type="button" value="Submit" onClick={handleSubmit} />
        </div>
      </form>
      {todoList &&
        todoList.map((todo) => {
          return (
            <div key={todo.key}>
              <h2>
                <button
                  onClick={() => dispatch(deleteTodo(handleDelete(Todo.key)))}
                >
                  delete
                </button>
              </h2>
              <h1>{todo.name}</h1>
            </div>
          );
        })}
    </div>
  );
}

export default App;
