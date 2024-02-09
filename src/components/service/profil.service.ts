import { http } from "../../shared/service/interceptor/axios.interceptor";

export const getUserInfo = ()=> http.get(`/profil`);