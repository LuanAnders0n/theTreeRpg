<<<<<<< Updated upstream
import React from "react";

// import { Container } from './styles';

const SignUp = () => {
  return <div />;
};

export default SignUp;
=======
import React from 'react'
import { Formik, Field, Form, FormikHelpers } from 'formik'

import { Container } from './styles'

interface Values {
  avatar: any
  firstName: string
  lastName: string
  birthday: string
  nickname: string
  email: string
  password: string
}

const SignUp = () => {
  return (
    <Container>
      <div className="body">
        <h1>Signup</h1>
        <Formik
          initialValues={{
            avatar: '',
            firstName: '',
            lastName: '',
            birthday: '',
            nickname: '',
            email: '',
            password: ''
          }}
          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              setSubmitting(false)
            }, 500)
          }}
        >
          <Form>
            <label htmlFor="firstName">Avatar</label>
            <Field class="avatar" name="avatar" type="file" accept="image/*" />

            <label htmlFor="firstName">Primeiro nome</label>
            <Field class="firstName" name="firstName" />

            <label htmlFor="lastName">Ultimo nome</label>
            <Field class="lastName" name="lastName" />

            <label htmlFor="nickname">Aniversario</label>
            <Field class="date" name="date" type="date" />

            <label htmlFor="nickname">Nickname</label>
            <Field class="nickname" name="nickname" />

            <label htmlFor="email">Email</label>
            <Field class="email" name="email" type="email" />

            <label htmlFor="password">Password</label>
            <Field class="password" name="password" type="password" />

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </Container>
  )
}

export default SignUp
>>>>>>> Stashed changes
