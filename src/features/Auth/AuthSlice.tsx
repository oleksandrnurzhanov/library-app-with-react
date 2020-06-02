import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { SignInRequest, SignInResponse, User } from "./AuthInterfaces";
import { AuthAPi } from "./AuthAPI";
import { LocalStorageUtils } from "../../shared/utils/LocalStorageUtils";

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (values: SignInRequest, thunkAPI) => await AuthAPi.loginUser(values)
)

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (user: User) => await AuthAPi.registerUser(user)
)

// TODO add 'auth' to variable
export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: LocalStorageUtils.getItem('user')
    },
    reducers: {
        signOut: (state: any) => {
            LocalStorageUtils.removeItem('user');
            state.user = {};
        }
    },
    extraReducers: {
        [loginUser.fulfilled.toString()]: (state: any, action: { payload: SignInResponse }) => {
            if (action.payload.rememberUser) {
                LocalStorageUtils.setItem('user', action.payload.user);
            }
            state.user = action.payload.user;
        },
        [registerUser.fulfilled.toString()]: (state: any, action: { payload: User }) => {
            LocalStorageUtils.setItem('user', action.payload);
            state.user = action.payload;
        }
    }
});

export const {
    signOut
} = authSlice.actions;

export default authSlice.reducer;
