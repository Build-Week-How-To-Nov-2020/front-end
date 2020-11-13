import React from 'react'
import './App.css'

function Form(props){

const { values, submit, change, disabled, errors } = props
const onSubmit = (e) => {
    e.preventDefault()
     const { email, password } = { values }
     const user = { email: {email}, password: {password}}
    submit(user)
}
const onChange = (e) => {
    const { name, value, type, checked } = e.target
    const valueToUse = type === 'checkbox' ? checked : value
    change(name, valueToUse)
}

return (
    <form className='container' onSubmit={onSubmit}>
        <h2>Log In</h2>
        <div className='errors'>
            {errors.email}
            {errors.password}
        </div>        
        <div className='input container'>
            <div className='inputRow'>
                <label for='email'>Email</label>
                <input
                    value={values.email}
                    onChange={onChange}
                    name='email'
                    type='email'
                />
            </div>
            <div className='inputRow'>
                <label for='password'>
                    Password
                </label>
                <input
                    value={values.password}
                    onChange={onChange}
                    name='password'
                    type='password'
                />
            </div>
        

        <div className='submitRow'>
            <input
                className='agreeSubmit'
                type='checkbox'
                name='signinTos'
                checked={values.signinTos}
                onChange={onChange}
            />
        <label for='signinTos'>
            Even though I still can't be bothered to read the  <a href='./home'> terms of service </a> I'll still check this box so we can move on.
        </label>
        </div>
        </div>
        <button name='submitButton' disabled={disabled} >Submit</button>
    </form>
)}
export default Form
