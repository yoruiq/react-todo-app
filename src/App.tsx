import React from "react";
import "./style/App.scss";
import TaskItem from "./components/ui/TaskItem/TaskItem";
import TaskForm from "./components/ui/TaskForm/TaskForm";
import Filter from "./components/ui/Filter/Filter";
import { useState } from "react";

export interface TaskProps {
  id: number;
  name: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([
    { id: 1, name: "task1", completed: false },
    { id: 2, name: "task2", completed: false },
    { id: 3, name: "task3", completed: false },
  ]);

  const [filter, setFilter] = useState<"all" | "active" | "completed">(
    "active"
  );

  const DeleteTask = (TaskId: number) => {
    setTasks(tasks.filter((task) => TaskId !== task.id));
  };

  const CheckedTask = (TaskId: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === TaskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const addTask = (title: string) => {
    setTasks([...tasks, { id: Date.now(), name: title, completed: false }]);
  };

  const filteredTask = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="App">
      <TaskForm onAddTask={addTask} />
      <Filter currentFilter={filter} onFilterChange={setFilter} />

      {filteredTask.map((task, index) => (
        <TaskItem
          name={task.name}
          id={task.id}
          key={task.id}
          index={index}
          completed={task.completed}
          onDelete={DeleteTask}
          onToggle={CheckedTask}
        />
      ))}
    </div>
  );
}

export default App;
