import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AuthState, SignInRequest, SignInResponse, User } from "./AuthInterfaces";
import { AuthAPi } from "./AuthAPI";

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (values: SignInRequest, thunkAPI) => await AuthAPi.loginUser(values)
)

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (user: User) => await AuthAPi.registerUser(user)
)

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: localStorage.getItem("user") !== null ? JSON.stringify(localStorage.getItem("user")) : {}
    },
    reducers: {
        signOut: (state: AuthState) => {
            localStorage.removeItem("user");
            state.user = {};
        }
    },
    extraReducers: {
        [loginUser.fulfilled.toString()]: (state: AuthState, action: { payload: SignInResponse }) => {
            if (action.payload.rememberUser) {
                localStorage.setItem('user', JSON.stringify(action.payload.user));
            }
            state.user = action.payload.user;
            console.log('user', state.user);
        },
        [registerUser.fulfilled.toString()]: (state: AuthState, action: { payload: User }) => {
            localStorage.setItem('user', JSON.stringify(action.payload));
            state.user = action.payload;
        }
    }
});

export const {
    signOut
} = authSlice.actions;

export default authSlice.reducer;
