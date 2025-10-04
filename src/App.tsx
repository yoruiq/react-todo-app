import React, { useEffect } from "react";
import "./style/App.scss";
import TaskItem from "./components/ui/TaskItem/TaskItem";
import TaskForm from "./components/ui/TaskForm/TaskForm";
import Filter from "./components/ui/Filter/Filter";
import Search from "./components/ui/Search/Search";
import { useState } from "react";
import ThemeButton from "./components/ui/Button/ButtonType/ThemeButton";

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

  const [search, setSearch] = useState<TaskProps[]>([])

  const [filter, setFilter] = useState<"all" | "active" | "completed">(
    "all"
  );

  const [theme, setTheme] = useState<"dark" | "light"> ("light")

  useEffect(() => {
  const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
  if (savedTheme) {
    setTheme(savedTheme);
  }
}, []);

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])
  

  useEffect(() => {
  document.body.className = theme;
}, [theme]);

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const DeleteTask = (TaskId: number) => {
    setTasks(tasks.filter((task) => TaskId !== task.id));
    setSearch([])
  };

  const CheckedTask = (TaskId: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === TaskId ? { ...task, completed: !task.completed } : task
      )
    );
    setSearch([])
  };

  const addTask = (title: string) => {
    setTasks([...tasks, { id: Date.now(), name: title, completed: false }]);
    setSearch([])
  };

  const filteredTask = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed
    return true;
  });

  const SearchTask = (title: string) => {
    const result = tasks.filter(task => 
       task.name.toLowerCase().includes(title.toLowerCase()) 
    )
    setSearch(result)
  }

  const tasksToShow = search.length > 0 ? search : filteredTask

  return (
    <div className={"App"}>

      <ThemeButton theme={theme} changeTheme={changeTheme}/>

      <TaskForm 
      theme={theme}
      onAddTask={addTask} 
      />

      <Filter theme={theme} currentFilter={filter} onFilterChange={(newFilter) => {setFilter(newFilter);
      setSearch([]);
      }}/>

      <Search 
      theme={theme}
      search={SearchTask}/>

      {tasksToShow.map((task, index) => (
        <TaskItem
          name={task.name}
          id={task.id}
          key={task.id}
          index={index}
          completed={task.completed}
          onDelete={DeleteTask}
          onToggle={CheckedTask}
          theme={theme}
        />
      ))}
    </div>
  );
}

export default App;
