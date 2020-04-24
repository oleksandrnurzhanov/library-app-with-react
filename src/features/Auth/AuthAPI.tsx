import axios from "axios";
import { AuthRequest } from "./AuthInterfaces";

export const AuthAPi = {
    fetchUserByEmail: (req: AuthRequest) => {
        return axios.get(`http://localhost:3001/users`)
            .then(resp => {
                return {
                    isAuthorized: (req.email === 'hpotter@gmail.com' && req.password === 'Qwerty1@'),
                    rememberUser: req.rememberUser
                }
            })
            .catch((error: any) => {
                console.log(error);
            });
    }
}
