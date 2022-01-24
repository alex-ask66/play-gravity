import cn from "classnames";
import { useCallback, useState } from "react";
import * as React from "react";
import { useSelector } from "react-redux";
import {
  // useFirebase,
  // useFirestore,
  useFirestoreConnect,
} from "react-redux-firebase";
// import uniqid from "uniqid";

import { selectColorItems } from "../../app/store/selectors";
import { IColorItem } from "../types";

import { ReactComponent as IconAdd } from "../../assets/icons/icon-add.svg";
import { ReactComponent as IconCancel } from "../../assets/icons/icon-cancel.svg";
import { ReactComponent as IconSave } from "../../assets/icons/icon-save.svg";
import { ReactComponent as IconEdit } from "../../assets/icons/icon-edit.svg";
import { ReactComponent as IconDelete } from "../../assets/icons/icon-delete.svg";

import styles from "./ColorDashboard.module.scss";

interface IColorCandidate extends Omit<Partial<IColorItem>, "id"> {
  id?: string;
}

interface IColorFormProps extends IColorCandidate {
  onChange: (
    name: keyof Partial<IColorCandidate>,
    value: string | boolean
  ) => void;
  onSave: () => void;
  onCancel: () => void;
}

const ColorForm = ({
  id,
  in_stock,
  name,
  hex,
  onChange,
  onSave,
  onCancel,
}: IColorFormProps) => {
  return (
    <div className={cn(styles.item, styles.form)}>
      <input
        type="text"
        value={name}
        placeholder="Имя"
        onChange={(e) => onChange("name", e.target.value)}
      />
      <div>{hex}</div>
      <input
        type="color"
        value={hex}
        onChange={(e) => onChange("hex", e.target.value)}
      />
      <input
        id={`color-${id}-${hex}`}
        type="checkbox"
        checked={in_stock}
        onChange={() => onChange("in_stock", !in_stock)}
        readOnly
      />
      <div className={styles.controls}>
        <button className={styles.button} onClick={onSave}>
          <IconSave />
        </button>
        <button className={styles.button} onClick={onCancel}>
          <IconCancel />
        </button>
      </div>
    </div>
  );
};

const ColorDashboard = () => {
  // const firestore = useFirestore();
  useFirestoreConnect<{ items: IColorItem[] }>({
    collection: "resources",
    doc: "colors",
  });

  // const colorsRef = useMemo(
  //   () => firestore.collection("resources").doc("colors"),
  //   [firestore]
  // );

  const colors = useSelector(selectColorItems);

  const [activeItem, setActiveItem] = useState<Partial<IColorCandidate> | null>(
    null
  );

  const handleEdit = useCallback(
    (color: IColorItem) => setActiveItem(color),
    []
  );
  const handleAdd = useCallback(
    () => setActiveItem({ hex: "#ffffff", name: "", in_stock: true }),
    []
  );
  const handleSave = useCallback(() => {
    console.log("save", activeItem);
    // const { id, ...rest } = activeItem || {};
    // if (activeItem) {
    //   colorsRef
    //     .update({
    //       items: firestore.FieldValue.arrayUnion({
    //         id: id || uniqid(),
    //         ...rest,
    //       }),
    //     })
    //     .then((ref) => console.log(ref));
    // }
  }, [activeItem]);

  const handleCancel = useCallback(() => setActiveItem(null), []);

  const handleDelete = useCallback((color: IColorItem) => {
    console.log("delete - ", color);
    // if (activeItem) {
    //   colorsRef
    //     .update({
    //       items: firestore.FieldValue.arrayRemove(color),
    //     })
    //     .then((ref) => console.log(ref));
    // }
  }, []);

  const handleChange = useCallback(
    (name: keyof Partial<IColorCandidate>, value: string | boolean) => {
      setActiveItem((prev) => {
        if (prev) {
          return {
            ...(prev ? prev : {}),
            [name]: value,
          };
        }
        return null;
      });
    },
    []
  );

  return (
    <div className={styles.container}>
      {activeItem && !activeItem.id ? (
        <ColorForm
          onChange={handleChange}
          onSave={handleSave}
          onCancel={handleCancel}
          {...activeItem}
        />
      ) : (
        <button
          className={cn(styles.item, styles.button, styles.addBtn)}
          onClick={handleAdd}
        >
          <IconAdd />
        </button>
      )}
      {colors?.map((color: IColorItem) => {
        const { id, hex: backgroundColor, name, in_stock } = color;
        const showForm = activeItem?.id === id;

        return showForm ? (
          <ColorForm
            key={id}
            {...activeItem}
            onChange={handleChange}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        ) : (
          <div className={styles.item} key={id}>
            <div>{name}</div>
            <div>{backgroundColor}</div>
            <div className={styles.preview} style={{ backgroundColor }} />
            <div>
              <input
                id={`color-${id}-${backgroundColor}`}
                type="checkbox"
                checked={in_stock}
                readOnly
              />
            </div>
            <div className={styles.controls}>
              <button
                className={styles.button}
                onClick={() => handleEdit(color)}
              >
                <IconEdit />
              </button>
              <button
                className={styles.button}
                onClick={() => handleDelete(color)}
              >
                <IconDelete />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ColorDashboard;
