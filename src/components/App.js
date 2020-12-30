import React from 'react';
import '../stylesheets/App.css';
import { Formik, Form, Field } from 'formik';
import { TextField, Button, Checkbox, Radio } from '@material-ui/core';

const App = () => {
  return (
    <div>
      <Formik 
        initialValues={{ 
          firstName: "", 
          lastName: "", 
          isTall: "false", 
          cookies: [],
          yogurt: '',
        }} 
        onSubmit={(data, { setSubmitting, resetForm}) => { 
          setSubmitting(true);
          // Make async call
          console.log(data);
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <div>
              <Field 
                name="firstName" 
                type="input" 
                placeholder="First name"
                as={TextField} 
              />
            </div>
            <div>
              <Field 
                name="lastName" 
                type="input" 
                placeholder="Last name"
                as={TextField} 
              />
            </div>
            <div>
              <Field name="isTall" type="checkbox" as={Checkbox}/>
            </div>
            <div>
              <Field name="cookies" type="checkbox" value="chocolate" as={Checkbox}/>
              <Field name="cookies" type="checkbox" value="sugar" as={Checkbox}/>
              <Field name="cookies" type="checkbox" value="butter cream" as={Checkbox}/>
            </div>
            <div>
              <Field name="yogurt" type="radio" value="lemon" as={Radio} />
              <Field name="yogurt" type="radio" value="peach" as={Radio}/>
              <Field name="yogurt" type="radio" value="pineapple" as={Radio}/>
            </div>
            <div>
              <Button 
                type="submit" 
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </div>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default App
