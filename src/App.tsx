import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {  IonApp, IonIcon, IonLabel,  IonRouterOutlet,  IonTabBar,  IonTabButton, IonTabs, IonMenu, IonHeader, IonToolbar,  IonTitle, IonContent,  IonList,  IonItem,  IonMenuToggle,  setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { arrowBack, browsers, ellipse, home, information, informationCircle, logIn, shareSocial, square, star, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Login from './pages/Login';
import Tab3 from './pages/Tab3';
import Details from './pages/Details';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonMenu contentId="main" type="overlay">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonMenuToggle>
              <IonItem routerLink="/tab1">
                <IonIcon slot="start" icon={home} />
                <IonLabel>Home</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem routerLink="/tab2">
                <IonIcon slot="start" icon={informationCircle} />
                <IonLabel>How to Use ?</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem routerLink="/tab3">
                <IonIcon slot="start" icon={browsers} />
                <IonLabel>Open into browser</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem routerLink="/login">
                <IonIcon slot="start" icon={shareSocial} />
                <IonLabel>Share</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem routerLink="/login">
                <IonIcon slot="start" icon={star} />
                <IonLabel>Rate</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem routerLink="/login">
                <IonIcon slot="start" icon={arrowBack} />
                <IonLabel>Exit</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem routerLink="">
                <IonLabel>Privacy Policy</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>


      <IonTabs>
        <IonRouterOutlet id="main">
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route exact path="/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/details/:devotionalName">
            <Details />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonLabel style={{fontSize:"1.8em"}}>Sites</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonLabel style={{fontSize:"1.8em"}}>Category</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonLabel style={{fontSize:"1.8em"}}>Devotional</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
