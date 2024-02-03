// apiService.js
import { http } from "../../shared/service/interceptor/axios.interceptor";
import { Auth } from "../../shared/types/Utilisateur";


export const connexion = async (form: Auth) =>
  http.post(`/login`, form);

export const findAllAnnonce = ( url : string ) =>
http.get(url);
// /annonces/valide/moi