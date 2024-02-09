import { Marque, Modele } from "./creation-annonce-types"
import { Utilisateur } from "./Utilisateur"
export interface Photo{
    url : string 
}

export interface Annonce {
    id :  number,
    reference : string,
    marque : Marque,
    prix : number , 
    modele : Modele,
    utilisateur : Utilisateur,
    creation : string,
    etat : number,
    favori : boolean ,
    status : number ,
    photos : Photo[],
    vues: number
}
