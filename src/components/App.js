import React from 'react';
import '../stylesheets/App.css';
import { Formik, Form, Field, useField } from 'formik';
import { TextField, Button, Checkbox, Radio, FormControlLabel } from '@material-ui/core';
import * as yup from 'yup';

const MyRadio = ({ label, ...props }) => {
  const [ field ] = useField(props)
  return (
    <FormControlLabel label={label} {...field} control={<Radio />} />
  )
};

const MyTextField = ({ placeholder, ...props}) => {
  const [ field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : ''
  return (
    <TextField 
      placeholder={placeholder} 
      {...field} 
      helperText={errorText}
      error={!!errorText}
      />
  )
};

const validationSchema = yup.object({
  firstName: yup
    .string()
    .required()
    .max(20)
})

const App = () => {
  return (
    <div>
      <Formik 
        initialValues={{ 
          firstName: "", 
          lastName: "", 
          email:"",
          isTall: false, 
          cookies: [],
          yogurt: '',
        }} 
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting, resetForm}) => { 
          setSubmitting(true);
          // Make async call
          console.log(data);
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ values, errors, isSubmitting }) => (
          <Form>
            <div>
              <MyTextField 
                name="firstName" 
                type="input" 
                placeholder="First name"
              />
            </div>
            <div>
              <MyTextField 
                name="lastName" 
                type="input" 
                placeholder="Last name"
              />
            </div>
            <div>
              <MyTextField 
                name="email" 
                type="email" 
                placeholder="email"
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
              <div>
                <MyRadio name="yogurt" type="radio" value="lemon" label="Lemon" />
              </div>
              <div>
                <MyRadio name="yogurt" type="radio" value="peach" label="Peach" />
              </div>
              <div>
                <MyRadio name="yogurt" type="radio" value="pineapple" label="Pineapple" />
              </div>
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
            <pre>{JSON.stringify(errors, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default App
