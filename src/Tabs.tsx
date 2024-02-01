import { Redirect, Route } from 'react-router-dom';
import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import ListAnnonce from './components/annonce/container/liste-annonce.root';
import DetailsAnnonce from './components/details-annonce/components/details-annonce.component';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Profile from './components/profil/profil.root';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';

const Tabs: React.FC = () => (
<IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route exact path="/tabs/annonce">
            <ListAnnonce />
          </Route>
          <Route exact path="/tabs/profile">
            <Profile />
          </Route>
          <Route path="/tabs/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom" className="tabBar" >
            <IonTabButton tab="annonce" href="/tabs/annonce">
              <FormatListBulletedIcon />
              {/* <IonLabel>Annonces</IonLabel> */}
            </IonTabButton>
            <IonTabButton className='ajout-button' tab="ajout annonce" href="/annonce/create/one">
              <AddIcon />
              {/* <IonIcon aria-hidden="true" icon={triangle} /> */}
              {/* <IonLabel>Ajout annonces</IonLabel> */}
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tabs/profile">
              <AccountCircleIcon/>
              {/* <IonLabel>Profile</IonLabel> */}
            </IonTabButton>
        </IonTabBar>
      </IonTabs>
);

export default Tabs;