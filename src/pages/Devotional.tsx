import React, { useState, useEffect } from 'react';
import { IonActionSheet, IonButton, IonCol, IonContent, IonItem, IonList, IonPage, IonRouterLink, IonRow, IonSearchbar } from '@ionic/react';
import Header from '../components/Header';

const Devotional: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGod, setSelectedGod] = useState<string>('All');
  
  const storedLanguage = localStorage.getItem("lang") || "english";
  const [selectedLanguage, setSelectedLanguage] = useState<'english' | 'hindi'>(storedLanguage as 'english' | 'hindi'); // Default language is English

  const [details, setDetails] = useState([
    {
      mantra: {
        english: "Hanuman Chalisa",
        hindi: "हनुमान चालीसा"
      },
      god: "Hanuman Ji"
    },
    {
      mantra: {
        english: "Gayatri Mantra",
        hindi: "गायत्री मंत्र"
      },
      god: ""
    },
    {
      mantra: {
        english: "Shri Ganpati Atharvashirsha",
        hindi: "श्री गणपति अथर्वशीर्षा"
      },
      god: "Ganesh Ji"
    },
    {
      mantra: {
        english: "Shri Ramrksha stotra",
        hindi: "श्री रामरक्षा स्तोत्र"
      },
      god: "Shri Ram"
    },
    {
      mantra: {
        english: "Maruti stotra",
        hindi: "मारुति स्तोत्र"
      },
      god: "Hanuman Ji"
    },
    {
      mantra: {
        english: "Madhurashtakam",
        hindi: "मधुराष्टकम्"
      },
      god: ""
    },
    {
      mantra: {
        english: "Shri Ram Stuti",
        hindi: "श्री राम स्तुति"
      },
      god: "Shri Ram"
    },
    {
      mantra: {
        english: "Bajrang Baan",
        hindi: "बजरंग बाण"
      },
      god: "Hanuman Ji"
    },
    {
      mantra: {
        english: "Hanuman Ji Aarti",
        hindi: "हनुमान जी की आरती"
      },
      god: "Hanuman Ji"
    },
    {
      mantra: {
        english: "Sankat Mochan Hanumanashtak",
        hindi: "संकट मोचन हनुमानाष्टक"
      },
      god: "Hanuman Ji"
    }
  ]);

  useEffect(() => {
    // Load selected language from localStorage on component mount
    const storedLanguage = localStorage.getItem('lang');
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage as 'english' | 'hindi');
    }
  }, []);

  useEffect(() => {
    // Listen for changes in selectedLanguage and update localStorage
    localStorage.setItem('lang', selectedLanguage);
  }, [selectedLanguage]);

  const handleSearchTextChange = (e: CustomEvent) => {
    setSearchText(e.detail.value);
  };

  const handleGodSelection = (god: string) => {
    setSelectedGod(god);
    setIsOpen(false);
  };

  const filteredDetails = details.filter(entry => {
    const godMatch = selectedGod === 'All' || entry.god === selectedGod;
    const searchTextMatch = entry.mantra[selectedLanguage].toLowerCase().includes(searchText.toLowerCase());

    return godMatch && searchTextMatch;
  }).sort((a, b) => a.mantra[selectedLanguage].localeCompare(b.mantra[selectedLanguage]));

  const handleLanguageChange = (e: any) => {
    const selectedLang = e.detail.value;
    setSelectedLanguage(e.detail.value);
    localStorage.setItem("lang",e.detail.value);
    window.location.reload();  
  };

  const languageStrings: { [key: string]: any } = {
    english: {
      devName: "Devotional",
      all: "All",
      ContentName: "Refer and Earn",
      termsAndConditions: "Terms & Conditions",
      language: "Language",
    },
    // Add strings for other supported languages here
    hindi: {
      devName: "धार्मिक",
      all: "सभी",
      ContentName: "रेफर और कमाएं",
      termsAndConditions: "नियम और शर्तें",
      language: "भाषा",
    },
    // Add strings for other languages
  };

  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const strings = languageStrings[selectedLanguage] || languageStrings['english'];

  return (
    <IonPage>
      <Header title={strings.devName} />
      <IonContent>
        <IonRow className="ion-align-items-center">
          <IonCol size="8">
            <IonSearchbar value={searchText} onIonInput={handleSearchTextChange} />
          </IonCol>
          <IonCol size="4">
            <IonButton expand="block" onClick={() => setIsOpen(true)}>
              {selectedGod !== 'All' ? `${selectedGod}` : 'All'}
            </IonButton>
          </IonCol>
        </IonRow>
        <IonActionSheet
          isOpen={isOpen}
          buttons={[
            {
              text: 'All',
              handler: () => handleGodSelection('All')
            },
            {
              text: 'Hanuman Ji',
              handler: () => handleGodSelection('Hanuman Ji')
            },
            {
              text: 'Ganesh Ji',
              handler: () => handleGodSelection('Ganesh Ji')
            },
            {
              text: 'Shri Ram',
              handler: () => handleGodSelection('Shri Ram')
            },
          ]}
          onDidDismiss={() => setIsOpen(false)}
        ></IonActionSheet>
        <IonList>
          {filteredDetails.map((entry: any, index: any) => (
            <IonRouterLink key={index} href={`/details/${entry.mantra[selectedLanguage]}`}>
              <IonList lines="full">
                <IonItem>
                  {/* Display mantra according to selected language */}
                  <span slot="start">{entry.mantra[selectedLanguage]}</span>
                </IonItem>
              </IonList>
            </IonRouterLink>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Devotional;
