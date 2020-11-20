import React from 'react'
import './App.css'

function Form(props){

    const { values, submit, change, disabled, errors } = props
    const onSubmit = (e) => {
        e.preventDefault()
        submit()
    }
    const onChange = (e) => {
        const { name, value, type, checked } = e.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        <form className='container' onSubmit={onSubmit}>
            <h2>Add New User</h2>
            <div className='input container'>
                <div className='inputRow'>
                    <label htmlFor='username'>Username</label>
                    <input
                        value={values.username}
                        onChange={onChange}
                        name='username'
                        type='text'
                    />
                </div>
                <div className='inputRow'>
                    <label htmlFor='email'>
                        E-mail
                    </label>
                    <input
                        value={values.email}
                        onChange={onChange}
                        name='email'
                        type='text'
                    />
                </div>
            <div className='inputRow'>
                <label htmlFor='password'>
                    Password
                </label>
                <input
                    value={values.password}
                    onChange={onChange}
                    name='password'
                    type='password'
                />
            </div>
            <div className='inputRow'>
                <label htmlFor='passwordConfirmation'>
                    Password Confirmation
                </label>
                <input
                    value={values.passwordConfirmation}
                    onChange={onChange}
                    name='passwordConfirmation'
                    type='password'
                />
                </div>
                <div className='inputRow'>
                    <label htmlFor='position'>
                        Account Type
                    </label>        
                    
                    <select className='customSelect' onChange={onChange} value={values.position} name='account'>
                        <option value=''>- Select an option -</option>
                        <option value='Editor'>Editor</option>
                        <option value='Subscriber'>Subscriber</option>
                    </select>
                    </div>
                
            </div>
            <div className='submitRow'>
                <input
                    className='agreeSubmit'
                    type='checkbox'
                    name='tos'
                    checked={values.tos}
                    onChange={onChange}
                />
            <label htmlFor='tosv'>    {/* eslint-disable-next-line  */}
                I agree to the <a href='#'> terms of service </a> even though I haven't read them
            </label>
            </div>
            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.passwordConfirmation}</div>
                <div>{errors.language}</div>
                <div>{errors.position}</div>
                <div>{errors.tos}</div>
            </div>        
                <button name='submitButton' className='btn' disabled={disabled}>Submit</button>
        </form>
)}
export default Form
