import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {  IonApp, IonIcon, IonLabel,  IonRouterOutlet,  IonTabBar,  IonTabButton, IonTabs, IonMenu, IonHeader, IonToolbar,  IonTitle, IonContent,  IonList,  IonItem,  IonMenuToggle,  setupIonicReact, IonToggle, ToggleCustomEvent, IonSelect, IonSelectOption } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { arrowBack, browsers, ellipse, home, information, informationCircle, logIn, moon, shareSocial, square, star, sunny, triangle } from 'ionicons/icons';
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
    referAndEarn: "Refer and Earn",
    termsAndConditions: "Terms & Conditions",
    receiveNotifications: "Receive Notifications",
    language: "Language",
    logout: "Logout"
  },
  // Add strings for other supported languages here
  hindi: {
    referAndEarn: "रेफर और कमाएं",
    termsAndConditions: "नियम और शर्तें",
    receiveNotifications: "सूचनाएँ प्राप्त करें",
    language: "भाषा",
    logout: "लॉग आउट"
  },
  bengali: {
    referAndEarn: "রেফার করুন এবং আয় করুন",
    termsAndConditions: "শর্ত এবং পরিষেবার শর্তাবলী",
    receiveNotifications: "বিজ্ঞপ্তি পেতে অনুমতি দিন",
    language: "ভাষা",
    logout: "প্রস্থান"
  },
  marathi: {
    referAndEarn: "संदर्भ द्या आणि कमावा",
    termsAndConditions: "अटी आणि अटी",
    receiveNotifications: "सूचना मिळवा",
    language: "भाषा",
    logout: "लॉग आउट"
  },
  telugu: {
    referAndEarn: "మర్చిపోయించుకోండి మరియు సంపాదించండి",
    termsAndConditions: "షరతులు మరియు షరతులు",
    receiveNotifications: "నోటిఫికేషన్లను స్వీకరించండి",
    language: "భాష",
    logout: "లాగ్ అవుట్"
  },
  tamil: {
    referAndEarn: "பரிந்துரை செய்யுங்கள் மற்றும் சம்பாதிக்கவும்",
    termsAndConditions: "விதிமுறைகள் மற்றும் நிபந்தனைகள்",
    receiveNotifications: "அறிவிப்புகளைப் பெறுங்கள்",
    language: "மொழி",
    logout: "வெளியேறு"
  },
  gujarati: {
    referAndEarn: "સૂચવો અને કમાવો",
    termsAndConditions: "શરતો અને નિયમો",
    receiveNotifications: "સૂચનાઓ મેળવો",
    language: "ભાષા",
    logout: "લૉગ આઉટ"
  },
  urdu: {
    referAndEarn: "حوالہ دیں اور کمائیں",
    termsAndConditions: "شرائط و ضوابط",
    receiveNotifications: "اطلاعات حاصل کریں",
    language: "زبان",
    logout: "لاگ آؤٹ"
  },
  kannad: {
    referAndEarn: "ಸೂಚಿಸಿ ಮತ್ತು ಗಳಿಸಿ",
    termsAndConditions: "ಷರತ್ತುಗಳು ಮತ್ತು ನಿಯಮಗಳು",
    receiveNotifications: "ಅಧಿಸೂಚನೆಗಳನ್ನು ಸ್ವೀಕರಿಸಿ",
    language: "ಭಾಷೆ",
    logout: "ಲಾಗ್ ಔಟ್"
  },
  odia: {
    referAndEarn: "ସୂଚନା ଦିଅନ୍ତୁ ଏବଂ ପାଇଁ ଗନ୍ତୁ",
    termsAndConditions: "ଶର୍ତ ଓ ଶ୍ରେଣୀବନ୍ଧ",
    receiveNotifications: "ବିଜ୍ଞପ୍ତି ପାଇଁ ମନ୍ତବ୍ୟ",
    language: "ଭାଷା",
    logout: "ଲଗ୍ ଆଉଟ୍"
  },
  malayalam: {
    referAndEarn: "റഫറുചെയ്യുക മറ്റുള്ളവരുകൾക്കും വരുമാനം ലഭിക്കാൻ",
    termsAndConditions: "നിബന്ധനകൾ മറ്റുള്ളവരുകൾക്കും നിയമങ്ങൾ",
    receiveNotifications: "അറിയിപ്പ് ലഭിക്കുക",
    language: "ഭാഷ",
    logout: "ലോഗൗട്ട്"
  },
  punjabi: {
    referAndEarn: "ਰੈਫਰ ਕਰੋ ਅਤੇ ਕਮਾਓ",
    termsAndConditions: "ਸ਼ਰਤਾਂ ਅਤੇ ਹੋਰਾਂ",
    receiveNotifications: "ਸੂਚਨਾਵਾਂ ਪ੍ਰਾਪਤ ਕਰੋ",
    language: "ਭਾਸ਼ਾ",
    logout: "ਲ੉ਗਆਊਟ"
  },
  assamese: {
    referAndEarn: "ইয়াৰে আৰু উপার্জন কৰক",
    termsAndConditions: "শৰ্ত আৰু শ্ৰেণীবদ্ধ",
    receiveNotifications: "বাণীসমূহ পাওক",
    language: "ভাষা",
    logout: "লগ আউট"
  },
  maithili: {
    referAndEarn: "रेफर करें और कमाएं",
    termsAndConditions: "नियम और शर्तें",
    receiveNotifications: "सूचनाएँ प्राप्त करें",
    language: "भाषा",
    logout: "लॉग आउट"
  },
  meitei: {
    referAndEarn: "রেফার কৰি আৰু লাভ কৰক",
    termsAndConditions: "শর্তা আৰু নিয়মাবলি",
    receiveNotifications: "বাণী পাওক",
    language: "ভাষা",
    logout: "লগ আউট"
  },
  sanskrit: {
    referAndEarn: "संदर्भ दीयताम् अर्थं लभेत",
    termsAndConditions: "नियमा च शर्ता च",
    receiveNotifications: "सुचनानि प्राप्तव्यानि",
    language: "भाषा",
    logout: "निसृग्धिर्मार्गः"
  },
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
                  <IonIcon slot="start" icon={home} />
                  <IonLabel>Home</IonLabel>
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle>
                <IonItem>
                  <IonIcon slot="start" icon={informationCircle} />
                  <IonLabel>How to Use ?</IonLabel>
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle>
                <IonItem>
                  <IonIcon slot="start" icon={browsers} />
                  <IonLabel>Open into browser</IonLabel>
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
                  <IonLabel>Theme ( Light / Dark )</IonLabel>
                  <IonToggle checked={themeToggle}></IonToggle>
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle autoHide={false}>
                <IonItem>
                  <IonSelect value={selectedLanguage} onIonChange={handleLanguageChange} label={strings.language} interface="action-sheet">
                    {Object.keys(languageStrings).map(lang => (
                      <IonSelectOption key={lang} value={lang}>{capitalizeFirstLetter(lang)}</IonSelectOption>
                    ))}
                  </IonSelect>
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle>
                <IonItem>
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
