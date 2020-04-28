export interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    isAdmin: boolean;
    id?: string;
}

export interface SignInRequest {
    email: string;
    password: string;
    rememberUser: boolean;
}

export interface AuthState {
    isAuthorized: boolean,
    rememberUser: boolean
}
