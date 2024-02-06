import { http } from "../../shared/service/interceptor/axios.interceptor";
import { ApiResponse } from "../../shared/types/Response";
import { Etat } from "../../shared/types/creation-annonce-types";
import { getAllEtat } from "./Add-annonce.service";

export const all_etats = getEtats();
function  getEtats() : Etat[] {
    const temp : Etat[] = [];
     getAllEtat()
      .then((res) => {
        const response: ApiResponse = res.data;
        if (response.ok) {
          const etats: Etat[] = response.data;          
          return  etats; 
        } else {
            console.log(new Error(response.err)); 
            return temp;
        }
      })
      .catch((err) => {
        console.log(err); 
        return temp;
      });
  };
  
