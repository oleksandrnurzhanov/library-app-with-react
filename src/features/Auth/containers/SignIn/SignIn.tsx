import React from 'react';
import { useDispatch } from "react-redux";
import {
    Link,
    useLocation
} from 'react-router-dom';
import { withRouter } from 'react-router';
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
import { loginUser } from "../../AuthSlice";
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

const SignIn = (props: any) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { history } = props;
    const location = useLocation();
    const { from }: any = location.state || { from: { pathname: ROUTER_URLS.HOME } };
    const initialFormState: SignInRequest = {
        email: '',
        password: '',
        rememberUser: false
    };
    const Schema = Yup.object().shape({
        email: Yup
            .string()
            .required('Please enter your email address')
            .max(60),
        password: Yup
            .string()
            .required('Please enter your password')
            .max(8)
    });

    const submitForm = ((req: SignInRequest, setSubmitting: any ) => {
        dispatch(loginUser(req) as any).then(() => {
            setSubmitting(false);
            history.replace(from);
        })
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
                    {({ isSubmitting }) => (
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

export default withRouter(SignIn)
