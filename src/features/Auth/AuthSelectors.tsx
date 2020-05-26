import { AuthState } from "./AuthInterfaces";

export const selectUser = (state: AuthState): any => state.auth.user;
