import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AuthRequest, AuthState } from "./AuthInterfaces";
import axios from 'axios';
import { useDispatch } from "react-redux";

// Just for clarification
// When we will have an API, we will dispatch `signIn` action which will be caught by our saga-middleware and then the saga run will be triggered.
// Then after receiving BE response we will dispatch another action that will save the updated data to the store - exactly!
// Overall store setup looks good to me ;)
// "Slice-pattern" is somewhat similar to redux-subspace logic, you can check it out too. Cool! - thanks

// const history = useHistory();
// const location = useLocation();
const dispatch = useDispatch();

export const fetchUserByEmail = createAsyncThunk(
    'auth/fetchUserByEmailStatus',
    async (values: AuthRequest, thunkAPI) => {
        let data: any = [];
        return axios.get(`http://localhost:3001/users`)
            .then(resp => {
                data = resp.data;
                data.forEach((user: any) => {
                    console.log(`Email ${user.email}`);
                    console.log(`Email ${user.password}`);
                    return data;
                });
                dispatch(signIn(values))
            })
            .catch((error: any) => {
                console.log(error);
            });
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthorized: false,
        rememberUser: false
    },
    reducers: {
        signIn: (state: AuthState, action: { payload: AuthRequest }) => {
            // const { from }: any = location.state || { from: { pathname: ROUTER_URLS.HOME } };
            if (action.payload.email === 'hpotter@gmail.com' && action.payload.password === 'Qwerty1@') {
                state.isAuthorized = true;
            } else {
                state.isAuthorized = false;
            }
            state.rememberUser = action.payload.rememberUser;
            // history.replace(from); // should be clarified - do sagas or thunks should be used?
            localStorage.setItem('isAuthorized', `${state.isAuthorized}`);
            localStorage.setItem('rememberUser', `${state.rememberUser}`);
        },
        signOut: (state: AuthState) => {
            state.isAuthorized = false;
            localStorage.removeItem('isAuthorized');
            localStorage.removeItem("rememberUser");
        }
    },
    extraReducers: {
        [fetchUserByEmail.fulfilled.toString()]: (state, action) => {
            console.log('111 state', state);
            console.log('111 action', action);
        }
    }
});

export const {
    signIn,
    signOut
} = authSlice.actions;

export default authSlice.reducer;
