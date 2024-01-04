import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Formik } from 'formik';
import TextField from 'components/Formik/TextField';
import validationSchema from 'schemas/validationSchema';

import styles from './BicycleForm.module.scss';
import TextareaField from 'components/Formik/TextareaField';
import { addBicycle } from 'store/operations';
import { selectError, selectBicycles } from 'store/selectors';
import { store } from 'store/store';
import statuses from 'constants/statuses';

const BicycleForm = () => {
  const bicycles = useSelector(selectBicycles);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const validateId = value => {
    let error;
    const isIdUnique = !bicycles.some(bicycle => bicycle.id === value);
    if (!isIdUnique) {
      error = 'ID must be unique';
    }
    return error;
  };

  const handleSubmit = (values, actions) => {
    
    dispatch(addBicycle({ ...values, status: statuses[0] }));

    if (!error) {
      actions.resetForm();
    }
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
      context={{ store: store }}
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
                validate={validateId}
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
              arial-label="add bicycle advertisement"
            >
              Save
            </button>
            <button
              className={styles.form__btn}
              type="reset"
              disabled={isSubmitting}
              arial-label="clear bicycle form"
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
