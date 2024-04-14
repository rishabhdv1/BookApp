import { IonCol, IonContent, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import Header from '../components/Header';

const Login: React.FC = () => {
  return (
    <IonPage>
      <Header title="Login" />
      <IonContent>
        <IonRow>
            <IonCol></IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Login;
