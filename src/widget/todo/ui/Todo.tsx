import { useMemo, useReducer, useState, type FC } from "react";
import { Button, Title } from "../../../shared/ui";
import { TodoAdd } from "../../../features/todoAdd";
import { TodoList } from "../../../features/todoList";
import { TodoFilter } from "../../../features/todoFilter";
import {
  filterTodo,
  todoReducer,
  type FilterTodoType,
} from "../../../entities";
import styles from "./Todo.module.scss";

export const Todo: FC = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [filter, setFilter] = useState<FilterTodoType>("all");

  const filteredTodos = useMemo(
    () => filterTodo(todos, filter),
    [todos, filter]
  );

  const handleCrateTodo = (label: string) => {
    dispatch({ type: "ADD", payload: label });
  };

  const handlerToggleTodo = (id: number) => {
    dispatch({ type: "TOGGLE", payload: id });
  };

  const handlerClearTodo = () => {
    dispatch({ type: "CLEAR" });
  };

  const handleChangeFilter = (newFilter: FilterTodoType) => {
    setFilter(newFilter);
  };

  return (
    <section className={styles["todo"]}>
      <Title className={styles["todo__title"]} center>
        Todo
      </Title>
      <div className={styles["todo__wrapper"]}>
        <TodoAdd className={styles["todo__add"]} onSubmit={handleCrateTodo} />
        <TodoList
          className={styles["todo__list"]}
          todos={filteredTodos}
          onToggle={handlerToggleTodo}
        />
        <div className={styles["todo__bottom"]}>
          <p>Количество: {filteredTodos.length}</p>
          <TodoFilter current={filter} onChange={handleChangeFilter} />
          <Button onClick={handlerClearTodo}>Очистить</Button>
        </div>
      </div>
    </section>
  );
};
