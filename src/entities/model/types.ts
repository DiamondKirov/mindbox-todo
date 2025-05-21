export interface ITodoItem {
  id: number;
  label: string;
  checked?: boolean;
}

export type FilterTodoType = "all" | "active" | "completed";
