import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import styles from "./TaskForm.module.scss";
import { useState } from "react";

interface TaskFormProps {
  onAddTask: (title: string) => void;
  theme: "dark" | "light"
}

export default function TaskForm({ onAddTask, theme }: TaskFormProps) {

  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim()) {
      onAddTask(inputValue);
      setInputValue("");
    }
  };

  return (
      <div className={`${styles.taskform} ${styles[theme]}`}>
        <Input
          type="text"
          variant="primary"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Напиши задачу"
        />
        <Button  filtertype='basic' variant="primary" type="button" onClick={handleSubmit} theme={theme}>
          Создать задачу
        </Button>
      </div>
  );
}
