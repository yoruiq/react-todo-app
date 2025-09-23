import React from "react";

import Button from "../Button/Button";
import styles from "./Filter.module.scss";

interface FilterProps {
  currentFilter: string;
  onFilterChange: (filter: "all" | "active" | "completed") => void;
}

export default function Filter({ currentFilter, onFilterChange }: FilterProps) {
  return (
    <div className={styles.filter}>
      <Button
        variant={currentFilter === "all" ? "success" : "secondary"}
        type={"button"}
        filtertype="all"
        onClick={() => onFilterChange("all")}
      >
        Все
      </Button>
      <Button
        variant={currentFilter === "active" ? "success" : "secondary"}
        type={"button"}
        filtertype="active"
        onClick={() => onFilterChange("active")}
      >
        Активные
      </Button>
      <Button
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
