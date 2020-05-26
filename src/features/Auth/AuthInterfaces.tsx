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
    rememberUser?: boolean;
}

export interface SignInResponse {
    rememberUser: boolean;
    user: User
}

export interface AuthState {
   auth: {
       user: User
   }
}
