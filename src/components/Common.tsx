import { useRef, useState } from 'react';
import { refreshOutline  } from 'ionicons/icons'; // Import
import { IonContent, IonLoading, IonRefresher, IonRefresherContent } from '@ionic/react';

interface ChildComponentProps {
    children: React.ReactNode;
}

const Common: React.FC<ChildComponentProps> = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [showLoading, setShowLoading] = useState(false);
    const ionRefresher = useRef<HTMLIonRefresherElement>(null);

    const doRefresh = async (event: CustomEvent) => {
        try {
          setShowLoading(true);
          window.location.reload();
        } catch (error) {
          console.error('Error during refresh:', error); // Make sure to complete the refresh even in case of an error
        }
    };
  return (
    <>
        <IonContent style={{backgroundColor:"#FFFFFF"}}  fullscreen ref={(ionContent) => ionRefresher.current?.addEventListener('ionRefresh', doRefresh)}>
            <IonRefresher slot="fixed" ref={ionRefresher}>
                <IonRefresherContent />
            </IonRefresher>
            <IonLoading
                isOpen={showLoading}
                message={'Refreshing...'}
                duration={0} // Use 0 duration to keep the loader until manually closed
            />
            {children}
        </IonContent>
    </>
  );
};

export default Common;
