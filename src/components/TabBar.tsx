import { IonLabel, IonTabBar, IonTabButton } from "@ionic/react";
import { } from "ionicons/icons";

const TabBar: React.FC = () => {
    return (
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonLabel style={{fontSize:"2em"}}>Popular Sites</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonLabel style={{fontSize:"2em"}}>Devotional</IonLabel>
          </IonTabButton>
        </IonTabBar>
    )
}
export default TabBar;