/* eslint-disable */ 
import { useDispatch , useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography
} from '@material-ui/core';
import { useEffect, useState } from "react";
import {
  setLogin
} from 'src/feature/actions'

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [inValid, setInvalid] = useState(null);

  const auth = useSelector(state => state.auth);
  const error = useSelector(state => state.error);
  
  useEffect(() => {
    if (auth?.isAuth) {
      navigate('/app/dashboard')
    }
  }, [auth]);

  useEffect(() => {
    if (Object.keys(error).length > 0 && error !== undefined) {
      if(error?.code === 500) {
        setInvalid(error?.message);
      }
    }
  }, [error]);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
    password: Yup.string().max(255).required('Password is required')
  })

  const handleLoginSubmit = (values, {setSubmitting}) => {

    setSubmitting(true);

    const data = {
      email: values.email,
      password: values.password
    }

    dispatch(setLogin(data));
    setSubmitting(false)
  }

  return (
    <>
      <Helmet>
        <title>Login | Yapth</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={formData}
            validationSchema={validationSchema}
            onSubmit={handleLoginSubmit}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Sign in
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Sign in on the Admin platform
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                />
                {
                  inValid !== null && (
                    <small style={{
                      color: 'red'
                    }}>{inValid}</small>
                  )
                }
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Sign in now
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default Login;
