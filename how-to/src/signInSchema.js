import * as yup from 'yup'

export default yup.object().shape({
    Username: yup
        .string()
        .required('Username is required'),
    Password: yup
        .string()
        .required('Password is required'),
    signinTos: yup
        .boolean()
        .oneOf([true], 'Terms of Service must be accepted')
})
