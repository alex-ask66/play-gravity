import cn from "classnames";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { useCallback, useMemo, useState } from "react";
import * as React from "react";
import { useFirebase } from "react-redux-firebase";
import * as yup from "yup";

import styles from "./LoginForm.module.scss";

interface IProps {
  className?: string;
}

interface IUserData {
  email: string;
  password: string;
}

const LoginForm = ({ className }: IProps) => {
  const firebase = useFirebase();
  const [error, setError] = useState<string | null>();

  const initialValues: IUserData = useMemo(
    () => ({ email: "", password: "" }),
    []
  );
  const validationSchema = useMemo(
    () =>
      yup.object().shape({
        email: yup.string().required("Нужно заполнить"),
        password: yup.string().required("Без пароля никак"),
      }),
    []
  );

  const handleSubmit = useCallback(
    ({ email, password }, { setSubmitting }: FormikHelpers<IUserData>) => {
      setSubmitting(true);
      setError(null);
      return firebase
        .login({ email, password })
        .then((smth) => {
          return smth;
        })
        .catch((err) => {
          setError(err && err.message ? err.message : "Ошибка авторизации");
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
    [firebase]
  );

  return (
    <div className={cn(className, styles.container)}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <Field id="email" name="email" placeholder="email" />
            </div>
            <div>
              <Field id="password" name="password" placeholder="password" />
            </div>
            {error && <div className={styles.error}>{error}</div>}
            <button disabled={isSubmitting} type="submit">
              Авторизация
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
