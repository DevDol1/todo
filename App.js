import React, { useState } from "react";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TaskList from "./components/TaskList";
import "./styles.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (!task.trim()) return;
    setTasks([...tasks, task]);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="mainBox">
      <Header />
      <TodoInput addTask={addTask} />
      <TaskList tasks={tasks} removeTask={removeTask} />
    </div>
  );
}

export default App;
