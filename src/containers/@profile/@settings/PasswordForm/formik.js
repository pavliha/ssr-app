import { withFormik } from 'formik'
import * as Yup from 'yup'
import to from 'util-to'
import transformValidationApi from 'src/utils/transformValidationApi'
import wait from 'utils/wait'

const initialValues = {
  password: '',
  password_new: '',
  password_repeat: '',
}

const formik = withFormik({
  validationSchema: Yup.object()
    .shape({
      password: Yup.lazy(
        value =>
          !value
            ? Yup.string()
            : Yup.string()
              .min(6, 'Пароль должен быть больше чем 6 символов')
              .required('Это поле является обязательным'),
      ),
      password_new: Yup.string()
        .min(6, 'Пароль должен быть больше чем 6 символов')
        .required('Это поле является обязательным'),
      password_repeat: Yup.string().oneOf(
        [Yup.ref('password_new')],
        'Пароли не совпадают',
      ),
    }),

  mapPropsToValues: () => initialValues,

  handleSubmit: async (form, { props, setErrors, setStatus, resetForm, setSubmitting }) => {

    setSubmitting(true)

    const [err] = await to(props.onSubmit(form))

    if (err) setErrors(transformValidationApi(err))

    if (!err) {
      setStatus({ message: 'Пароль обновлен!' })
      resetForm(initialValues)
    }

    await wait(3000)
    setSubmitting(false)
    setStatus({})
  },
  displayName: 'PasswordForm',
})

export default formik
