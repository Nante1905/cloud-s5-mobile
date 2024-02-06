import { http } from "../../shared/service/interceptor/axios.interceptor";
import { SignInReq, UtilisateurToken } from "../../shared/types/sign-in.types";

export const inscrire = (newuser: SignInReq) => http.post('auth/register',newuser);
export const sendToken = (userToken:UtilisateurToken)=> http.post(`/notif-token`,userToken);