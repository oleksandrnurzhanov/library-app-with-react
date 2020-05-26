import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { User } from "../../AuthInterfaces";
import { Form, Formik } from 'formik';
import * as Yup from "yup";
import { registerUser } from "../../AuthSlice";
import { useDispatch } from "react-redux";
import FormikTextField from "../../../../shared/components/FormikTextField";
import FormikCheckbox from "../../../../shared/components/FormikCheckbox";
import { ROUTER_URLS_MAP } from "../../../../Routes";
import { ROUTER_URLS } from "../../../../RoutesEnums";

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
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const SignUp = () => {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
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
        console.log('userData', user);
        const { from }: any = location.state || { from: { pathname: ROUTER_URLS_MAP[ROUTER_URLS.SignIn] } };
        dispatch(registerUser(user));
        setSubmitting(false);
        history.replace(from);
    });

    return (
        <Container maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Formik
                    initialValues={initialFormState}
                    validationSchema={Schema}
                    onSubmit={(user: User, { setSubmitting }) => submitForm(user, setSubmitting)}>
                    {({ isSubmitting }) => (
                        <Form className={classes.form}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <FormikTextField name="firstName" label="First name" required />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormikTextField name="lastName" label="Last name" required />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormikTextField name="email" label="Email Address" type="email" required />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormikTextField name="password" label="Password" type="password" required />
                                </Grid>
                            </Grid>
                            <FormikCheckbox name="isAdmin" label="Admin" />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                disabled={isSubmitting}>
                                Sign Up
                            </Button>
                            <Grid container justify="flex-end">
                                <Grid item>
                                    <Link to="/sign-in">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Form>
                    )}
                </Formik>
            </div>
        </Container>
    )
};

export default SignUp;
