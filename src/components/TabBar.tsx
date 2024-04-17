import React, { useState, useEffect } from 'react';
import { IonLabel, IonTabBar, IonTabButton } from "@ionic/react";
import { } from "ionicons/icons";

const TabBar: React.FC = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<string>(() => {
        const storedLanguage = localStorage.getItem("lang");
        return storedLanguage ? storedLanguage : "english";
    });

    useEffect(() => {
        localStorage.setItem("lang", selectedLanguage);
    }, [selectedLanguage]);

    const languageStrings: { [key: string]: any } = {
        english: {
            websites: "Websites",
            devotional: "Devotional"
        },
        // Add strings for other supported languages here
        hindi: {
            websites: "वेबसाइट",
            devotional: "धार्मिक"
        },
        // Add strings for other languages here
    };

    const websitesLabel = languageStrings[selectedLanguage].websites;
    const devotionalLabel = languageStrings[selectedLanguage].devotional;

    return (
        <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/tab1">
                <IonLabel style={{fontSize:"2em"}}>{websitesLabel}</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2">
                <IonLabel style={{fontSize:"2em"}}>{devotionalLabel}</IonLabel>
            </IonTabButton>
        </IonTabBar>
    )
}
export default TabBar;
