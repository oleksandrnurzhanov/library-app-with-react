import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { SignInRequest, User } from "./AuthInterfaces";
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
        isAuthorized: !!localStorage.getItem("user"),
        rememberUser: !!localStorage.getItem("rememberUser"),
        user: JSON.parse(localStorage.getItem("user") as any) || {}
    },
    reducers: {
        signOut: (state: any) => {
            localStorage.removeItem("user");
            state.isAuthorized = false;
            state.user = {};
        }
    },
    extraReducers: {
        [fetchUserByEmail.fulfilled.toString()]: (state: any, action: { payload: { isAuthorized: boolean, rememberUser: boolean, user: User } }) => {
            localStorage.setItem('isAuthorized', `${action.payload.isAuthorized}`);
            localStorage.setItem('rememberUser', `${action.payload.rememberUser}`);
            localStorage.setItem('user', JSON.stringify(action.payload.user));
            state.isAuthorized = action.payload.isAuthorized;
            state.rememberUser = action.payload.rememberUser;
            state.user = action.payload.user;
        },
        [registerUser.fulfilled.toString()]: (state: any, action: { payload: User }) => {
            localStorage.setItem('user', JSON.stringify(action.payload));
            state.user = action.payload;
        }
    }
});

export const {
    signOut
} = authSlice.actions;

export default authSlice.reducer;
