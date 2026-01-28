import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import './Tab3.css';
import { use, useState } from 'react';
import { UserInfo } from '../interfaces/UserInfo';
import { logOutOutline } from 'ionicons/icons';
import { useHistory } from 'react-router';
import AuthService from '../services/AuthService';
import { getUserInfo } from '../services/GithubServices';
import LoadingSpinner from '../components/LoadingSpinner';


const Tab3: React.FC = () => {

  const [loading, setLoading] = useState(false);

  const [UserInfo, setUserInfo] = useState<UserInfo | null>(null);
const history = useHistory();


  const loadUserInfo = async () => {
    setLoading(true);
    const info = await getUserInfo();
    setUserInfo(info);
    setLoading(false); 
  };

  useIonViewDidEnter(() => {
    loadUserInfo();
  });

const handleLogout = () => {
  AuthService.logout();
  history.replace('/login');
}

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
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
      <img alt = {UserInfo?.name}
      src = {UserInfo?.avatar_url} />
      <IonCardHeader>
        <IonCardTitle>{UserInfo?.name}</IonCardTitle>
        <IonCardSubtitle>{UserInfo?.login}</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>{UserInfo?.bio}</IonCardContent>
    </IonCard>

    <IonButton
      expand="block"
      color="danger"
      onClick={handleLogout}>
        <IonIcon slot="start" icon={logOutOutline}></IonIcon>
      Cerrar Sesión
    </IonButton>
      <LoadingSpinner isOpen={loading} />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;  