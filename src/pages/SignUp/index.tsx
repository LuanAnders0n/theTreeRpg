import React from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';

import { Container } from './styles';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

interface Values {
  avatar: any;
  firstName: string;
  lastName: string;
  nickname: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const initialValues: Values = {
    avatar: '',
    firstName: '',
    lastName: '',
    nickname: '',
    email: '',
    password: '',
  };

  const onSubmit = (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 500);
  };

  return (
    <Container>
      <div className="image" />
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className="form">
            <h1>Signup</h1>
          <Grid container spacing={2}>
            <Grid xs={12}>
              <label htmlFor="firstName">Avatar</label>
              <Field id="avatar" name="avatar" type="file" accept="image/*" />
            </Grid>

            <Grid xs={6}>
              <label htmlFor="firstName">Primeiro nome</label>
              <Field id="firstName" name="firstName" />
            </Grid>

            <Grid xs={6}>
              <label htmlFor="lastName">Ultimo nome</label>
              <Field id="lastName" name="lastName" />
            </Grid>

            <Grid xs={12}>
              <label htmlFor="nickname">Nickname</label>
              <Field id="nickname" name="nickname" />
            </Grid>

            <Grid xs={12}>
              <label htmlFor="email">Email</label>
              <Field id="email" name="email" type="email" />
            </Grid>

            <Grid xs={12}>
              <label htmlFor="password">Password</label>
              <Field id="password" name="password" type="password" />
            </Grid>

            <Grid xs={12}>
              <label htmlFor="password">Confirm Password</label>
              <Field
                id="confirmPassword"
                name="confirmPassword"
                type="password"
              />
            </Grid>

            <Grid xs={12}>
              <button type="submit">Submit</button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Container>
  );
};

export default SignUp;
