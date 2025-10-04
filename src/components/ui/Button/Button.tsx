import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant: "primary" | "secondary" | "success" | "danger";
  type: "button" | "submit" | "reset";
  filtertype: "all" | "active" | "completed" | 'basic'
  className?: string
  theme: "dark" | "light"
}

export default function Button({
  children,
  onClick,
  variant = "primary",
  type = "button",
  filtertype,
  theme
}: ButtonProps) {
  return (
    <button

      className={`${styles.button} ${styles[variant]} ${styles[filtertype]} ${styles[theme]}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
