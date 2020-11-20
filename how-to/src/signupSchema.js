import * as yup from 'yup'

export default yup.object().shape({
    name: yup
        .string()
        .required('name is required')
        .min(3, 'name must be 3 character'),
    email: yup
        .string()
        .email('must be a valid email address')
        .required('email is required'),
    password: yup
        .string()
        .required('Password is required'),
    passwordConfirmation: yup
        .string()
        // .oneOf([yup.ref('password')], 'Passwords do not match')
        ,
    
    account: yup
        .string()
        .oneOf(['Editor', 'Subscriber'], 'You must choose your account type'),
    tos: yup
        .boolean()
        .oneOf([true], 'Terms of Service must be accepted')
       
})