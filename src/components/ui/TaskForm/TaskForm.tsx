import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import styles from "./TaskForm.module.scss";
import { useState } from "react";

interface TaskFormProps {
  onAddTask: (title: string) => void;
}

export default function TaskForm({ onAddTask }: TaskFormProps) {

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
    <div className={styles.taskform}>
      <Input
        type="text"
        variant="primary"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Напиши задачу"
      />
      <Button  filtertype='all' variant="primary" type="button" onClick={handleSubmit}>
        Создать задачу
      </Button>
    </div>
  );
}
