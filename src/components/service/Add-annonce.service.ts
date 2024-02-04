import { http } from "../../shared/service/interceptor/axios.interceptor";
import { Voiture } from "../../shared/types/creation-annonce-types";
export const getAllMarque  = ()=> http.get(`/marques`);
export const getAllModele  = ()=> http.get(`/modeles`);
export const getAllEtat  = ()=> http.get(`/etats`);
export const getAllCouleur  = ()=> http.get(`/couleurs`);
export const getModeleByMarque = (marque:number)=>http.get(`modeles/fromMarque/`+marque);
export const getAllEnergie = ()=> http.get(`energies`);
export const getAllBV = ()=> http.get(`vitesses`)
export const estimate = (voiture: Voiture)=> http.post(`annonces/estimate`,voiture)