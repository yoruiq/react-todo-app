import React, { useState } from "react";
import styles from "./Search.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";

interface SearchProps {
  search: (title: string) => void
  theme: "dark" | "light"
}

export default function Search({search, theme}: SearchProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const searchButton = () => {
    search(inputValue)
    setInputValue('')
  }

  return (
    <>
      <Input 
      type="text"
      placeholder="Поиск..." 
      value={inputValue} 
      onChange={handleInput} 
      />
      <Button
      theme={theme}
        variant={"primary"}
        type={"button"}
        filtertype={"basic"}
        className={styles.button}
        onClick={searchButton}
      >
        Искать
      </Button>
    </>
  );
}
