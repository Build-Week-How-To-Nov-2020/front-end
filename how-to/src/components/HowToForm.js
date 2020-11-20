import React from 'react'
import '../App.css'

function Form(props){

const { values, submit, change, disabled, errors } = props

const onSubmit = (e) => {
    e.preventDefault()
     const { title, description, userId } = { values }
     const howTo = { title: {title}, description:{description}, userId:{userId}}
    submit(howTo)
}
const onChange = (e) => {
    const { name, value, type, checked } = e.target
    const valueToUse = type === 'checkbox' ? checked : value
    change(name, valueToUse)
}

return (
    <form className='container how-to' onSubmit={onSubmit}>
        <h2>New How-To</h2>
        <div className='input container'>
            <div className='inputRow'>
                <label htmlFor='title'>Title of your How-To:</label>
                <br />
                <input
                    value={values.title}
                    onChange={onChange}
                    name='title'
                    type='text'
                    placeholder='How-To Title'
                />
            </div>
            <div className='inputRow'>
                <label htmlFor='description'>
                Description of your How-To
                </label>
                <br />
               <textarea
                        value={values.description}
                        name='description'
                        type='text'
                        className='textarea'
                        onChange={onChange}
                        placeholder='Describe your How-To Here!'
                        />
            </div>
            <div className='inputRow id'>
                <label htmlFor='userId'>
                Please Enter your User Id
                </label>
                <input
                    value={values.userId}
                    onChange={onChange}
                    name='userId'
                    type='number'
                />
            </div>

        <div className='submitRow'>
            <input
                className='agreeSubmit'
                type='checkbox'
                name='howToTOS'
                checked={values.signInTOS}
                onChange={onChange}
            />
        <label htmlFor='showToTOS'>  {/* eslint-disable-next-line  */}
            Not a chance i'm going to ever read the <a href='#'>terms of service</a> but I'll still check these boxes all day long.
        </label>
        </div>
        </div>
        <div className='errors'>
            {errors.title}
            {errors.description}
            {errors.userId}
            {errors.howToTOS}
        </div>        
        <button name='submitButton' className='btn' disabled={disabled} >Submit</button>
    </form>
)}
export default Form
