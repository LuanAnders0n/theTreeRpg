import React from 'react';
import { Container } from './styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Showpassword from '../../components/Showpassword';
import Confirmpassword from '../../components/Confirmpassword';
import Tasha from '../../images/Tasha.png';
import logo from '../../images/the_tree_logo.svg';
import Facebook from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';

const SignUp = () => {
  const callBackLogin = (response: any) => {
    console.log(response);
  };

  return (
    <Container>
      <div className="singUp">
        <div>
          <img
            className="logo"
            src={logo}
            alt="logo.png"
            width={250}
            height={80}
          />

          <h2>Começe agora</h2>
          <h1 className="createAccount">Crie sua conta</h1>
          <h3>
            Já é membro? faça seu <a href="/login">log in</a>
          </h3>

          <GoogleLogin
            clientId="137219769033-vplk0d5etrp3vnlbv1rjes669ev8vo5m.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={callBackLogin}
            onFailure={callBackLogin}
          />
          <Facebook
            appId="775582386868703"
            autoLoad={true}
            fields="name,email,picture"
            callback={callBackLogin}
          />
        </div>

        <p>ou</p>

        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{ flexGrow: 1 }}
        >
          <Grid container spacing={2}>
            <Grid xs={6}>
              <TextField
                fullWidth
                id="firstName"
                label="First Name"
                variant="filled"
              />
            </Grid>
            <Grid xs={6}>
              <TextField
                fullWidth
                id="lastName"
                label="Last Name"
                variant="filled"
              />
            </Grid>
            <Grid xs={12}>
              <TextField
                fullWidth
                id="nickname"
                label="Nickname"
                variant="filled"
              />
            </Grid>
            <Grid xs={12}>
              <TextField
                fullWidth
                id="email"
                label="E-mail"
                variant="filled"
                type="email"
              />
            </Grid>
            <Grid xs={12}>
              <Showpassword></Showpassword>
            </Grid>
            <Grid xs={12}>
              <Confirmpassword></Confirmpassword>
            </Grid>
          </Grid>
          <Button variant="contained" type="submit" color="success">
            Register
          </Button>
        </Box>
      </div>
      <div className="gradient"></div>
      <img className="tasha" src={Tasha} alt="" />
      <div className="line"></div>
    </Container>
  );
};

export default SignUp;
