import { http } from "../../shared/service/interceptor/axios.interceptor";
import { SignInReq } from "../../shared/types/sign-in.types";

export const inscrire = (newuser: SignInReq) => http.post('auth/register',newuser);