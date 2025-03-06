import React from "react";

function TaskList({ tasks, removeTask }) {
  return (
    <div className="tasks-container">
      {tasks.map((task, index) => (
        <div key={index} className="task">
          <span>{task}</span>
          <button onClick={() => removeTask(index)}>❌</button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
