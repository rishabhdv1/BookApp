import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {  IonApp, IonIcon, IonLabel,  IonRouterOutlet,  IonTabBar,  IonTabButton, IonTabs, IonMenu, IonHeader, IonToolbar,  IonTitle, IonContent,  IonList,  IonItem,  IonMenuToggle,  setupIonicReact, IonToggle, ToggleCustomEvent, IonSelect, IonSelectOption } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { arrowBack, browsers, ellipse, home, homeOutline, information, informationCircle, language, lockClosedOutline, logIn, moon, shareSocial, square, star, sunny, triangle } from 'ionicons/icons';
import Tab1 from './pages/PopularSites';
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
import Delete from './pages/Delete';

setupIonicReact();

const App: React.FC = () => {
  const [themeToggle, setThemeToggle] = useState(false);
  const storedLanguage = localStorage.getItem("lang") || "english";
  // const [selectedLanguage, setSelectedLanguage] = useState<string>('english');
  const [selectedLanguage, setSelectedLanguage] = useState<string>(storedLanguage);


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

  const handleLanguageChange = (e: any) => {
    const selectedLang = e.detail.value;
    setSelectedLanguage(e.detail.value);
    localStorage.setItem("lang",e.detail.value);
    window.location.reload();  
  };

  const languageStrings: { [key: string]: any } = {
    english: {
      theme: "Theme (Light / Dark)",
      privacyPolicy: "Privacy Policy",
      openIntoBrowser: "Open into browser",
      home: "Home",
      howToUse: "How to use ?",
      referAndEarn: "Refer and Earn",
      termsAndConditions: "Terms & Conditions",
      receiveNotifications: "Receive Notifications",
      language: "Language",
      logout: "Logout"
    },
    // Add strings for other supported languages here
    hindi: {
      theme: "थीम (लाइट / डार्क)",
      privacyPolicy: "गोपनीयता नीति",
      openIntoBrowser: "ब्राउज़र में खोलें",
      home: "घर",
      howToUse: "का उपयोग कैसे करें ?",
      referAndEarn: "रेफर और कमाएं",
      termsAndConditions: "नियम और शर्तें",
      receiveNotifications: "सूचनाएँ प्राप्त करें",
      language: "भाषा",
      logout: "लॉग आउट"
    },
    /* sanskrit: {
      theme: "थीम (लाइट / डार्क)",
      privacyPolicy: "गोपनीयता नीति",
      openIntoBrowser: "ब्राउज़र में खोलें",
      home: "घर",
      howToUse: "का उपयोग कैसे करें ?",
      referAndEarn: "संदर्भ दीयताम् अर्थं लभेत",
      termsAndConditions: "नियमा च शर्ता च",
      receiveNotifications: "सुचनानि प्राप्तव्यानि",
      language: "भाषा",
      logout: "निसृग्धिर्मार्गः"
    }, */
  };

  function capitalizeFirstLetter(str:any) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const strings = languageStrings[selectedLanguage] || languageStrings['english'];

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
                  <IonIcon slot="start" icon={homeOutline} />
                  <IonLabel>{strings.home}</IonLabel>
                </IonItem>
              </IonMenuToggle>
              {/* <IonMenuToggle>
                <IonItem routerLink="/delete">
                  <IonIcon slot="start" icon={homeOutline} />
                  <IonLabel>Home 2</IonLabel>
                </IonItem>
              </IonMenuToggle> */}
              <IonMenuToggle>
                <IonItem>
                  <IonIcon slot="start" icon={informationCircle} />
                  <IonLabel>{strings.howToUse}</IonLabel>
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle>
                <IonItem>
                  <IonIcon slot="start" icon={browsers} />
                  <IonLabel>{strings.openIntoBrowser}</IonLabel>
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle>
                <IonItem>
                  <IonIcon slot="start" icon={shareSocial} />
                  <IonLabel>{strings.referAndEarn}</IonLabel>
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle>
                <IonItem onClick={toggleTheme}>
                <IonIcon slot="start" icon={themeToggle ? moon : sunny} />
                  <IonLabel>{strings.theme}</IonLabel>
                  <IonToggle checked={themeToggle}></IonToggle>
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle autoHide={false}>
                <IonItem>
                  <IonIcon slot="start" icon={language} />
                  <IonSelect value={selectedLanguage} onIonChange={handleLanguageChange} label={strings.language} interface="action-sheet">
                    {Object.keys(languageStrings).map(lang => (
                      <IonSelectOption key={lang} value={lang}>{capitalizeFirstLetter(lang)}</IonSelectOption>
                    ))}
                  </IonSelect>
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle>
                <IonItem>
                  <IonIcon slot="start" icon={lockClosedOutline} />
                  <IonLabel>{strings.privacyPolicy}</IonLabel>
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
          <Route exact path="/delete">
            <Delete />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  )
};

export default App;
