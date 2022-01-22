import cn from "classnames";
import * as React from "react";

import { IColorItem } from "../types";

import styles from "./Palette.module.scss";

interface IProps {
  className?: string;
  items: IColorItem[];
  onClick: (color: string) => void;
}

const Palette = ({ className, items, onClick }: IProps) => {
  return (
    <div className={cn(styles.container, className)}>
      {items.map(({ id, name, hex }) => (
        <div
          className={styles.color}
          style={{ backgroundColor: hex }}
          key={id}
          title={name}
          onClick={() => onClick(hex)}
        />
      ))}
    </div>
  );
};

export default Palette;
