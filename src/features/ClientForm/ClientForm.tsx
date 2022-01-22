import cn from "classnames";
import * as React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

import styles from "./ClientForm.module.scss";

interface IProps {
  onBack: () => void;
  onSubmit: (client: any) => void;
}

const ClientForm = ({ onBack, onSubmit }: IProps) => {
  const initialValues = { name: "", phone: "", notes: "" };

  const validationSchema = yup.object().shape({
    name: yup.string().required("Это поле обязательно"),
    phone: yup.string().required("Это поле обязательно"),
    notes: yup.string(),
  });

  return (
    <div className={cn(styles.container)}>
      <div className={styles.header}>
        <button type="button" onClick={onBack} className={styles.back}>
          Назад к выбору изделия
        </button>
        <div className={styles.greeting}>
          Пожалуйста, укажите Ваши контактные данные, чтобы мы могли связаться с
          Вами
        </div>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className={styles.form}>
          <div className={styles.section}>
            <Field
              className={styles.input}
              id="name"
              name="name"
              placeholder="Ваше имя"
            />
            <ErrorMessage
              name="name"
              className={styles.error}
              component="span"
            />
          </div>

          <div className={styles.section}>
            <Field
              className={styles.input}
              id="phone"
              name="phone"
              placeholder="Ваш номер телефона"
            />
            <ErrorMessage
              name="phone"
              className={styles.error}
              component="span"
            />
          </div>

          <div className={cn(styles.section, styles.textarea)}>
            <Field
              component="textarea"
              className={styles.input}
              id="notes"
              name="notes"
              placeholder="Отправьте нам сообщение, например, информацию про Ваше местоположение, удобное время для звонка, размер изделия или тип мессенджера..."
              rows={6}
            />
          </div>
          <div className={styles.controls}>
            <button type="submit" className={styles.submit}>
              Отправить
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ClientForm;
