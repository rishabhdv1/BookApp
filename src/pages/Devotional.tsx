import { IonActionSheet, IonButton, IonCol, IonContent, IonItem, IonList, IonPage, IonRouterLink, IonRow, IonSearchbar } from '@ionic/react';
import React, { useState } from 'react';
import Header from '../components/Header';
import TabBar from '../components/TabBar';
import Common from '../components/Common';

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
            <IonRouterLink href={`/details/${entry.mantra}`}>
              <IonList key={index} lines="full">
                <IonItem>
                  <span slot="start">{entry.mantra}</span>
                </IonItem>
              </IonList>
            </IonRouterLink>
          ))}
        </IonList>
      </Common>
      <TabBar />
    </IonPage>
  );
};

export default Devotional;
