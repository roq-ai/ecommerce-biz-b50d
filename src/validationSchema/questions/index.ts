import * as yup from 'yup';

export const questionValidationSchema = yup.object().shape({
  content: yup.string().required(),
  solution_id: yup.string().nullable(),
});
