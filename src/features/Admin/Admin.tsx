import cn from "classnames";
import { Fragment, useState } from "react";
import * as React from "react";
import { useSelector } from "react-redux";
import { useFirebase } from "react-redux-firebase";
import { selectIsSignedIn } from "../../app/store/selectors";
import ColorDashboard from "../ColorDashboard/ColorDashboard";
import LoginForm from "../LoginForm/LoginForm";
import Orders from "../Orders/Orders";

import styles from "./Admin.module.scss";

interface IProps {
  onBack: () => void;
}

enum AdminViewsEnum {
  Colors,
  Orders,
}

const Admin = ({ onBack }: IProps) => {
  const firebase = useFirebase();
  const isSignedIn = useSelector(selectIsSignedIn);

  const [view, setView] = useState(AdminViewsEnum.Colors);

  const isOrders = view === AdminViewsEnum.Orders;
  const isColors = view === AdminViewsEnum.Colors;

  return (
    <div className={styles.container}>
      {isSignedIn ? (
        <Fragment>
          <header className={styles.header}>
            <button
              type="button"
              className={cn(styles.back, styles.btn)}
              onClick={onBack}
            >
              Назад
            </button>
            <button
              type="button"
              className={cn(styles.logout, styles.btn)}
              onClick={firebase.logout}
            >
              Выход
            </button>
          </header>

          <main className={styles.main}>
            <h2>
              {isOrders && "Заказы:"}
              {isColors && "Цвета:"}
            </h2>

            {isColors && <ColorDashboard />}
            {isOrders && <Orders />}
          </main>

          <footer className={styles.footer}>
            <button
              type="button"
              onClick={() => setView(AdminViewsEnum.Colors)}
              disabled={isColors}
              className={styles.control}
            >
              Цвета
            </button>
            <button
              className={styles.control}
              type="button"
              onClick={() => setView(AdminViewsEnum.Orders)}
              disabled={isOrders}
            >
              Заказы
            </button>
          </footer>
        </Fragment>
      ) : (
        <LoginForm />
      )}
    </div>
  );
};

export default Admin;
