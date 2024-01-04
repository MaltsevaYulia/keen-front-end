import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(5, 'Name should be at least 5 characters'),
  type: Yup.string()
    .required('Type is required')
    .min(5, 'Type should be at least 5 characters'),
  color: Yup.string()
    .required('Color is required')
    .min(5, 'Color should be at least 5 characters'),
  id: Yup.string()
    .required('ID is required')
    .min(5, 'ID should be at least 5 characters'),
  price: Yup.number().required('Price is required'),
  wheelSize: Yup.number().required('Wheel Size is required'),
  description: Yup.string()
    .required('Description is required')
    .min(5, 'Description should be at least 5 characters'),
});

export default validationSchema;
