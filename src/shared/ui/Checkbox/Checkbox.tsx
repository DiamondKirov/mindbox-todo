import type { FC } from "react";
import type { ICheckbox } from "./Checkbox.type";
import classNames from "classnames";
import styles from "./Checkbox.module.scss";

export const Checkbox: FC<ICheckbox> = ({
  className = "",
  label,
  ...props
}) => {
  return (
    <label className={classNames(styles["form-checkbox"], className)}>
      <input
        className={styles["form-checkbox__input"]}
        {...props}
        type="checkbox"
      />
      <p className={styles["form-checkbox__label"]}>{label}</p>
    </label>
  );
};
