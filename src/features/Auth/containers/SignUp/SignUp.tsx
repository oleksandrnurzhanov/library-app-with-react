import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { User } from "../../AuthInterfaces";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import { registerUser } from "../../AuthSlice";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const SignUp = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const initialFormState: User = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        isAdmin: false
    };
    const Schema = Yup.object().shape({
        firstName: Yup
            .string()
            .required('Please enter first name'),
        lastName: Yup
            .string()
            .required('Please enter last name'),
        email: Yup
            .string()
            .required('Please enter email address')
            .matches(
                /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                "Email is not valid"
            ),
        password: Yup
            .string()
            .required('Please enter password')
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            )
    });

    const submitForm = ((user: User, setSubmitting: any ) => {
        dispatch(registerUser(user));
        setSubmitting(false);
    });

    return (
        <Container maxWidth="xs">
            <Formik
                initialValues={initialFormState}
                validationSchema={Schema}
                onSubmit={(user: User, { setSubmitting }) => submitForm(user, setSubmitting)}>
                {({ isSubmitting }) => (
                    <Form>
                        <Field name="firstName" placeholder="John" />
                        <ErrorMessage name="firstName" component="div" />
                        <Field name="lastName" placeholder="Doe" />
                        <ErrorMessage name="lastName" component="div" />
                        <Field type="email" name="email" placeholder="johndoe@gmail.com" />
                        <ErrorMessage name="email" component="div" />
                        <Field type="password" name="password" />
                        <ErrorMessage name="password" component="div" />
                        <label htmlFor="isAdmin">
                            <Field type="checkbox" name="isAdmin" />Admin
                        </label>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="Administrator"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link to="/sign-in">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    )
};

export default SignUp;
