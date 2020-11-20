import * as yup from 'yup'

export default yup.object().shape({
    username: yup
        .string()
        .required('Username is required'),
    password: yup
        .string()
        .required('Password is required'),
    signinTos: yup
        .boolean()
        .oneOf([true], 'Terms of Service must be accepted')
})
