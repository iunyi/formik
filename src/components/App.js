import React from 'react';
import '../stylesheets/App.css';
import { Formik } from 'formik';
import { TextField, Button } from '@material-ui/core';

const App = () => {
  return (
    <div>
      <Formik 
        initialValues={{ firstName: "" }} 
        onSubmit={(data, { setSubmitting, resetForm}) => { 
          setSubmitting(true);
          // Make async call
          console.log(data);
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ values, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <TextField 
              name="firstName" 
              value={values.firstName} 
              onChange={handleChange} 
              onBlur={handleBlur}
            />
            <div>
              <Button 
                type="submit" 
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </div>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default App
