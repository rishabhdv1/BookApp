import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {  IonApp, IonIcon, IonLabel,  IonRouterOutlet,  IonTabBar,  IonTabButton, IonTabs, IonMenu, IonHeader, IonToolbar,  IonTitle, IonContent,  IonList,  IonItem,  IonMenuToggle,  setupIonicReact, IonToggle, ToggleCustomEvent } from '@ionic/react';
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

const App: React.FC = () => {
  const [themeToggle, setThemeToggle] = useState(false);

  const toggleTheme = () => {
    const newThemeToggle = !themeToggle;
    setThemeToggle(newThemeToggle);
    // Save theme toggle value to local storage
    localStorage.setItem('themeToggle', JSON.stringify(newThemeToggle));
    toggleDarkTheme(newThemeToggle);
  };

  // Function to set the dark theme
  const toggleDarkTheme = (shouldAdd: boolean) => {
    document.body.classList.toggle('dark', shouldAdd);
  };

  useEffect(() => {
    // Retrieve theme toggle value from local storage
    const storedThemeToggle = localStorage.getItem('themeToggle');
    if (storedThemeToggle) {
      setThemeToggle(JSON.parse(storedThemeToggle));
      toggleDarkTheme(JSON.parse(storedThemeToggle));
    } else {
      // Use matchMedia to check the user preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      // Initialize the dark theme based on the initial value of the prefers-color-scheme media query
      initializeDarkTheme(prefersDark.matches);
      // Listen for changes to the prefers-color-scheme media query
      prefersDark.addEventListener('change', (mediaQuery) => initializeDarkTheme(mediaQuery.matches));
    }
  }, []);

  // Check/uncheck the toggle and update the theme based on isDark
  const initializeDarkTheme = (isDark: boolean) => {
    setThemeToggle(isDark);
    toggleDarkTheme(isDark);
  };

  return (
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
                <IonItem routerLink="/">
                  <IonIcon slot="start" icon={shareSocial} />
                  <IonLabel>Share</IonLabel>
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle>
                <IonItem routerLink="/">
                  <IonIcon slot="start" icon={star} />
                  <IonLabel>Rate</IonLabel>
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle>
                <IonItem>
                  <svg slot="start" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs><mask id="lineMdLightDark0"><circle cx="7.5" cy="7.5" r="5.5" fill="#fff"/><circle cx="7.5" cy="7.5" r="5.5"><animate fill="freeze" attributeName="cx" dur="0.4s" values="7.5;11"/><animate fill="freeze" attributeName="r" dur="0.4s" values="5.5;6.5"/></circle></mask><mask id="lineMdLightDark1"><g fill="#fff"><circle cx="12" cy="9" r="5.5"><animate fill="freeze" attributeName="cy" begin="1s" dur="0.5s" values="9;15"/></circle><g fill-opacity="0"><use href="#lineMdLightDark2" transform="rotate(-75 12 15)"/><use href="#lineMdLightDark2" transform="rotate(-25 12 15)"/><use href="#lineMdLightDark2" transform="rotate(25 12 15)"/><use href="#lineMdLightDark2" transform="rotate(75 12 15)"/><set attributeName="fill-opacity" begin="1.5s" to="1"/></g></g><path d="M0 10h26v5h-26z"/><path fill="none" stroke="#fff" stroke-dasharray="26" stroke-dashoffset="26" stroke-linecap="round" stroke-width="2" d="M1 12h22"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" values="26;52"/></path></mask><symbol id="lineMdLightDark2"><path d="M0 0"><animate fill="freeze" attributeName="d" begin="1.5s" dur="0.4s" values="M11 18h2L12 20z;M10.5 21.5h3L12 24z"/></path></symbol></defs><g fill="#ccc"><rect width="13" height="13" x="1" y="1" mask="url(#lineMdLightDark0)"/><path d="M-2 11h28v13h-28z" mask="url(#lineMdLightDark1)" transform="rotate(-45 12 12)"/></g></svg>
                  <IonLabel>Theme Light/Dark</IonLabel>
                  <IonToggle checked={themeToggle} onIonChange={toggleTheme}></IonToggle>
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
  )
};

export default App;
