import { IonCard, IonCol, IonIcon, IonItem, IonLabel, IonList, IonPage, IonRow } from '@ionic/react';
import { book, chevronDown, chevronUp } from 'ionicons/icons';
import Header from '../components/Header';
import TabBar from '../components/TabBar';
import Common from '../components/Common';
import { useState, useEffect } from 'react';

const Tab1: React.FC = () => {
  const [showLinks, setShowLinks] = useState(false);
  const toggleLinks = () => setShowLinks(!showLinks);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("english");
  const storedLanguage = localStorage.getItem("lang");

  useEffect(() => {
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
    }
  }, []);
  const Data = [
    { id: 1, title: "Free Books", description: "Description 1", link: "https://pdfdrive.com" },
    { id: 2, title: "Libgen", description: "Description 2", link: "https://libgen.is" },
    { id: 3, title: "Booksfi", description: "Description 3", link: "https://booksfi.net" },
    { id: 4, title: "Open Library", description: "Description 4", link: "https://openlibrary.org" },
    { id: 5, title: "Free Books", description: "Description 4", link: "https://pdfdrive.com" },
    { id: 6, title: "Tantor AudioBook", description: "Description 4", link: "https://tantor.com" },
    { id: 7, title: "Next Book Suggestion", description: "Description 4", link: "https://whatshouldireadnext.com" },
    { id: 8, title: "Reading Time", description: "Description 4", link: "https://howlongtoread.com" },
    { id: 9, title: "Librivox Audiobook", description: "Description 4", link: "https://librivox.org" },
    { id: 10, title: "Epic Reads", description: "Description 4", link: "https://www.epicreads.com" },
  ];
  const Data2 = [
    { 
      id: 1, 
      titles: { 
        english: "Art", 
        hindi: "कला" 
      }, 
      link: "https://www.pdfdrive.com/category/1" 
    },
    { 
      id: 2, 
      titles: { 
        english: "Trending Ebooks About Environment", 
        hindi: "पर्यावरण के बारे में ट्रेंडिंग ईबुक्स" 
      }, 
      link: "https://www.pdfdrive.com/category/2" 
    },
    { 
      id: 3, 
      titles: { 
        english: "Business Carrer", 
        hindi: "व्यापार कैरियर" 
      }, 
      link: "https://www.pdfdrive.com/category/3" 
    },
    { 
      id: 4, 
      titles: { 
        english: "Self Growth", 
        hindi: "आत्म विकास" 
      }, 
      link: "https://www.pdfdrive.com/category/4" 
    },
    { 
      id: 5, 
      titles: { 
        english: "Technology", 
        hindi: "प्रौद्योगिकी" 
      }, 
      link: "https://www.pdfdrive.com/category/5" 
    },
    { 
      id: 6, 
      titles: { 
        english: "Academic & Education", 
        hindi: "शैक्षिक और शिक्षा" 
      }, 
      link: "https://www.pdfdrive.com/category/6" 
    },
    { 
      id: 7, 
      titles: { 
        english: "Educational Videos", 
        hindi: "शैक्षिक वीडियो" 
      }, 
      link: "https://www.pdfdrive.com/category/7" 
    },
    { 
      id: 8, 
      titles: { 
        english: "Health & Fitness", 
        hindi: "स्वास्थ्य और फिटनेस" 
      }, 
      link: "https://www.pdfdrive.com/category/8" 
    },
    { 
      id: 9, 
      titles: { 
        english: "Trending Ebooks About History", 
        hindi: "इतिहास के बारे में ट्रेंडिंग ईबुक्स" 
      }, 
      link: "https://www.pdfdrive.com/category/9" 
    },
    { 
      id: 10, 
      titles: { 
        english: "Religion", 
        hindi: "धर्म" 
      }, 
      link: "https://www.pdfdrive.com/category/10" 
    },
    { 
      id: 11, 
      titles: { 
        english: "Fiction & Literature", 
        hindi: "काल्पनिक और साहित्य" 
      }, 
      link: "https://www.pdfdrive.com/category/11" 
    },
    { 
      id: 12, 
      titles: { 
        english: "Trending Ebooks About Medical", 
        hindi: "मेडिकल के बारे में ट्रेंडिंग ईबुक्स" 
      }, 
      link: "https://www.pdfdrive.com/category/12" 
    },
    { 
      id: 13, 
      titles: { 
        english: "Trending Ebooks About Spirituality", 
        hindi: "आध्यात्मिकता के बारे में ट्रेंडिंग ईबुक्स" 
      }, 
      link: "https://www.pdfdrive.com/category/13" 
    },
    { 
      id: 14, 
      titles: { 
        english: "Science & Research", 
        hindi: "विज्ञान और अनुसंधान" 
      }, 
      link: "https://www.pdfdrive.com/category/14" 
    },
    { 
      id: 15, 
      titles: { 
        english: "Politics & Law", 
        hindi: "राजनीति और कानून" 
      }, 
      link: "https://www.pdfdrive.com/category/15" 
    },
    { 
      id: 16, 
      titles: { 
        english: "Biography", 
        hindi: "जीवनी" 
      }, 
      link: "https://www.pdfdrive.com/category/16" 
    },
    { 
      id: 17, 
      titles: { 
        english: "Children & Youth", 
        hindi: "बच्चे और युवा" 
      }, 
      link: "https://www.pdfdrive.com/category/17" 
    },
    { 
      id: 18, 
      titles: { 
        english: "Environment", 
        hindi: "पर्यावरण" 
      }, 
      link: "https://www.pdfdrive.com/category/18" 
    },
    { 
      id: 19, 
      titles: { 
        english: "LifeStyle", 
        hindi: "जीवन शैली" 
      }, 
      link: "https://www.pdfdrive.com/category/19" 
    },
    { 
      id: 112, 
      titles: { 
        english: "Most Popular", 
        hindi: "सबसे लोकप्रिय" 
      }, 
      link: "https://www.pdfdrive.com/category/112" 
    },
    { 
      id: 113, 
      titles: { 
        english: "Editors Picks", 
        hindi: "संपादकों की पसंद" 
      }, 
      link: "https://www.pdfdrive.com/category/113" 
    },
  ];


  const openWebpage = (link: string) => {
    window.open(link);
  };

  const handleLanguageChange = (e: any) => {
    const selectedLang = e.detail.value;
    setSelectedLanguage(selectedLang);
    localStorage.setItem("lang", selectedLang);
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
      logout: "Logout",
      categories: "CATEGORIES",
      popSites: "Popular Sites"
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
      logout: "लॉग आउट",
      categories: "श्रेणियाँ",
      popSites: "लोकप्रिय साइटें"
    },
    sanskrit: {
      theme: "थीम (लाइट / डार्क)",
      privacyPolicy: "गोपनीयता नीति",
      openIntoBrowser: "ब्राउज़र में खोलें",
      home: "घर",
      howToUse: "का उपयोग कैसे करें ?",
      referAndEarn: "रेफर और कमाएं",
      termsAndConditions: "नियम और शर्तें",
      receiveNotifications: "सूचनाएँ प्राप्त करें",
      language: "भाषा",
      logout: "लॉग आउट",
      categories: "श्रेणियाँ",
      popSites: "लोकप्रिय साइटें"
    },
    // Add strings for other languages here
  };

  const pageTitle = languageStrings[selectedLanguage].popSites;
  const Category = languageStrings[selectedLanguage].categories;

  return (
    <IonPage>
      <Header title={pageTitle} />
      <Common>
      {! showLinks && (
          <IonRow>
            {Data.map((card:any) => (
              <IonCol size="6">
                <IonCard className="ion-padding" href={card.link}>
                  <IonRow className="ion-text-center">
                    <IonCol size="12">
                      <IonIcon size="large" icon={book} />
                    </IonCol>
                    <IonCol size="12">
                      <IonLabel>
                        <span style={{overflowX:"auto",whiteSpace:"nowrap"}}>{card.title}</span>
                      </IonLabel>
                    </IonCol>
                  </IonRow>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        )}
        <IonItem onClick={toggleLinks} style={{position:"sticky",top:"0",zIndex:"1",fontSize:"2em"}}>
          <IonIcon slot="start" icon={book} />
          <IonLabel>{Category}</IonLabel>
          <IonIcon slot="end" icon={showLinks ? chevronUp : chevronDown} />
        </IonItem>
        {showLinks && (
          <IonList>
          {Data2.map((item: any) => (
              <IonItem key={item.id} href={item.link}>
              <IonIcon slot="start" size="large" icon={book} />
              <IonLabel>{item.titles[selectedLanguage]}</IonLabel>
              </IonItem>
          ))}
          </IonList>
        )}
      </Common>
      <TabBar />
    </IonPage>
  );
};

export default Tab1;
