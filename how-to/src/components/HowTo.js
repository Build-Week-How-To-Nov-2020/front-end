import React, { useState, useEffect } from 'react'
import '../App.css'
import HowToForm from './HowToForm'
import * as yup from 'yup'
import schema from '../schemas/howtoSchema'
import axios from 'axios'
// import { useDispatch } from 'react-redux'
// import { login } from '../redux/auth/actions'
import { useHistory } from 'react-router-dom'

const initialFormValues = {
  title: '',
  description: '',
  userId:'',
};

const initialFormErrors = {
  title: '',
  description: '',
  userId:'',
};

let initialDisabled = true;

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
//   const dispatch = useDispatch();
  const history = useHistory();


    const postNewHowTo = (newHowTo) => {       
            axios
                .post("https://how-to-nov-2020.herokuapp.com/guide", newHowTo)
                .then((res) => {
                    setFormValues(initialFormValues)
                        history.push('/howtos')
                })
                .catch((err) => {
                    alert("Something ain't right here in the post request")
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

  const formSubmit = () => {
        const newHowTo = {
            title: formValues.title,
            description: formValues.description,
            userId: formValues.userId,

        }
        postNewHowTo(newHowTo)
        setFormValues(initialFormValues)
        history.push('/howtos')
    }

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);


  return (
    <div className='App'>
      <HowToForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
   
    </div>
  );
}

export default App;
