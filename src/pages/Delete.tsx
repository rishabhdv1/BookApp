import { IonCard, IonCol, IonIcon, IonItem, IonLabel, IonList, IonPage, IonRow } from '@ionic/react';
import { book, chevronDown, chevronUp } from 'ionicons/icons';
import Header from '../components/Header';
import TabBar from '../components/TabBar';
import Common from '../components/Common';
import { useState } from 'react';

const Delete: React.FC = () => {
  const [showLinks, setShowLinks] = useState(false);
  const storedLanguage = localStorage.getItem("lang") || "english";
  const [selectedLanguage, setSelectedLanguage] = useState<string>(storedLanguage);
  const toggleLinks = () => setShowLinks(!showLinks);

  const Data2 = [
    { id: 1, title: "Art", link: "https://www.pdfdrive.com/category/1" },
    { id: 2, title: "Trending Ebooks About Environment", link: "https://www.pdfdrive.com/category/2" },
    { id: 3, title: "Business Carrer", link: "https://www.pdfdrive.com/category/3" },
    { id: 4, title: "Self Growth", link: "https://www.pdfdrive.com/category/4" },
    { id: 5, title: "Technology", link: "https://www.pdfdrive.com/category/5" },
    { id: 6, title: "Academic & Education", link: "https://www.pdfdrive.com/category/6" },
    { id: 7, title: "Educational Videos", link: "https://www.pdfdrive.com/category/7" },
    { id: 8, title: "Health & Fitness", link: "https://www.pdfdrive.com/category/8" },
    { id: 9, title: "Trending Ebooks About History", link: "https://www.pdfdrive.com/category/9" },
    { id: 10, title: "Religion", link: "https://www.pdfdrive.com/category/10" },
    { id: 11, title: "Fiction & Literature", link: "https://www.pdfdrive.com/category/11" },
    { id: 12, title: "Trending Ebooks About Medical", link: "https://www.pdfdrive.com/category/12" },
    { id: 13, title: "Trending Ebooks About Spirituality", link: "https://www.pdfdrive.com/category/13" },
    { id: 14, title: "Science & Research", link: "https://www.pdfdrive.com/category/14" },
    { id: 15, title: "Politics & Law", link: "https://www.pdfdrive.com/category/15" },
    { id: 16, title: "Biography", link: "https://www.pdfdrive.com/category/16" },
    { id: 17, title: "Children & Youth", link: "https://www.pdfdrive.com/category/17" },
    { id: 18, title: "Environment", link: "https://www.pdfdrive.com/category/18" },
    { id: 19, title: "LifeStyle", link: "https://www.pdfdrive.com/category/19" },

    { id: 112, title: "Most Popular", link: "https://www.pdfdrive.com/category/112" },
    { id: 113, title: "Editors Picks", link: "https://www.pdfdrive.com/category/113" },
  ];

  const openWebpage = (link: string) => {
    window.open(link);
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
      language: "Language",
      logout: "Logout"
    },
    hindi: {
      referAndEarn: "रेफर और कमाएं",
      termsAndConditions: "नियम और शर्तें",
      language: "भाषा",
      logout: "लॉग आउट"
    },
    marathi: {
      referAndEarn: "संदर्भ द्या आणि कमावा",
      termsAndConditions: "अटी आणि अटी",
      language: "भाषा",
      logout: "लॉग आउट"
    },
    gujarati: {
      referAndEarn: "સૂચવો અને કમાવો",
      termsAndConditions: "શરતો અને નિયમો",
      language: "ભાષા",
      logout: "લૉગ આઉટ"
    },
  };

  function capitalizeFirstLetter(str:any) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const strings = languageStrings[selectedLanguage] || languageStrings['english'];

  return (
    <IonPage>
      <Header title="Popular Sites" />
      <Common>
        <IonItem onClick={toggleLinks} style={{position:"sticky",top:"0",zIndex:"1",fontSize:"2em"}}>
          <IonIcon slot="start" icon={book} />
          <IonLabel>CATEGORIES</IonLabel>
          <IonIcon slot="end" icon={showLinks ? chevronUp : chevronDown} />
        </IonItem>
        {showLinks && (
          <IonList>
            {Data2.map((card: any) => (
              <IonItem key={card.id} href={card.link}>
                <IonIcon slot="start" size="large" icon={book} />
                <IonLabel>{card.title}</IonLabel>
                <span>{strings.language}</span>
              </IonItem>
            ))}
          </IonList>
        )}
      </Common>
      <TabBar />
    </IonPage>
  );
};

export default Delete;
