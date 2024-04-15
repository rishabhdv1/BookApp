import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {  IonApp, IonIcon, IonLabel,  IonRouterOutlet,  IonTabBar,  IonTabButton, IonTabs, IonMenu, IonHeader, IonToolbar,  IonTitle, IonContent,  IonList,  IonItem,  IonMenuToggle,  setupIonicReact, IonToggle, ToggleCustomEvent } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { arrowBack, browsers, ellipse, home, information, informationCircle, logIn, moon, shareSocial, square, star, sunny, triangle } from 'ionicons/icons';
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
import Tab3 from './pages/Devotional';
import Details from './pages/Details';
import Devotional from './pages/Devotional';

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
                <IonItem onClick={toggleTheme}>
                <IonIcon slot="start" icon={themeToggle ? moon : sunny} />
                  <IonLabel>Theme ( Light / Dark )</IonLabel>
                  <IonToggle checked={themeToggle}></IonToggle>
                </IonItem>
              </IonMenuToggle>

              <IonMenuToggle>
                <IonItem>
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

        <IonRouterOutlet id="main">
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab2">
            <Devotional />
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
      </IonReactRouter>
    </IonApp>
  )
};

export default App;
