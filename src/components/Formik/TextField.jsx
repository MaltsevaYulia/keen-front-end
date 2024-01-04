import React from 'react';
import { ErrorMessage, useField, Field } from 'formik';
import styles from './TextField.module.scss';

export const TextField = ({ ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className={styles.erorr}>
        <label htmlFor={field.name} />
        <Field
          className={
            meta.touched && meta.error ? styles.inputError : styles.input
          }
          autoComplete="off"
          {...field}
          {...props}
        />

        <ErrorMessage
          component={'div'}
          name={field.name}
          className={styles.erorr__text}
        />
      </div>
    </>
  );
};

export default TextField;
