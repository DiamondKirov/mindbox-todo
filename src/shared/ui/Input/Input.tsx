import type { FC } from "react";
import type { IInput } from "./Input.type";
import classNames from "classnames";
import styles from "./Input.module.scss";

export const Input: FC<IInput> = ({ error, className, ...props }) => {
  return (
    <div
      className={classNames(styles["form-element"], className, {
        [styles["form-element--error"]]: !!error,
      })}
    >
      <input className={styles["form-element__input"]} {...props} />
      {error && <p className={styles["form-element__error"]}>{error}</p>}
    </div>
  );
};
