import './App.css';
import React, { useState } from 'react';
import Form from './Form';
import User from './User';


function App() {

  const initialFormValues = {
    name: '',
    email: '',
    role: '',
  }

  const [users, setUsers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    })
  }

  const submitForm = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }

    setUsers([newUser, ...users]);
    setFormValues(initialFormValues);
  }

  return (
    <div>
      <h1 className='title'>Form App</h1>
      <Form 
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {
        users.map((user) => {
          return <User key={user.id} details={user} />
        })
      }
    </div>
  );
}

export default App;
