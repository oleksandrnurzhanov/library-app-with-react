import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from "./AuthInterfaces";
import { ROUTER_URLS } from "../../routes";
import { useHistory, useLocation } from "react-router-dom";

// Just for clarification
// When we will have an API, we will dispatch `signIn` action which will be caught by our saga-middleware and then the saga run will be triggered.
// Then after receiving BE response we will dispatch another action that will save the updated data to the store - exactly!
// Overall store setup looks good to me ;)
// "Slice-pattern" is somewhat similar to redux-subspace logic, you can check it out too. Cool! - thanks

const history = useHistory();
const location = useLocation();

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthorized: false,
        isUserRemembered: false
    },
    reducers: {
        signIn: (state: AuthState, action) => {
            const { from }: any = location.state || { from: { pathname: ROUTER_URLS.HOME } };
            state.isAuthorized = action.payload.isAuthorized;
            state.isUserRemembered = action.payload.isUserRemembered;
            history.replace(from); // should be clarified - do sagas or thunks should be used?
            localStorage.setItem('isAuthorized', `${true}`);
            localStorage.setItem('isUserRemembered', `${action.payload}`);
        },
        signOut: (state: AuthState) => {
            state.isAuthorized = false;
            localStorage.removeItem('isAuthorized');
            localStorage.removeItem("isUserRemembered");
        },
        rememberUser: (state: AuthState, action) => {
        }
    }
});

export const {
    signIn,
    signOut,
    rememberUser
} = authSlice.actions;

export default authSlice.reducer;
