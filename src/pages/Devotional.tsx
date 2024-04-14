import { IonCol, IonContent, IonHeader, IonIcon, IonItem, IonList, IonMenuButton, IonPage, IonRouterLink, IonRow, IonSearchbar, IonSegment, IonSegmentButton, IonSelect, IonSelectOption, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { personCircle } from 'ionicons/icons';
import TabBar from '../components/TabBar';
import Header from '../components/Header';

const Devotional: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedState, setSelectedState] = useState<string>('All');
  const [selectedCapital, setSelectedCapital] = useState<string>('All');
  const [Details, setDetails] = useState([
    { mantra: "Hanuman Chalisa" },
    { mantra: "Gayatri Mantra" },
    { mantra: "Shri Ganpati Atharvashirsha" },
    { mantra: "Shri Ramrksha stotra" },
    { mantra: "Maruti stotra" },
    { mantra: "Madhurashtakam" },
    { mantra: "Shri Ram Stuti" },
    { mantra: "Bajrang Baan" },
    { mantra: "Hanuman Ji Aarti" },
  ]);

  const stateCities: { [key: string]: string[] } = {
    "Hanuman Ji": [],
    "Ganesh Ji": []
  };

  const handleStateChange = (e: CustomEvent) => {
    setSelectedState(e.detail.value);
    setSelectedCapital('All');
    
  };

  const handleCityChange = (e: CustomEvent) => {
    setSelectedCapital(e.detail.value);
    console.log("City >>>",e.detail.value);
    
  };

  const handleSearchTextChange = (e: CustomEvent) => {
    setSearchText(e.detail.value);
  };

  const filteredCities = selectedState !== 'All' ? stateCities[selectedState].filter(capital =>
    capital.toLowerCase().includes(searchText.toLowerCase())
  ) : Object.values(stateCities).flat().filter(capital =>
    capital.toLowerCase().includes(searchText.toLowerCase())
  );
  /* const filteredDetails = Details.filter(entry =>
    entry.state.toLowerCase().includes(searchText.toLowerCase())
  ); */
  const filteredDetails = Details.filter(entry => {
    const stateMatch = selectedState === 'All' || entry.mantra.toLowerCase() === selectedState.toLowerCase();
    const capitalMatch = selectedCapital === 'All' || entry.capital.toLowerCase() === selectedCapital.toLowerCase();
    const searchTextMatch = entry.mantra.toLowerCase().includes(searchText.toLowerCase());
  
    return stateMatch && capitalMatch && searchTextMatch;
  }).sort((a, b) => a.mantra.localeCompare(b.mantra));
  
  return (
    <IonPage>
        <Header title="Devotional" />
      <IonContent>
        <IonSearchbar value={searchText} onIonInput={handleSearchTextChange} />
        <div style={{position:"sticky",top:"0",zIndex:"10",backgroundColor:"#333"}}>
          {/* <IonRow>
            <IonCol size="6">
              <IonSelect fill="outline" value={selectedState} onIonChange={handleStateChange} interface="popover" placeholder="Select State">
                <IonSelectOption value="All">All</IonSelectOption>
                  {Object.keys(stateCities).map((state, index) => (
                    <IonSelectOption key={index} value={state}>{state}</IonSelectOption>
                  ))}
              </IonSelect>
            </IonCol>
            <IonCol size="6">
              <IonSelect fill="outline" value={selectedCapital} onIonChange={handleCityChange} interface="popover" placeholder="Select City">
                <IonSelectOption value="All">All</IonSelectOption>
                  {selectedState !== 'All' && stateCities[selectedState].map((city, index) => (
                    <IonSelectOption key={index} value={city}>{city}</IonSelectOption>
                  ))}
                  {selectedState === 'All' && filteredCities.map((city, index) => (
                    <IonSelectOption key={index} value={city}>{city}</IonSelectOption>
                  ))}
              </IonSelect>
            </IonCol>
          </IonRow> */}
        </div>
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
