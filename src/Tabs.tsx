import { Redirect, Route } from 'react-router-dom';
import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import ListAnnonce from './components/annonce/container/liste-annonce.root';
import DetailsAnnonce from './components/details-annonce/components/details-annonce.component';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

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
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom" className="tabBar" >
            <IonTabButton tab="annonce" href="/tabs/annonce">
              <IonIcon aria-hidden="true" icon={ellipse} />
              <IonLabel>Annonces</IonLabel>
            </IonTabButton>
            <IonTabButton tab="ajout annonce" href="/annonce/create/one">
              <IonIcon aria-hidden="true" icon={triangle} />
              <IonLabel>Ajout annonces</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tab3">
              <IonIcon aria-hidden="true" icon={square} />
              <IonLabel>Tab 3</IonLabel>
            </IonTabButton>
        </IonTabBar>
      </IonTabs>
);

export default Tabs;