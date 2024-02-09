import { IonItem } from "@ionic/react";
import { ChangeEvent, useState } from "react";
import { SignInReq } from "../../../../shared/types/sign-in.types";
import "./inscription.css";

interface InscriptionProps {
  handleNomChange: (newvalue: string) => void;
  handlePrenomChange: (newvalue: string) => void;
  handleEmailChange: (newvalue: string) => void;
  handlePasswordChange: (newvalue: string) => void;
  handleAdresseChange: (newvalue: string) => void;
  newUser: SignInReq;
  saveNewUser: (newuser: SignInReq) => void;
}
interface InscriptionState {
  nomClasse: string;
  prenomClasse: string;
  emailClasse: string;
  passwordClasse: string;
  adresseClasse: string;
}
const initialState: InscriptionState = {
  nomClasse: "",
  prenomClasse: "",
  emailClasse: "",
  passwordClasse: "",
  adresseClasse: "",
};
const InscriptionComponent: React.FC<InscriptionProps> = (
  props: InscriptionProps
) => {
  const [state, setState] = useState<InscriptionState>(initialState);

  const handleNomChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.handleNomChange(e.target.value);
    setState((state) => ({
      ...state,
      nomClasse: "",
    }));
  };
  const handlePrenomChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.handlePrenomChange(e.target.value);
    setState((state) => ({
      ...state,
      prenomClasse: "",
    }));
  };
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.handleEmailChange(e.target.value);
    setState((state) => ({
      ...state,
      emailClasse: "",
    }));
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.handlePasswordChange(e.target.value);
    setState((state) => ({
      ...state,
      passwordClasse: "",
    }));
  };
  const handleAdresseChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.handleAdresseChange(e.target.value);
    setState((state) => ({
      ...state,
      adresseClasse: "",
    }));
  };
  const submitForm = () => {
    if (props.newUser.nom == "") {
      setState((state) => ({
        ...state,
        nomClasse: "error",
      }));
    }
    if (props.newUser.prenom == "") {
      setState((state) => ({
        ...state,
        prenomClasse: "error",
      }));
    }
    if (props.newUser.email == "") {
      setState((state) => ({
        ...state,
        emailClasse: "error",
      }));
    }
    if (props.newUser.password == "") {
      setState((state) => ({
        ...state,
        passwordClasse: "error",
      }));
    }
    if (props.newUser.adresse == "") {
      setState((state) => ({
        ...state,
        adresseClasse: "error",
      }));
    }
    if (
      props.newUser.adresse != "" &&
      props.newUser.password != "" &&
      props.newUser.email != "" &&
      props.newUser.prenom != "" &&
      props.newUser.nom != ""
    ) {
      props.saveNewUser(props.newUser);
    }
  };

  return (
    <>
      <IonItem>
        <div className="title-login inscription-title">
          <h1>Inscrivez-vous, c'est gratuit!</h1>
        </div>
      </IonItem>
      <div className="ion-padding form-inscription">
        <h1 className="form-title">Inscription</h1>
        <div className="form-login">
          <div className="form-group">
            <label>Nom</label>
            <input
              className={state.nomClasse}
              type="text"
              onChange={handleNomChange}
              value={props.newUser.nom}
            />
          </div>
          <div className="form-group">
            <label>Prénom</label>
            <input
              className={state.prenomClasse}
              onChange={handlePrenomChange}
              type="text"
              value={props.newUser.prenom}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className={state.emailClasse}
              onChange={handleEmailChange}
              type="email"
              value={props.newUser.email}
            />
          </div>
          <div className="form-group">
            <label>Mot de passe</label>
            <input
              className={state.passwordClasse}
              onChange={handlePasswordChange}
              type="password"
              value={props.newUser.password}
            />
          </div>
          <div className="form-group">
            <label>Addresse</label>
            <input
              className={state.adresseClasse}
              onChange={handleAdresseChange}
              type="text"
              value={props.newUser.adresse}
            />
          </div>
          <div className="form-submit" onClick={() => submitForm()}>
            S'Inscrire
          </div>
        </div>
      </div>
    </>
  );
};

export default InscriptionComponent;
