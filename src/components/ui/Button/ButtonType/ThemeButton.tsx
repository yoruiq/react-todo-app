import Button from "../Button";
import styles from "./ThemeButton.module.scss"

interface ButtonTypeProps {
    changeTheme: () => void
    theme: "dark" | "light"
}

export default function ButtonType({changeTheme, theme}: ButtonTypeProps) {
  
  return (
    <div className={styles.container}>
      <Button
        theme={theme}
        variant={"primary"}
        type={"button"}
        filtertype={"basic"}
        onClick={changeTheme}
      >
        Тема
      </Button>
    </div>
  );
}
