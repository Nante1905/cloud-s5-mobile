import {
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonList,
  IonRefresher,
  IonRefresherContent,
  IonThumbnail,
  IonToast,
  RefresherEventDetail,
} from "@ionic/react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Alert } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppLoaderComponent from "../../../shared/loader/app-loader.component";
import { getErrorMessage } from "../../../shared/service/api-service";
import { ApiResponse } from "../../../shared/types/Response";
import { Annonce } from "../../../shared/types/liste-annonce";
import { findAllAnnonce } from "../../service/Utilisateur.service";
import { Delete_annonce, Modif_annonce } from "../../service/annonce.service";
import "./list-annonce.component.css";
interface ListAnnonceState {
  tab: string;
  annonces: Annonce[];
  success: string | null;
  error: string | null;
  actual_list: string;
  loading: boolean;
  delete: boolean;
}
const numberFormatter = Intl.NumberFormat("en", {
  notation: "compact",
});

const initialState: ListAnnonceState = {
  tab: "0",
  annonces: [],
  success: null,
  error: null,
  actual_list: "/annonces/yours",
  loading: true,
  delete: false,
};
const ListAnnonceComponent: React.FC = () => {
  const [state, setState] = useState(initialState);
  const getColor = (status: number) => {
    if (status == -5) return "black";
    if (status == -5) return "red";
    if (status == 0) return "rgb( 255 , 168 , 0 )";
    if (status == 5) return "rgb( 228 , 255 , 60 )";
    if (status == 10) return "rgb( 48 , 255 , 56 )";
    return "";
  };
  const formatNumber = (number: number) => {
    return number.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };
  const changeList = (url: string) => {
    setState((state) => ({
      ...state,
      loading: true,
    }));
    findAllAnnonce(url)
      .then((res) => {
        const response: ApiResponse = res.data;
        if (response.ok) {
          console.log(response.data);

          setState((state) => ({
            ...state,
            annonces: response.data,
            loading: false,
            actual_list: url,
          }));
        } else {
          setState((state) => ({
            ...state,
            error: response.err,
          }));
        }
      })
      .catch((err) => {
        console.error(err);
        let errorMessage = "";
        if (
          !err.response?.data.err ||
          err.response?.data.err == "" ||
          err.response?.data.err == null
        ) {
          errorMessage = getErrorMessage(err.code);
        } else {
          errorMessage = err.response.data.err;
        }
        console.log("etoo");

        setState((state) => ({
          ...state,
          error: errorMessage,
        }));
      });
    console.log(state.annonces);
  };

  const DeleteAnnonce = (id_annonce: number) => {
    console.log(id_annonce);
    Delete_annonce(id_annonce)
      .then((res) => {
        const response: ApiResponse = res.data;
        if (response.ok) {
          const updatedAnnonces = state.annonces.filter(
            (annonce) => annonce.id !== id_annonce
          );
          setState((prevState) => ({
            ...prevState,
            annonces: updatedAnnonces,
            delete: true,
          }));
        } else {
          setState((state) => ({
            ...state,
            error: response.err,
          }));
        }
      })
      .catch((err) => {
        console.error(err);
        let errorMessage = "";
        if (
          !err.response?.data.err ||
          err.response?.data.err == "" ||
          err.response?.data.err == null
        ) {
          errorMessage = getErrorMessage(err.code);
        } else {
          errorMessage = err.response.data.err;
        }
        console.log("etoo");

        setState((state) => ({
          ...state,
          error: errorMessage,
        }));
      });
  };

  const ModifAnnonce = (id_annonce: number) => {
    console.log("manao modif");
    Modif_annonce(id_annonce)
      .then((res) => {
        const response: ApiResponse = res.data;
        console.log(response);

        if (response.ok) {
          setState((state) => ({
            ...state,
            success: "La voiture a été marquée comme vendue",
          }));
          changeList(state.actual_list);
        } else {
          setState((state) => ({
            ...state,
            error: response.err,
          }));
        }
      })
      .catch((err) => {
        console.error(err);
        let errorMessage = "";
        if (
          !err.response?.data.err ||
          err.response?.data.err == "" ||
          err.response?.data.err == null
        ) {
          errorMessage = getErrorMessage(err.code);
        } else {
          errorMessage = err.response.data.err;
        }
        console.log("etoo");

        setState((state) => ({
          ...state,
          error: errorMessage,
        }));
      });
  };

  const Valider = (id_annonce: number) => {
    ModifAnnonce(id_annonce);
  };

  useEffect(() => {
    changeList("/annonces/yours");
  }, []);
  const handleTabClick = (tab: string) => {
    setState((state) => ({
      ...state,
      tab: tab,
    }));
    if (tab == "3") changeList("/annonces/vendu/moi");
    if (tab == "2") changeList("/annonces/valide/moi");
    if (tab == "1") changeList("/annonces/nonValide/moi");
  };

  const handleRefresh = (event: CustomEvent<RefresherEventDetail>) => {
    findAllAnnonce("/annonces/yours")
      .then((res) => {
        const response: ApiResponse = res.data;
        if (response.ok) {
          console.log(response.data);
          event.detail.complete();

          setState((state) => ({
            ...state,
            annonces: response.data,
            loading: false,
            actual_list: "/annonces/yours",
          }));
        } else {
          setState((state) => ({
            ...state,
            error: response.err,
          }));
        }
      })
      .catch((err) => {
        console.error(err);
        event.detail.complete();

        let errorMessage = "";
        if (
          !err.response?.data.err ||
          err.response?.data.err == "" ||
          err.response?.data.err == null
        ) {
          errorMessage = getErrorMessage(err.code);
        } else {
          errorMessage = err.response.data.err;
        }
        console.log("etoo");

        setState((state) => ({
          ...state,
          error: errorMessage,
        }));
      });
  };

  const formatINTL = (value: number) => {};
  const CanValid = (status: number, id_annonce: number) => {
    if (status == 5)
      return (
        <IonItemOption
          color="success"
          onClick={() => Valider(id_annonce)}
          expandable
        >
          <CheckCircleOutlineIcon />
        </IonItemOption>
      );
    return <></>;
  };

  return (
    <>
      <IonRefresher slot="fixed" onIonRefresh={(event) => handleRefresh(event)}>
        <IonRefresherContent></IonRefresherContent>
      </IonRefresher>
      <div className="list-title">
        <h1>Vos annonces</h1>
        <div className="progress-choice">
          <div
            className={`en-attente choice ${
              state.tab === "1" ? "choice-active" : ""
            }`}
            onClick={() => handleTabClick("1")}
          ></div>
          <div
            className={`publie choice ${
              state.tab === "2" ? "choice-active" : ""
            }`}
            onClick={() => handleTabClick("2")}
          ></div>
          <div
            className={`vendu choice ${
              state.tab === "3" ? "choice-active" : ""
            }`}
            onClick={() => handleTabClick("3")}
          ></div>
        </div>
        <div className="progress-choice-text">
          <div className="choice">En attente</div>
          <div className="choice">Publié</div>
          <div className="choice">Vendu</div>
        </div>
      </div>
      <AppLoaderComponent loading={state.loading}>
        <IonList className="list-annonce" lines="none">
          {state.annonces
            .filter((annonce) => [0, 5, 10].includes(annonce.status))
            .map((annonce) => (
              <IonItemSliding id={`annonce`} key={annonce.id}>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/details/${annonce.id}`}
                >
                  <IonItem
                    className="annonce-content"
                    style={{
                      borderLeft: `10px solid ${getColor(annonce.status)}`,
                      background: "rgb( 240 , 240 , 240 )",
                    }}
                  >
                    <IonThumbnail slot="start">
                      <img
                        className="card-img"
                        alt="Silhouette of mountains"
                        src={
                          annonce.photos.length != 0
                            ? annonce.photos[0].url
                            : ""
                        }
                      />
                    </IonThumbnail>
                    <div id="card-text">
                      <div className="card-title">
                        {annonce.marque.nom} {annonce.modele.nom}
                      </div>
                      <div className="content-card">
                        <div className="prix">
                          {formatNumber(annonce.prix)} MGA
                        </div>
                        <div className="view">
                          {" "}
                          <VisibilityIcon />{" "}
                          <span>{numberFormatter.format(annonce.vues)}</span>
                        </div>
                      </div>
                    </div>
                  </IonItem>
                </Link>
                <IonItemOptions side="start">
                  <IonItemOption
                    color="danger"
                    onClick={() => DeleteAnnonce(annonce.id)}
                    expandable
                  >
                    <DeleteIcon />
                  </IonItemOption>
                </IonItemOptions>
                <IonItemOptions side="end">
                  {CanValid(annonce.status, annonce.id)}
                </IonItemOptions>
              </IonItemSliding>
            ))}
        </IonList>
      </AppLoaderComponent>
      <IonToast
        isOpen={state.delete}
        message={"annonce supprimé"}
        duration={3000}
        onDidDismiss={() => setState({ ...state, delete: false })}
        color="success"
      >
        <Alert severity="success">{"annonce supprimé"}</Alert>
      </IonToast>
      <IonToast
        isOpen={!!state.success}
        message={state.success || ""}
        duration={3000}
        onDidDismiss={() => setState({ ...state, success: null })}
        color="success"
      >
        <Alert severity="success">{state.success as string}</Alert>
      </IonToast>
      <IonToast
        isOpen={!!state.error}
        message={state.error || ""}
        duration={3000}
        onDidDismiss={() => setState({ ...state, error: null })}
        color="warning"
      >
        <Alert severity="warning">{state.error as string}</Alert>
      </IonToast>
    </>
  );
};

export default ListAnnonceComponent;
