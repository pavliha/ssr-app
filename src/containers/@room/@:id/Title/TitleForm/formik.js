import { withFormik } from 'formik'
import * as Yup from 'yup'
import to from 'util-to'
import transformValidationApi from 'src/utils/transformValidationApi'

const formik = withFormik({
  validationSchema: Yup.object().shape({
    title: Yup.string()
  }),

  enableReinitialize: true,

  mapPropsToValues: ({ title }) => ({
    title: title || '',
  }),

  handleSubmit: async (form, { props, setErrors, setSubmitting }) => {
    setSubmitting(true)

    const [err] = await to(props.onSubmit(form))
    if (err) setErrors(transformValidationApi(err))

    setSubmitting(false)
  },
  displayName: 'TitleForm',
})

export default formik
