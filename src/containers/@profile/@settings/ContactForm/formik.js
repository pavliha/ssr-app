import { withFormik } from 'formik'
import * as Yup from 'yup'
import to from 'util-to'
import transformValidationApi from 'src/utils/transformValidationApi'
import wait from 'utils/wait'

const formik = withFormik({
  validationSchema: Yup.object()
    .shape({
      instagram: Yup.string(),
      facebook: Yup.string(),
      skype: Yup.string(),
      telegram: Yup.string(),
    }),

  mapPropsToValues: ({ account }) => ({
    facebook: account?.facebook || '',
    telegram: account?.telegram || '',
    skype: account?.skype || '',
    instagram: account?.instagram || '',
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
  displayName: 'ContactForm',
})

export default formik
