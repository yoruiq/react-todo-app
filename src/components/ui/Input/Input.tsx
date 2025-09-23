import React from "react";
import styles from './Input.module.scss'

interface InputProps {
  type?: "text" | "password" | "email" | 'checkbox';
  variant?: 'secondary' | 'primary' | 'danger' | 'success';
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  checked?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input({ type = "text", variant = 'secondary', value, placeholder, disabled=false, checked=false, onChange}: InputProps) {
  return (
  <input 
  onChange={onChange}
  value={value}
  type={type} 
  placeholder={placeholder}
  disabled={disabled}
  checked={checked}
  className={`${styles.input} ${styles[variant]}`}
  />
);
}
