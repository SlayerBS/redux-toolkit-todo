import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo, fetchTodos } from "./store/todoSlice";

import TodoList from "./components/TodoList";
import InputField from "./components/InputField";

import "./App.css";
function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    if (text.trim()) {
      dispatch(addTodo({ text }));
      setText(" ");
    }
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="App">
      <InputField value={text} handleInput={setText} handleSubmit={addTask} />
      <TodoList />
    </div>
  );
}

export default App;
