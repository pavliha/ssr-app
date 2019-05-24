import { withFormik } from 'formik'
import * as Yup from 'yup'
import to from 'util-to'
import transformValidationApi from 'src/utils/transformValidationApi'

const formik = withFormik({
  validationSchema: Yup.object()
    .shape({
      title: Yup.string().required('Это поле является обязательным'),
      address: Yup.string().required('Это поле является обязательным'),
    }),

  mapPropsToValues: ({ place }) => ({
    title: place?.title || '',
    address: place?.address || '',
  }),

  enableReinitialize: true,

  handleSubmit: async (form, { props, setErrors, setSubmitting }) => {

    setSubmitting(true)

    const [err] = await to(props.onSubmit(form))

    if (err) {
      setErrors(transformValidationApi(err))
      setSubmitting(false)
    }

    if (!err) {
      setErrors({ message: 'Место обновлено!' })
      setTimeout(() => {
        setErrors({ message: '' })
        setSubmitting(false)
      }, 3000)
    }
  },
  displayName: 'PlaceForm',
})

export default formik
