import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { SignInRequest, AuthState, User } from "./AuthInterfaces";
import { AuthAPi } from "./AuthAPI";

export const fetchUserByEmail = createAsyncThunk(
    'auth/fetchUserByEmailStatus',
    async (values: SignInRequest, thunkAPI) => await AuthAPi.fetchUserByEmail(values)
)

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (user: User) => await AuthAPi.registerUser(user)
)

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthorized: false,
        rememberUser: false
    },
    reducers: {
        signOut: (state: AuthState) => {
            state.isAuthorized = false;
            localStorage.removeItem('isAuthorized');
            localStorage.removeItem("rememberUser");
            localStorage.removeItem("userData");
        }
    },
    extraReducers: {
        [fetchUserByEmail.fulfilled.toString()]: (state: AuthState, action: { payload: { isAuthorized: boolean, rememberUser: boolean } }) => {
            state.isAuthorized = action.payload.isAuthorized;
            state.rememberUser = action.payload.rememberUser;
            localStorage.setItem('isAuthorized', `${action.payload.isAuthorized}`);
            localStorage.setItem('rememberUser', `${action.payload.rememberUser}`);
        },
        [registerUser.fulfilled.toString()]: (state: AuthState, action: { payload: User }) => {
            localStorage.setItem('userData', JSON.stringify(action.payload));
        }
    }
});

export const {
    signOut
} = authSlice.actions;

export default authSlice.reducer;
