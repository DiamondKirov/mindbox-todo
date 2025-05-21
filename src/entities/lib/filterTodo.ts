import type { FilterTodoType, ITodoItem } from "../model/types";

export const filterTodo = (items: ITodoItem[], type: FilterTodoType) => {
  switch (type) {
    case "active":
      return items.filter((item) => !item.checked);

    case "completed":
      return items.filter((item) => item.checked);

    default:
      return items;
  }
};
