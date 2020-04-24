import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AuthRequest, AuthState } from "./AuthInterfaces";
import axios from 'axios';
import { AuthAPi } from "./AuthAPI";

// Just for clarification
// When we will have an API, we will dispatch `signIn` action which will be caught by our saga-middleware and then the saga run will be triggered.
// Then after receiving BE response we will dispatch another action that will save the updated data to the store - exactly!
// Overall store setup looks good to me ;)
// "Slice-pattern" is somewhat similar to redux-subspace logic, you can check it out too. Cool! - thanks

// const history = useHistory();
// const location = useLocation();
// const dispatch = useDispatch();

export const fetchUserByEmail = createAsyncThunk(
    'auth/fetchUserByEmailStatus',
    async (values: AuthRequest, thunkAPI) => await AuthAPi.fetchUserByEmail(values)
)

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthorized: false,
        rememberUser: false
    },
    reducers: {
        signIn: (state: AuthState, action: { payload: AuthRequest }) => {
        },
        signOut: (state: AuthState) => {
            state.isAuthorized = false;
            localStorage.removeItem('isAuthorized');
            localStorage.removeItem("rememberUser");
        }
    },
    extraReducers: {
        [fetchUserByEmail.fulfilled.toString()]: (state, action: { payload: { isAuthorized: boolean, rememberUser: boolean } }) => {
            console.log('async reducer');
            console.log('action', action);
            // const { from }: any = location.state || { from: { pathname: ROUTER_URLS.HOME } };
            state.isAuthorized = action.payload.isAuthorized;
            state.rememberUser = action.payload.rememberUser;
            // history.replace(from); // done - do sagas or thunks should be used?
            localStorage.setItem('isAuthorized', `${action.payload.isAuthorized}`);
            localStorage.setItem('rememberUser', `${action.payload.rememberUser}`);
        }
    }
});

export const {
    signIn,
    signOut
} = authSlice.actions;

export default authSlice.reducer;
