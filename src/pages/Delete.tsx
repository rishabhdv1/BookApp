import { IonCard, IonCol, IonIcon, IonItem, IonLabel, IonList, IonPage, IonRow } from '@ionic/react';
import { book } from 'ionicons/icons';
import Header from '../components/Header';
import TabBar from '../components/TabBar';
import Common from '../components/Common';
import { useState, useEffect } from 'react';

const Delete: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("english");
  const storedLanguage = localStorage.getItem("lang");

  useEffect(() => {
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
    }
  }, []);

  const Data = [
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
    // Add other items here...
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

  return (
    <IonPage>
      <Header title="Popular Sites" />
      <Common>
        <IonList>
        {Data.map((item: any) => (
            <IonItem key={item.id} href={item.link}>
            <IonIcon slot="start" size="large" icon={book} />
            <IonLabel>{item.titles[selectedLanguage]}</IonLabel>
            </IonItem>
        ))}
        </IonList>
      </Common>
      <TabBar />
    </IonPage>
  );
};

export default Delete;
