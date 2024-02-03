import { http } from "../../shared/service/interceptor/axios.interceptor";
import { Auth } from "../../shared/types/Utilisateur";

export const getById = ( id : number ) =>
http.get(`/annonces/${id}`);