import React, { useState, useEffect } from 'react'
import '../App.css'
import SignInForm from './SignInForm'
import * as yup from 'yup'
import schema from '../schemas/signInSchema'
import { useDispatch } from 'react-redux'
import { login } from '../redux/auth/actions'
import { useHistory } from 'react-router-dom'

const initialFormValues = {
  username: '',
  password: '',
  signInTOS: false,
};

const initialFormErrors = {
  username: '',
  password: '',
  signInTOS: '',
};

let initialDisabled = true;

function SignIn() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const dispatch = useDispatch();
  const history = useHistory();

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: '',
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const formSubmit = async () => {
    try {
      dispatch(login(formValues.username, formValues.password));
      history.push('/howtos');
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);


  return (
    <div className='App'>
      <SignInForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
   
    </div>
  );
}

export default SignIn;
