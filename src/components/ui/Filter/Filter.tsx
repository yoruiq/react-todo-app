import React from "react";

import Button from "../Button/Button";
import styles from "./Filter.module.scss";

interface FilterProps {
  currentFilter: string;
  onFilterChange: (filter: "all" | "active" | "completed") => void;
  theme: "dark" | "light"
}

export default function Filter({ currentFilter, onFilterChange, theme }: FilterProps) {
  return (
    <div className={styles.filter}>
      <Button
      theme={theme}
        variant={currentFilter === "all" ? "success" : "secondary"}
        type={"button"}
        filtertype="all"
        onClick={() => onFilterChange("all")}
      >
        Все
      </Button>
      <Button
      theme={theme}
        variant={currentFilter === "active" ? "success" : "secondary"}
        type={"button"}
        filtertype="active"
        onClick={() => onFilterChange("active")}
      >
        Активные
      </Button>
      <Button
      theme={theme}
        variant={currentFilter === "completed" ? "success" : "secondary"}
        type={"button"}
        filtertype="completed"
        onClick={() => onFilterChange("completed")}
      >
        Завершенные
      </Button>
    </div>
  );
}
