import axios, { AxiosResponse } from "axios";
import { SignInRequest, User } from "./AuthInterfaces";
import { API_URLS } from "../../shared/constants/AppConstants";

export const AuthAPi = {
    loginUser: (req: SignInRequest) => {
        return axios.get(API_URLS.USERS)
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
        return axios.post(API_URLS.USERS, user, {  headers: { accept: 'application/json' }})
            .then((res: AxiosResponse<User>) => res)
            .catch((error: any) => {
               console.log(error);
            });
    }
}
