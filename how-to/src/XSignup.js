import React, { useState, useEffect } from 'react'
import './XApp.css'
import XSignupForm from './XSignupForm'
import XUser from './XUser'
import axios from "axios"
import * as yup from "yup"
import schema from './XsignupSchema'

const initialFormValues = {
    name: '',
    email: '',
    language: '',
    password: '',
    passwordConfirmation: '',
    position: '',
    tos: false,
    }

const initialFormErrors = {
    name: '',
    email: '',
    language: '',
    password: '',
    passwordConfirmation: '',
    position: '',
    tos: '\n',
}
const initialUsers = [{}]
const initialDisabled = true

function App() {
  
    const [users, setUsers] = useState(initialUsers)
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)
  
   const getUsers = () => {       
        axios
        .get(`https://reqres.in/api/users`)
        .then((res) => {
            console.log(res)
            setUsers(res.data.data)
        })
        .catch((err) => {
            alert("Something ain't right here in the get")
            debugger
        })
    }
    
    const postNewUser = (newUser) => {       
        axios
        .post("https://reqres.in/api/users", newUser)
        .then((res) => {
            setUsers([res.data, ...users])
            setFormValues(initialFormValues)
        })
        .catch((err) => {
            alert("Something ain't right here in the post")
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
        const newUser = {
            name: formValues.name.trim(),
            email: formValues.email.trim(),
            password: formValues.password,
            language: formValues.language,
            tos: formValues.tos
        }
        postNewUser(newUser)
        setFormValues(initialFormValues)
    }

    useEffect(() => {
        getUsers()
    }, [])

    useEffect(() => {
        schema.isValid(formValues).then((valid) => {
            setDisabled(!valid)
        })
    }, [formValues])


// debugger
    return (
        <div className="XApp">
            <XSignupForm 
                values={formValues}
                change={inputChange}
                submit={formSubmit}
                disabled={disabled}
                errors={formErrors}
            />
            {users.map((user) => {
                return <XUser key={user.id} details={user} />
            })}
        </div>
    )
}

export default App
