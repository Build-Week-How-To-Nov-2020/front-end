import React, { useState, useEffect } from 'react'
import './App.css'
import XSignInForm from './XSignInForm'
import XUser from './XUser'
import axios from "axios"
import * as yup from "yup"
import schema from './XsignInSchema'

const initialFormValues = {
    email: '',
    password: '',
    loginTos: false,
    }

const initialFormErrors = {
    email: '',
    password: '',
    loginTos: '',
}

let initialDisabled = true

function App() {

    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)
  
    
    
    const postLogin = (user) => {       
        axios
        .post("https://reqres.in/api/users", { email: `${user.email}`, password: `${user.password}` }

)
        .then((res) => {
            setFormValues(initialFormValues)
        })
        .catch((err) => {
            alert("Something ain't right here \n Might wanna check the post request?")
            console.log(err)
            debugger
        })
    }

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
        }
        postLogin(user)
        setFormValues(initialFormValues)
    }

    useEffect(() => {
        schema.isValid(formValues).then((valid) => {
            setDisabled(!valid)
        })
    }, [formValues])



    return (
        <div className="App">
            <XSignInForm 
                values={formValues}
                change={inputChange}
                submit={formSubmit}
                disabled={disabled}
                errors={formErrors}
            />
            
           
        </div>
    )
}

export default App
