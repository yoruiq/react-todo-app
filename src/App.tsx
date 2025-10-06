import React, { useEffect } from "react";
import "./style/App.scss";
import TaskItem from "./components/ui/TaskItem/TaskItem";
import TaskForm from "./components/ui/TaskForm/TaskForm";
import Filter from "./components/ui/Filter/Filter";
import Search from "./components/ui/Search/Search";
import { useState } from "react";
import ThemeButton from "./components/ui/Button/ButtonType/ThemeButton";
import  { useLocatStorage }  from "./hooks/useLocalStorage";
import { useTasks } from "./hooks/useTasks";

export interface TaskProps {
  id: number;
  name: string;
  completed: boolean;
}

function App() {
  const {
    tasks,
    addTask,
    deleteTask,
    toggleTask,
   } = useTasks([
    { id: 1, name: "task1", completed: false },
    { id: 2, name: "task2", completed: false },
    { id: 3, name: "task3", completed: false },
  ]);

  const [search, setSearch] = useState<TaskProps[]>([]);
  const [filter, setFilter] = useLocatStorage<"all" | "active" | "completed">(
    "filter",
    "all"
  );
  const [theme, setTheme] = useLocatStorage<"dark" | "light">("theme", "light");

  useEffect(() => {
    document.body.className = theme;
    setSearch([]);
  }, [theme]);

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const filteredTask = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const SearchTask = (title: string) => {
    const result = tasks.filter((task) =>
      task.name.toLowerCase().includes(title.toLowerCase())
    );
    setSearch(result);
  };

  const tasksToShow = search.length > 0 ? search : filteredTask;

  return (
    <div className={"App"}>
      <ThemeButton theme={theme} changeTheme={changeTheme} />

      <TaskForm theme={theme} onAddTask={addTask} />

      <Filter
        theme={theme}
        currentFilter={filter}
        onFilterChange={(newFilter) => {
          setFilter(newFilter);
          setSearch([]);
        }}
      />

      <Search theme={theme} search={SearchTask} />

      {tasksToShow.map((task, index) => (
        <TaskItem
          name={task.name}
          id={task.id}
          key={task.id}
          index={index}
          completed={task.completed}
          onDelete={deleteTask}
          onToggle={toggleTask}
          theme={theme}
        />
      ))}
    </div>
  );
}

export default App;
