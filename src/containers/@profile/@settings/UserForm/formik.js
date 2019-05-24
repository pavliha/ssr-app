import { withFormik } from 'formik'
import * as Yup from 'yup'
import to from 'util-to'
import transformValidationApi from 'src/utils/transformValidationApi'
import wait from 'utils/wait'

const formik = withFormik({
  validationSchema: Yup.object()
    .shape({
      name: Yup.string().required('Это поле является обязательным'),
      phone: Yup.string()
        .min(6, 'Номер должен быть больше чем 6 символов')
        .required('Это поле является обязательным'),
    }),

  mapPropsToValues: ({ user }) => ({
    name: user.name || '',
    phone: user.phone || '',
  }),

  enableReinitialize: true,

  handleSubmit: async (form, { props, setErrors, setStatus, setSubmitting }) => {

    setSubmitting(true)

    const [err] = await to(props.onSubmit(form))

    if (err) setErrors(transformValidationApi(err))

    if (!err) setStatus({ message: 'Изменения сохранены!' })

    await wait(3000)
    setSubmitting(false)
    setStatus({})
  },
  displayName: 'UserForm',
})

export default formik
