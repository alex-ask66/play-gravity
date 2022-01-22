import * as React from "react";
import cn from "classnames";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";

import { selectColorItems } from "../../app/store/selectors";
import { IColorItem } from "../types";
import Palette from "../Palette/Palette";

import styles from "./Colors.module.scss";

interface IProps {
  onClick: (color: string) => void;
}

const Colors: React.FC<IProps> = ({ onClick }) => {
  useFirestoreConnect<{ items: IColorItem[] }>({
    collection: "resources",
    doc: "colors",
  });
  const colors = useSelector(selectColorItems);

  const middle = React.useMemo(() => {
    if (!colors || !colors.length) {
      return undefined;
    }

    return colors.length % 2 === 0 ? colors.length / 2 : 1 + colors.length / 2;
  }, [colors]);

  return (
    <>
      {middle
        ? [
            <Palette
              onClick={onClick}
              items={colors.slice(0, middle)}
              className={cn(styles.container, styles.left)}
              key="left"
            />,
            <Palette
              onClick={onClick}
              items={colors.slice(middle)}
              className={cn(styles.container, styles.right)}
              key="right"
            />,
          ]
        : null}
    </>
  );
};

export default Colors;
