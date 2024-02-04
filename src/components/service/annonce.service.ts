import { http } from "../../shared/service/interceptor/axios.interceptor";
import { Auth } from "../../shared/types/Utilisateur";
import { Annonce } from "../../shared/types/details-annonce-type";

export const getById = ( id : number ) =>
http.get(`/annonces/${id}`);

export const Modif_annonce =  ( id : number  ) => 
http.put(`/annonces/${id}/vendu`);