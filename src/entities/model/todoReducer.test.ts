import { describe, it, expect } from "vitest";
import { todoReducer } from "./todoReducer";
import type { ITodoItem } from "./types";

describe("todoReducer", () => {
  it("добавляет задачу", () => {
    const initial: ITodoItem[] = [];
    const result = todoReducer(initial, {
      type: "ADD",
      payload: "Новая задача",
    });

    expect(result.length).toBe(1);
    expect(result[0].label).toBe("Новая задача");
    expect(result[0].checked).toBe(false);
  });

  it("переключает completed", () => {
    const initial: ITodoItem[] = [{ id: 1, label: "Test", checked: false }];
    const result = todoReducer(initial, { type: "TOGGLE", payload: 1 });

    expect(result[0].checked).toBe(true);
  });

  it("удаляет задачу", () => {
    const initial: ITodoItem[] = [{ id: 1, label: "Удалить", checked: false }];
    const result = todoReducer(initial, { type: "CLEAR" });

    expect(result.length).toBe(0);
  });
});
