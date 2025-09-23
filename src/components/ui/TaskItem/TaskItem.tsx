import React from "react";

import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./TaskItem.module.scss";

interface TaskItemProps {
  index: number;
  name: String;
  onDelete: (TaskId: number) => void;
  onToggle: (TaskId: number) => void
  id: number;
  completed: boolean;
}

export default function TaskItem({
  name,
  onDelete,
  onToggle,
  id,
  completed,
  index
}: TaskItemProps) {
  return (
    <div>
      <div className={styles.container}>
        <div className="index">{index + 1}</div>
        <Input type="checkbox" checked={completed} onChange={() => onToggle(id)} />
        <div className="task">{name}</div>
        <Button
          filtertype="all"
          variant={"primary"}
          type={"button"}
          onClick={() => onDelete(id)}
        >
          Удалить
        </Button>
      </div>
    </div>
  );
}
