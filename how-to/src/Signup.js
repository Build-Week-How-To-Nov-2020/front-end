import React, { useState, useEffect } from 'react'
import './App.css'
import SignupForm from './SignupForm'
import User from './User'
import axios from "axios"
import * as yup from "yup"
import schema from './signupSchema'

const initialFormValues = {
    name: '',
    email: '',
    language: '',
    passwordConfirmation: '',
    account: '',
    tos: false,
    }

const initialFormErrors = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    account: '',
    tos: '\n',
}
const initialUsers = [{}]
const initialDisabled = true

function App() {
  
    const [users, setUsers] = useState(initialUsers)
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)
  
    useEffect(() => {  // eslint-disable-next-line
        var getUsers = () => {       
            axios
                .get(`https://how-to-nov-2020.herokuapp.com/user`)
                .then((res) => {
                    console.log('res: ', res)
                    debugger
                    setUsers(res.data)
                })
                .catch((err) => {
                    alert("Something ain't right here in the get")
                    debugger
                })
        }    
            
    
    }, [users])
        const postNewUser = (newUser) => {       
            axios
                .post("https://how-to-nov-2020.herokuapp.com/user/signup", newUser)
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
            username: formValues.username,
            password: formValues.password,
        }
        postNewUser(newUser)
        setFormValues(initialFormValues)
    }

    useEffect(() => {
        schema.isValid(formValues).then((valid) => {
            setDisabled(!valid)
        })
    }, [formValues])


// debugger
    return (

        <div className="App">
            <SignupForm 
                values={formValues}
                change={inputChange}
                submit={formSubmit}
                disabled={disabled}
                errors={formErrors}
            />
            {users.map((user) => {

                return <User key={user.id + Math.random() * 100} details={user} />
            })}
        </div>
    )
}

export default App
