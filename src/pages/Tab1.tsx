import { IonCard, IonCol, IonContent, IonIcon, IonItem, IonLabel, IonList, IonPage, IonRow } from '@ionic/react';
import './Tab1.css';
import { book } from 'ionicons/icons';
import Header from '../components/Header';

const Tab1: React.FC = () => {
  const Data = [
    { id: 1, title: "Free Books", description: "Description 1", link: "https://pdfdrive.com/category/113" },
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

  const openWebpage = (link: string) => {
    window.open(link, '_blank');
  };


  return (
    <IonPage>
      <Header title="Popular Sites" />
      <IonContent>
        <IonRow>
          {Data.map((card:any) => (
            <IonCol size="6">
              <IonCard className="ion-padding" href={card.link}>
                <IonRow className="ion-text-center">
                  <IonCol size="12">
                    <IonIcon size="large" icon={book} />
                  </IonCol>
                  <IonCol size="12">
                    <IonLabel>{card.title}</IonLabel>
                  </IonCol>
                </IonRow>
              </IonCard>
            </IonCol>
          ))}
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
