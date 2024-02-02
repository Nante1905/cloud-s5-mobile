import { Annonce } from "../../../../shared/types/creation-annonce-types";

interface LastStepProps{
    annonce: Annonce
}

const LastStepAnnonceCreation: React.FC<LastStepProps> = (props: LastStepProps) => {
    return (
        <div>
            <div className="blue"></div>
            <img className="gif-car" src="/d43c11d76c7db33af616426597e88833.gif"/>
            <div className="green"></div>
        </div>
    );
}
export default LastStepAnnonceCreation;