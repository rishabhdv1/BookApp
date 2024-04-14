import { IonCol, IonContent, IonHeader, IonItem, IonList, IonMenuButton, IonPage, IonRow, IonToggle, ToggleCustomEvent } from "@ionic/react";
import { } from "ionicons/icons";
import { useEffect, useState } from "react";

export default function Header(props:any) {
    const [themeToggle, setThemeToggle] = useState(false);

    // Listen for the toggle check/uncheck to toggle the dark theme
  const toggleChange = (ev: ToggleCustomEvent) => {
    toggleDarkTheme(ev.detail.checked);
  };

  // Add or remove the "dark" class on the document body
  const toggleDarkTheme = (shouldAdd: boolean) => {
    document.body.classList.toggle('dark', shouldAdd);
  };

  // Check/uncheck the toggle and update the theme based on isDark
  const initializeDarkTheme = (isDark: boolean) => {
    setThemeToggle(isDark);
    toggleDarkTheme(isDark);
  };

  useEffect(() => {
    // Use matchMedia to check the user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    // Initialize the dark theme based on the initial
    // value of the prefers-color-scheme media query
    initializeDarkTheme(prefersDark.matches);

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addEventListener('change', (mediaQuery) => initializeDarkTheme(mediaQuery.matches));
  }, []);

    return (
        <IonHeader style={{background:"blue",color:"#FFF"}}>
            <IonRow className="ion-align-items-center">
                <IonCol size="2">
                    <IonMenuButton style={{fontSize:"2em"}} />
                </IonCol>
                <IonCol size="8" className="ion-text-center" style={{fontSize:"1.8em"}}>
                    {props.title.toUpperCase()}
                </IonCol>
                <IonCol size="2">
                    <IonToggle checked={themeToggle} onIonChange={toggleChange} justify="space-between"></IonToggle>
                </IonCol>
            </IonRow>
        </IonHeader>
    )
}