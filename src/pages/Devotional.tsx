import { IonActionSheet, IonButton, IonCol, IonContent, IonItem, IonList, IonPage, IonRouterLink, IonRow, IonSearchbar } from '@ionic/react';
import React, { useState } from 'react';
import Header from '../components/Header';

const Devotional: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGod, setSelectedGod] = useState<string>('All');
  const [selectedState, setSelectedState] = useState<string>('All');
  const [selectedCapital, setSelectedCapital] = useState<string>('All');
  const [Details, setDetails] = useState([
    { mantra: "Hanuman Chalisa", god: "Hanuman Ji" },
    { mantra: "Gayatri Mantra", god: "" },
    { mantra: "Shri Ganpati Atharvashirsha", god: "Ganesh Ji" },
    { mantra: "Shri Ramrksha stotra", god: "Shri Ram" },
    { mantra: "Maruti stotra", god: "Hanuman Ji" },
    { mantra: "Madhurashtakam", god: "" },
    { mantra: "Shri Ram Stuti", god: "Shri Ram" },
    { mantra: "Bajrang Baan", god: "Hanuman Ji" },
    { mantra: "Hanuman Ji Aarti", god: "Hanuman Ji" },
    { mantra: "Sankat Mochan Hanumanashtak", god: "Hanuman Ji" },
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
  
  return (
    <IonPage>
        <Header title="Devotional" />
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
            <IonRouterLink href={`/details/${entry.mantra}`}>
              <IonList key={index} lines="full">
                <IonItem>
                  <span slot="start">{entry.mantra}</span>
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
