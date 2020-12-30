import React from 'react';
import '../stylesheets/App.css';
import { Formik } from 'formik';
import { TextField } from '@material-ui/core';

const App = () => {
  return (
    <div>
      <Formik 
        initialValues={{ firstName: 'Niahm' }} 
        onSubmit={(data) => { 
          console.log(data);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <TextField 
              name='firstName' 
              value={values.firstName} 
              onChange={handleChange} 
              onBlur={handleBlur}
            />
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default App
