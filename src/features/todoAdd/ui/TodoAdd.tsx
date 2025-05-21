import { useState, type ChangeEvent, type FC, type FormEvent } from "react";
import { Button, Input } from "../../../shared/ui";
import type { ITodoAdd } from "./TodoAdd.type";
import classNames from "classnames";
import styles from "./TodoAdd.module.scss";

export const TodoAdd: FC<ITodoAdd> = ({ className = "", onSubmit }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value) {
      if (onSubmit) onSubmit(value);
      setValue("");
    }
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form
      className={classNames(styles["todo-add"], className)}
      onSubmit={handleSubmit}
    >
      <Input
        placeholder="Название задачи"
        className={styles["todo-add__input"]}
        value={value}
        onChange={handleChangeInput}
      />
      <Button className={styles["todo-add__button"]} active>
        Сохранить
      </Button>
    </form>
  );
};
