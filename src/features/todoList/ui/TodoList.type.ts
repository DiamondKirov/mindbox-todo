import type { ITodoItem } from "../../../entities";

export interface ITodoList {
  todos: ITodoItem[];
  onToggle: (id: number) => void;
  className?: string;
}
