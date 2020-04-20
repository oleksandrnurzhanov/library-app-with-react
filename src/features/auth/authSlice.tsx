import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from "./authInterfaces";

// Just for clarification
// When we will have an API, we will dispatch `signIn` action which will be caught by our saga-middleware and then the saga run will be triggered. Then after receiving BE response we sill dispatch another action that will save the updated data to the store.
// Overall store setup looks good to me ;)
// "Slice-pattern" is somewhat similar to redux-subspace logic, you can check it out too. Cool!

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
