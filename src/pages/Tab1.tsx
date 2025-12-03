import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList } from '@ionic/react';
import './Tab1.css';
import RepoItem from '../components/RepoItem';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <RepoItem
          name="android-project"
          imageUrl="https://cdn.worldvectorlogo.com/logos/android-6.svg"
          />
          <RepoItem
          name="ios-project"
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
          />
          <RepoItem
          name="ionic-project"
          imageUrl="https://cdn.iconscout.com/icon/free/png-256/free-ionic-logo-icon-svg-download-png-2945013.png"
          />
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
