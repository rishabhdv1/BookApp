import { IonCol, IonHeader, IonMenuButton, IonRow, IonToolbar } from "@ionic/react";
import { } from "ionicons/icons";

export default function Header(props:any) {

    return (
        <IonHeader>
          <IonToolbar>
            <IonRow className="ion-align-items-center">
                <IonCol size="2">
                    <IonMenuButton style={{fontSize:"2em"}} />
                </IonCol>
                <IonCol size="8" className="ion-text-center" style={{fontSize:"1.8em"}}>
                  <span style={{overflowX:"auto",whiteSpace:"nowrap"}}>
                    {props.title.toUpperCase()}
                  </span>
                </IonCol>
                <IonCol size="2">
                </IonCol>
            </IonRow>
          </IonToolbar>
        </IonHeader>
    )
}