import { IonItem } from "@ionic/react";
import { Avatar } from "@mui/material";
import { deepOrange, deepPurple } from '@mui/material/colors';

const ProfilComponent   : React.FC = () => {
    

    return (
        <>
            <div className="profile-page"  >
                <div className="title-profile"  >
                    <div >
                            <h1>
                                Profile
                            </h1>
                    </div>
                </div>
                <div className="avatar-profile"  >
                    <Avatar style={{ fontSize : "50px" , height : "120px" , width : "120px" }} sx={{ bgcolor: deepPurple[500] }}>N</Avatar>
                    <h1>
                        Nantenaina Raphaël
                    </h1>
                </div>
                <div className="information-page" >
                    <div className="info-groupe" >
                        <div className="label-info" >Nom</div>
                        <div className="info-input" >
                            Jean 
                        </div>
                    </div>
                    <div className="info-groupe" >
                        <div className="label-info" >Email</div>
                        <div className="info-input" >
                            yoanrazafinjaka@razafinjaka 
                        </div>
                    </div>
                    <div className="info-groupe" >
                        <div className="label-info" >Adresse</div>
                        <div className="info-input" >
                            67 ha NO
                        </div>
                    </div>
                    <div className="info-groupe" >
                        <div className="label-info" >Membre depuis</div>
                        <div className="info-input" >
                            2003
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ProfilComponent;