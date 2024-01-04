import React from 'react';
import { ErrorMessage, useField } from 'formik';
import styles from './TextField.module.scss';

const TextareaField = ({ ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className={styles.erorr}>
        <label htmlFor={field.name} />
        <textarea
          className={
            meta.touched && meta.error ? styles.inputError : styles.textarea
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

export default TextareaField;
