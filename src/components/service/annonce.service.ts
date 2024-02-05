import { http } from "../../shared/service/interceptor/axios.interceptor";
import { Auth } from "../../shared/types/Utilisateur";
import { Annonce } from "../../shared/types/details-annonce-type";
import { AnnonceInput } from "../../shared/types/annonce-input-type";
export const getById = ( id : number ) =>
http.get(`/annonces/${id}`);

export const Modif_annonce =  ( id : number  ) => 
http.put(`/annonces/${id}/vendu`);

export const modif =  ( id : number , annonce : AnnonceInput  ) => 
http.put(`/annonces/${id}` , annonce);