import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    Link,
    useHistory,
    useLocation
} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import { signIn, rememberUser } from "../../authSlice";
import { ROUTER_URLS } from "../../../../Routes";
import { selectAuthorizedStatus } from "../../authSelectors";

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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const SignIn = () => {
    // Let's use consistent let/const

    let history = useHistory();
    let location = useLocation();
    let { from }: any = location.state || { from: { pathname: ROUTER_URLS.HOME } };

    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const dispatch = useDispatch();
    const isAuthorized = useSelector(selectAuthorizedStatus);

    let logIn = () => {
        // I think we should add remember as a third parameter to signIn, aside email and password
        if (remember) {
            dispatch(rememberUser(remember));
        }

        dispatch(signIn({ email, password }));
        // This location change should be performed from saga or in our case - a reducer, after state is updated
        history.replace(from);
    };

    return (
        <Container maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                {/* I'm not sure if it's a good practice to omit the `submit` functionality here and use pure onClick, maybe there can be some a18y issues. But overall it's not a subject of our discussion here, just thinking out loud */}
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
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={logIn}
                    >
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
                </form>
            </div>
        </Container>
    )
};

export default SignIn;
