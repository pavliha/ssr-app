/* eslint-disable no-console */
import { withFormik } from 'formik'
import to from 'util-to'
import * as Yup from 'yup'
import transformValidationApi from 'src/utils/transformValidationApi'

const formik = withFormik({
  validationSchema: Yup.object()
    .shape({
      password: Yup.lazy(
        value =>
          !value
            ? Yup.string()
            : Yup.string()
              .min(8, 'Password must be at least 8 characters')
              .required('Password is required'),
      ),
      password_repeat: Yup.string().oneOf(
        [Yup.ref('password')],
        'Passwords do not match',
      ),

    }),

  mapPropsToValues: () => ({
    password: '',
    password_repeat: '',
  }),

  handleSubmit: async (values, { props, setSubmitting, setErrors }) => {
    const [err] = await to(props.onSubmit(values))
    if (err) {
      if (err.message === 'Network Error') {
        setErrors({ non_field_errors: 'Something wrong with server response' })
      } else {
        setErrors(transformValidationApi(err))
      }
    }
    setSubmitting(false)
  },
  displayName: 'PasswordForm',
})

export default formik
