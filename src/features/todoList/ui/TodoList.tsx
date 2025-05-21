import type { FC } from "react";
import type { ITodoList } from "./TodoList.type";
import { Checkbox } from "../../../shared/ui";
import styles from "./TodoList.module.scss";
import classNames from "classnames";

export const TodoList: FC<ITodoList> = ({
  className = "",
  todos,
  onToggle,
}) => {
  const handleChange = (id: number) => {
    onToggle(id);
  };

  return (
    <div className={classNames(styles["todo-list"], className)}>
      {todos.map((todo) => {
        return (
          <div
            key={todo.id}
            className={classNames(styles["todo-list__item"], {
              [styles["todo-list__item--checked"]]: todo.checked,
            })}
          >
            <Checkbox
              onChange={() => handleChange(todo.id)}
              checked={todo.checked}
              label={todo.label}
            />
          </div>
        );
      })}
    </div>
  );
};
