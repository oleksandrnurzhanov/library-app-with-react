import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from "./authInterfaces";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthorized: false,
        isUserRemembered: false
    },
    reducers: {
        signIn: (state: AuthState, action) => {
            state.isAuthorized = true;
            localStorage.setItem('isAuthorized', `${true}`);
        },
        signOut: (state: AuthState) => {
            state.isAuthorized = false;
            localStorage.removeItem('isAuthorized');
            localStorage.removeItem("isUserRemembered");
        },
        rememberUser: (state: AuthState, action) => {
            state.isUserRemembered = action.payload;
            localStorage.setItem('isUserRemembered', `${action.payload}`);
        }
    }
});

export const {
    signIn,
    signOut,
    rememberUser
} = authSlice.actions;

export default authSlice.reducer;
