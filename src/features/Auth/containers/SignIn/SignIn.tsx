import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { Link, useHistory, useLocation } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import { fetchUserByEmail } from "../../AuthSlice";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { SignInRequest } from '../../AuthInterfaces';
import { ROUTER_URLS } from "../../../../routes";

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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
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
        console.log('from', from);
        history.replace(from);
    });

    return (
        <Container maxWidth="xs">
            <Formik
                initialValues={initialFormState}
                validationSchema={Schema}
                onSubmit={(req: SignInRequest, { setSubmitting }) => submitForm(req, setSubmitting)}>
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" component="div" />
                        <Field type="password" name="password" />
                        <ErrorMessage name="password" component="div" />
                        <label htmlFor="rememberUser">
                            <Field type="checkbox" name="rememberUser" />Remember me
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
                    Sign in
                </Typography>
                {/* I'm not sure if it's a good practice to omit the `submit` functionality here and use pure onClick,
                maybe there can be some a18y issues. But overall it's not a subject of our discussion here,
                just thinking out loud - done */}
                <form className={classes.form} noValidate onSubmit={e => { e.preventDefault(); }}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={e => setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <FormControlLabel
                        control={<Checkbox color="primary" value={remember} onChange={e => setRemember(!remember)} />}
                        label="Remember me"
                    />
                    {/*<Button*/}
                    {/*    type="submit"*/}
                    {/*    fullWidth*/}
                    {/*    variant="contained"*/}
                    {/*    color="primary"*/}
                    {/*    className={classes.submit}*/}
                    {/*    onClick={submitForm}*/}
                    {/*>*/}
                    {/*    Sign In*/}
                    {/*</Button>*/}
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
                </form>
            </div>
        </Container>
    )
};

export default SignIn;
