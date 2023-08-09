import * as yup from 'yup';

export const solutionValidationSchema = yup.object().shape({
  name: yup.string().required(),
  merchant_id: yup.string().nullable(),
});
