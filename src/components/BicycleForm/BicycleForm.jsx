import React from 'react';
import { Form, Formik } from 'formik';
import TextField from 'components/Formik/TextField';
import validationSchema from 'schemas/validationSchema';

import styles from './BicycleForm.module.scss';
import TextareaField from 'components/Formik/TextareaField';

const BicycleForm = () => {
    const handleSubmit = (values, actions) => {
      console.log("🚀 ~ handleSubmit ~ actions:", actions)
        console.log("🚀 ~ handleSubmit ~ values:", values)
        actions.resetForm();

      
  };

  return (
    <Formik
      initialValues={{
        name: '',
        type: '',
        color: '',
        id: '',
        status: '',
        price: '',
        wheelSize: '',
        description: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => handleSubmit(values, actions)}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <div className={styles.form__wrapper}>
            <div className={styles.form__inputBox}>
              <TextField
                label="name"
                name="name"
                type="text"
                placeholder="Name"
              />
              <TextField
                label="color"
                name="color"
                type="text"
                placeholder="Color"
              />
              <TextField
                label="price"
                name="price"
                type="text"
                placeholder="Price"
              />
            </div>
            <div className={styles.form__inputBox}>
              <TextField
                label="type"
                name="type"
                type="text"
                placeholder="Type"
              />
              <TextField
                label="wheelSize"
                name="wheelSize"
                type="number"
                placeholder="Wheel size"
              />
              <TextField
                label="id"
                name="id"
                type="text"
                placeholder="ID (slug): ХХХХХХХХХХХХХ"
              />
            </div>
          </div>
          <TextareaField
            label="description"
            name="description"
            type="text"
            placeholder="Description"
          />
          <div className={styles.form__btnBox}>
            <button
              className={styles.form__btn}
              type="submit"
              disabled={isSubmitting}
            >
              Save
            </button>
            <button
              className={styles.form__btn}
              type="reset"
              disabled={isSubmitting}
            >
              Clear
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default BicycleForm;
