import * as yup from 'yup'

export default yup.object().shape({
    title: yup
        .string()
        .required('Title is required'),
    description: yup
        .string()
        .required('Description is required'),
    userId: yup
        .number()
        .required('User Id is Required'),
    howToTOS: yup
        .boolean()
        .required()
        .oneOf([true], 'Terms of Service must be accepted')
})
