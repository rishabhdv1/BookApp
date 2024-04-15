import { IonActionSheet, IonButton, IonCol, IonContent, IonIcon, IonItem, IonList, IonPage, IonRouterLink, IonRow, IonSearchbar, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import TabBar from '../components/TabBar';
import Common from '../components/Common';
import { heart, heartOutline } from 'ionicons/icons';

const Devotional: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [selectedGod, setSelectedGod] = useState<string>('All');
  const [Details, setDetails] = useState([
    { id: 1, mantra: "Hanuman Chalisa", god: "Hanuman Ji" },
    { id: 2, mantra: "Gayatri Mantra", god: "" },
    { id: 3, mantra: "Shri Ganpati Atharvashirsha", god: "Ganesh Ji" },
    { id: 4, mantra: "Shri Ramrksha stotra", god: "Shri Ram" },
    { id: 5, mantra: "Maruti stotra", god: "Hanuman Ji" },
    { id: 6, mantra: "Madhurashtakam", god: "" },
    { id: 7, mantra: "Shri Ram Stuti", god: "Shri Ram" },
    { id: 8, mantra: "Bajrang Baan", god: "Hanuman Ji" },
    { id: 9, mantra: "Hanuman Ji Aarti", god: "Hanuman Ji" },
    { id: 10, mantra: "Sankat Mochan Hanumanashtak", god: "Hanuman Ji" },
  ]);

  const handleSearchTextChange = (e: CustomEvent) => {
    setSearchText(e.detail.value);
  };
  const handleGodSelection = (god: string) => {
    setSelectedGod(god);
    setIsOpen(false);
  };

  const filteredDetails = Details.filter(entry => {
    const godMatch = selectedGod === 'All' || entry.god === selectedGod;
    const searchTextMatch = entry.mantra.toLowerCase().includes(searchText.toLowerCase());
  
    return godMatch && searchTextMatch;
  }).sort((a, b) => a.mantra.localeCompare(b.mantra));
  

  // Load favorites from local storage when component mounts
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const saveFavoritesToLocalStorage = (favorites: string[]) => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  const toggleFavorite = (id: number) => {
    setFavorites(prevFavorites => {
      const isFavorite = prevFavorites.includes(id.toString());
      if (isFavorite) {
        const updatedFavorites = prevFavorites.filter(itemId => itemId !== id.toString());
        saveFavoritesToLocalStorage(updatedFavorites);
        return updatedFavorites;
      } else {
        const updatedFavorites = [...prevFavorites, id.toString()];
        saveFavoritesToLocalStorage(updatedFavorites);
        return updatedFavorites;
      }
    });
  };

  const isFavorite = (id: number) => {
    return favorites.includes(id.toString());
  };

  return (
    <IonPage>
      <Header title="Devotional" />
      <Common>
        <IonList style={{position:"sticky",top:"0",zIndex:"1"}}>
          <IonRow className="ion-align-items-center">
            <IonCol size="8">
              <IonSearchbar value={searchText} onIonInput={handleSearchTextChange} />
            </IonCol>
            <IonCol size="4">
              <IonButton expand="block" color="light" onClick={() => setIsOpen(true)}>
                <span style={{padding:"6px"}}>
                  {selectedGod !== 'All' ? `${selectedGod}` : 'All'}
                </span>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonList>
        <IonActionSheet
          isOpen={isOpen}
          buttons={[
            {
              text: 'All',
              handler: () => handleGodSelection('All')
            },
            {
              text: 'Ganesh Ji',
              handler: () => handleGodSelection('Ganesh Ji')
            },
            {
              text: 'Shri Ram',
              handler: () => handleGodSelection('Shri Ram')
            },
            /* {
              text: 'Shri Vishnu Ji *'
            }, */
            {
              text: 'Hanuman Ji',
              handler: () => handleGodSelection('Hanuman Ji')
            },
            /* {
              text: 'Shiv JI *'
            },
            {
              text: 'Laxmi Ji *'
            },
            {
              text: 'Shri Amba (Durga) Mata *'
            },
            {
              text: 'Shri Krishna *'
            },
            {
              text: 'Shri Swaminarayana *'
            },
            {
              text: 'Shri Gayatri Ji *'
            },
            {
              text: 'Shri Kaali Mata *'
            },
            {
              text: 'Shri Ganga Mata *'
            },
            {
              text: 'Shri Saraswati Ji *'
            },
            {
              text: 'Shri Santoshi Maa *'
            },
            {
              text: 'Shri SatyaNarayan JI *'
            },
            {
              text: 'Shri Shani Dev *'
            },
            {
              text: 'Shri Bhairav Ji *'
            }, */
            
          ]}
          onDidDismiss={() => setIsOpen(false)}
        ></IonActionSheet>
        <IonList>
          {filteredDetails.map((entry: any, index: any) => (
            <IonItem key={entry.id}>
              <IonRouterLink href={`/details/${entry.mantra}`}>
                <IonList key={index} lines="none">
                  <IonItem>
                    <span slot="start">{entry.mantra}</span>
                  </IonItem>
                </IonList>
              </IonRouterLink>
              <IonIcon slot="end" onClick={() => toggleFavorite(entry.id)} icon={isFavorite(entry.id) ? heart : heartOutline} color={isFavorite(entry.id) ? 'danger' : 'medium'} />
            </IonItem>
          ))}
        </IonList>
      </Common>
      <TabBar />
    </IonPage>
  );
};

export default Devotional;
