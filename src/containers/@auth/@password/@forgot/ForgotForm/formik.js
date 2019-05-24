import { withFormik } from 'formik'
import transformValidationApi from 'src/utils/transformValidationApi'
import * as Yup from 'yup'
import to from 'util-to'

const formik = withFormik({
  validationSchema: Yup.object()
    .shape({
      email: Yup.string()
        .email('Неправильный email адрес!')
        .required('Это поле является обязательным'),
    }),
  mapPropsToValues: () => ({
    email: '',
  }),

  handleSubmit: async (form, { props: { onSubmit }, setErrors, setSubmitting }) => {
    const [err, response] = await to(onSubmit(form))

    if (err) setErrors(transformValidationApi(err))

    if (response) setErrors({ message: response })

    setSubmitting(false)
  },
  displayName: 'ForgotPasswordForm',
})

export default formik
