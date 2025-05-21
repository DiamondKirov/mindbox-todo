import type { FC } from "react";
import type { ITodoFilter } from "./TodoFilter.type";
import { Button } from "../../../shared/ui";

export const TodoFilter: FC<ITodoFilter> = ({ current, onChange }) => {
  return (
    <div>
      <Button onClick={() => onChange("all")} active={current == "all"}>
        Все
      </Button>
      <Button onClick={() => onChange("active")} active={current == "active"}>
        Невыполненные
      </Button>
      <Button
        onClick={() => onChange("completed")}
        active={current == "completed"}
      >
        Выполненные
      </Button>
    </div>
  );
};
