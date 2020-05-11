import axios, { AxiosResponse } from "axios";
import { SignInRequest, User } from "./AuthInterfaces";

export const AuthAPi = {
    USERS_URL: "http://localhost:3001/users",
    loginUser: (req: SignInRequest) => {
        return axios.get(AuthAPi.USERS_URL)
            .then((res: AxiosResponse<User[]>) => {
                const registeredUsers: User[] = res.data.filter((user: User) => user.email === req.email && user.password === req.password);

                return {
                    rememberUser: req.rememberUser,
                    user: registeredUsers[0]
                }
            })
            .catch((error: any) => {
                console.log(error);
            });
    },
    registerUser: (user: User) => {
        return axios.post(AuthAPi.USERS_URL, user, {  headers: { accept: 'application/json' }})
            .then((res: AxiosResponse<User>) => res)
            .catch((error: any) => {
               console.log(error);
            });
    }
}
