import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil de usuario</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Perfil de usuario</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <img alt="Silhouette of mountains" src="https://media.licdn.com/dms/image/v2/D4E03AQG9VhkDOaWMcg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1708748312886?e=2147483647&v=beta&t=oQD5Z2LqXthOwa3QJkvlXWsGRXmSv9KilXBBkSHkLTA" />
          <IonCardHeader>
            <IonCardTitle>Daniel Feijóo</IonCardTitle>
            <IonCardSubtitle>Daniel-Feijoo</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>Soy un desarrollador de software apasionado</IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
