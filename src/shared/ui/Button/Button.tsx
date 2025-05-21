import type { FC } from "react";
import type { IButton } from "./Button.type";
import classNames from "classnames";
import styles from "./Button.module.scss";

export const Button: FC<IButton> = ({ className = "", active, ...props }) => {
  return (
    <button
      className={classNames(styles["button"], className, {
        [styles["button--active"]]: active,
      })}
      {...props}
    />
  );
};
