import { IonIcon, IonLabel, IonTabBar, IonTabButton } from "@ionic/react";
import { ellipse, refreshCircle, square, triangle } from "ionicons/icons";

const TabBar: React.FC = () => {
    return (
        <IonTabBar>
          <IonTabButton tab="tab1" href="/tab1">
            <IonLabel style={{fontSize:"2em"}}>Sites</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonLabel style={{fontSize:"2em"}}>Category</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonLabel style={{fontSize:"2em"}}>Devotional</IonLabel>
          </IonTabButton>
        </IonTabBar>
    )
}
export default TabBar;