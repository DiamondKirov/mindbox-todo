import type { FilterTodoType } from "../../../entities";

export interface ITodoFilter {
  current: FilterTodoType;
  onChange: (f: FilterTodoType) => void;
}
