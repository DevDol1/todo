import React, { useState } from "react";

function TodoInput({ addTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = () => {
    addTask(task);
    setTask("");
  };

  return (
    <div className="todoBody">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="todoIn"
        placeholder="Add a task you should do"
      />
      <img
        src="/images/plusSign.png"
        alt="Add Task"
        className="todoButss"
        onClick={handleSubmit}
      />
    </div>
  );
}

export default TodoInput;
