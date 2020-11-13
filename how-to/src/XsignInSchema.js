import * as yup from 'yup'

export default yup.object().shape({
    email: yup
        .string()
        .email('must be a valid email address')
        .required('Email is required'),
    password: yup
        .string()
        .required('Password is required'),
    loginTos: yup
        .boolean()
        .oneOf([true], 'Terms of Service must be accepted')
})
