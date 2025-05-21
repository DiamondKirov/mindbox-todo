import { type FC } from "react";
import type { ITitle } from "./Title.type";
import classNames from "classnames";
import styles from "./Title.module.scss";

export const Title: FC<ITitle> = ({ className = "", center, children }) => {
  return (
    <h1
      className={classNames(styles["title"], className, {
        [styles["title--center"]]: center,
      })}
    >
      {children}
    </h1>
  );
};
