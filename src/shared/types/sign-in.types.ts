export interface SignInReq {
    nom: string, 
    prenom: string, 
    email: string, 
    password: string,
    adresse: string
}
export interface UtilisateurToken{
    idUtilisateur: number, 
    token: string
}