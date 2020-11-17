import React, { useState, useEffect } from 'react'
import './App.css'
import SignInForm from './SignInForm'
// import XUser from './XUser'
import axios from "axios"
import * as yup from "yup"
import schema from './signInSchema'

const initialFormValues = {
    email: '',
    password: '',
    signinTos: false,
    }

const initialFormErrors = {
    email: '',
    password: '',
    signinTos: '',
}

let initialDisabled = true

function App() {

    const [otherUsers, setOtherUsers] = useState([])
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)
  
    
    
    const postSignIn = (user) => {       
        axios
        .post("https://reqres.in/api/users", { email: `${user.email}`, password: `${user.password}` }

)
        .then((res) => {
            // console.log('otherUsers1', otherUsers)

            setOtherUsers([ ...otherUsers ], otherUsers + res.data)
            setFormValues(initialFormValues)
            // console.log('otherUsers2: ', otherUsers)
        })
        .catch((err) => {
            alert("Something ain't right here \n Might wanna check the post request?")
            console.log(err)
            debugger
        })
    }

// useEffect(() => {
//     function getOtherUsers() {       
//             axios
//             .get(`https://reqres.in/api/users`)
//             .then((res) => {
//                 console.log(res)
//                setOtherUsers(res.data)
//             })
//             .catch((err) => {
//                 alert("Something ain't right here in the get")
//                 debugger
//             })
//         }
// }, [otherUsers])    
    const inputChange = (name, value) => {
    yup
        .reach(schema, name)
        .validate(value)
        .then(() => {
            setFormErrors({
                ...formErrors,
                [name]: "",
            })
        })
        .catch((err) => {
            setFormErrors({
                ...formErrors,
                [name]: err.errors[0],
            })
        })

        setFormValues({
            ...formValues,
            [name]: value,
        })
    }

    const formSubmit = () => {
        const user = {
            email: formValues.email,
            password: formValues.password,
        };
        postSignIn(user);
        // setOtherUsers({ ...users }, user)
        setFormValues(initialFormValues)
        // getOtherUsers()
    }

    useEffect(() => {
        schema.isValid(formValues).then((valid) => {
            setDisabled(!valid)
        })
    }, [formValues])


    if (!otherUsers) {return}
    
    return (
        <div className="XApp">
            <SignInForm 
                values={formValues}
                change={inputChange}
                submit={formSubmit}
                disabled={disabled}
                errors={formErrors}
            />
            {/* {otherUsers.map((user) => {
                return <XUser key={user.id} details={user} />
            })} */}
        </div>
    )
}

export default App
