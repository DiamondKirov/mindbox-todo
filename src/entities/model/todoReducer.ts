import type { ITodoItem } from "./types";

type Action =
  | { type: "ADD"; payload: string }
  | { type: "TOGGLE"; payload: number }
  | { type: "CLEAR" };

export const todoReducer = (state: ITodoItem[], action: Action) => {
  switch (action.type) {
    case "ADD": {
      return [
        ...state,
        {
          id: new Date().getTime(),
          label: action.payload,
          checked: false,
        },
      ];
    }
    case "TOGGLE": {
      return state.map((todo) => {
        return {
          ...todo,
          checked: todo.id == action.payload ? !todo.checked : todo.checked,
        };
      });
    }
    case "CLEAR": {
      return [];
    }
  }
};
