import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from "yup";
import {
    Avatar,
    Button,
    Container,
    Grid,
    makeStyles,
    Typography
} from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { fetchUserByEmail } from "../../AuthSlice";
import { SignInRequest } from '../../AuthInterfaces';
import { ROUTER_URLS } from "../../../../routes";
import FormikTextField from "../../../../shared/components/FormikTextField";
import FormikCheckbox from "../../../../shared/components/FormikCheckbox";

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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const SignIn = () => {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    const initialFormState: SignInRequest = {
        email: '',
        password: '',
        rememberUser: false
    };
    const Schema = Yup.object().shape({
        email: Yup
            .string()
            .required('Please enter your email address')
            .matches(
                /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                "Email is not valid"
            ),
        password: Yup
            .string()
            .required('Please enter your password')
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            )
    });

    const submitForm = ((req: SignInRequest, setSubmitting: any ) => {
        const { from }: any = location.state || { from: { pathname: ROUTER_URLS.HOME } };
        dispatch(fetchUserByEmail(req));
        setSubmitting(false);
        console.log('submitForm', req);
        history.replace(from);
    });

    return (
        <Container maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Formik
                    initialValues={initialFormState}
                    validationSchema={Schema}
                    onSubmit={(values: SignInRequest, { setSubmitting }) => submitForm(values, setSubmitting)}>
                    {({ values, isSubmitting }) => (
                        <Form className={classes.form}>
                            <FormikTextField name="email" label="Email Address" type="email" required />
                            <FormikTextField name="password" label="Password" type="password" required />
                            <FormikCheckbox name="rememberUser" label="Remember me" />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                disabled={isSubmitting}>
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link to="/forgot">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link to="/sign-up">
                                        {"Don't have an account? Sign Up"}
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

export default SignIn;
