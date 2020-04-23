import { UserTypes } from "./AuthEnums";

export interface User {
    id?: string,
    type: UserTypes,
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface AuthRequest {
    email: string;
    password: string;
    rememberUser: boolean;
}

export interface AuthState {
    isAuthorized: boolean,
    rememberUser: boolean
}
