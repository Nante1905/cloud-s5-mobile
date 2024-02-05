import { Annonce } from "../../../../shared/types/creation-annonce-types";
import { modif } from "../../../service/annonce.service";
import { AnnonceInput } from "../../../../shared/types/annonce-input-type";
import { ApiResponse } from "../../../../shared/types/Response";
import { useEffect, useState } from "react";
import { getErrorMessage } from "../../../../shared/service/api-service";
import { convertCreationAnnonceToAnnonceInput, convertirAnnonceInverse } from "../../../../shared/hooks/Convert";
interface LastStepProps{
    annonce: Annonce,
}
interface LastStepState{
    error: string | null,
    success: boolean
}
const initialState: LastStepState = {
    error : null,
    success : false
}


const LastStepAnnonceModif: React.FC<LastStepProps> = (props: LastStepProps) => {
    const [state, setState] = useState(initialState);
    const annonce_details = convertCreationAnnonceToAnnonceInput( props.annonce ) ;
    useEffect(() => {
        console.log( "object add" , annonce_details );
        modif( props.annonce.id , annonce_details )
        .then((res) => {
        const response: ApiResponse = res.data;
        console.log( "comon" );
        if (response.ok) {
            console.log( "nety" );
            setState((state) => ({
            ...state,
            success : true
            }));
            
        } else {
            setState((state) => ({
            ...state,
            error : response.err
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
            error : errorMessage
        }));
        });
    } , []);
    const modifContent = () =>{
        if( state.success == false && state.error == null )
            return (
                <div>
                    <div className="blue"></div>
                    <img className="gif-car" src="/d43c11d76c7db33af616426597e88833.gif"/>
                    <div className="green"></div>
                </div>
            )
            
        return ( 
            <>
                Modifier avec succès
            </>
         )
    }
            

    return (
        <>
            { modifContent() }
        </>
            
    );
}
export default LastStepAnnonceModif;