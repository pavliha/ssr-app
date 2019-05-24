import { withFormik } from 'formik'
import * as Yup from 'yup'
import to from 'util-to'
import transformValidationApi from 'src/utils/transformValidationApi'

const formik = withFormik({
  validationSchema: Yup.object()
    .shape({
      headline: Yup.string().required('Это поле является обязательным'),
      preposition: Yup.string().required('Это поле является обязательным'),
      title: Yup.string().required('Это поле является обязательным'),
      background_url: Yup.string()
    }),

  mapPropsToValues: ({ invite }) => {
    return ({
      headline: invite?.headline || 'Приглашение',
      preposition: invite?.preposition || 'на',
      title: invite?.title || invite?.room?.title || 'Вечеринку',
      address: invite?.room?.place?.address,
      background_url: invite?.background_url || '/images/sparks.png'
    })
  },

  enableReinitialize: true,

  handleSubmit: async (form, { props, setErrors, setSubmitting }) => {

    setSubmitting(true)

    const [err] = await to(props.onSubmit(form))

    if (err) {
      setErrors(transformValidationApi(err))
      setSubmitting(false)
    }

    if (!err) {
      setErrors({ message: 'Приглашение обновлено!' })
      setTimeout(() => {
        setErrors({ message: '' })
        setSubmitting(false)
      }, 3000)
    }
  },
  displayName: 'LoginForm',
})

export default formik
