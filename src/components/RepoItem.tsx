import {IonItem, IonLabel, IonThumbnail, IonItemSliding, IonItemOptions, IonItemOption, IonIcon} from '@ionic/react'
import { createOutline, trashOutline } from 'ionicons/icons';
import './RepoItem.css';
import { RepositoryItem } from '../interfaces/RepositoryItem';

interface RepoItemProps {
  repo: RepositoryItem;
  onEdit: (repo: RepositoryItem) => void;
  onDelete: (repo: RepositoryItem) => void;
}

const RepoItem: React.FC<RepoItemProps> = ({ repo, onEdit, onDelete }) => {
  return ( 
    <IonItemSliding>
      <IonItem>
        <IonThumbnail slot="start"> 
          <img src={repo.imageUrl || "https://ionicframework.com/docs/demos/api/list/avatar-finn.png"} alt={repo.name}/>
        </IonThumbnail>
        <IonLabel> 
          <h2> {repo.name} </h2>
          <p> {repo.description} </p>
          <p> Propietario: {repo.owner} </p>
          <p> Lenguaje: {repo.language} </p>
        </IonLabel>
      </IonItem>

      <IonItemOptions side="end">
        <IonItemOption color="primary" onClick={() => onEdit(repo)} expandable>
          <IonIcon slot="icon-only" icon={createOutline} style={{ fontSize: '24px' }} />
        </IonItemOption>
        <IonItemOption color="danger" onClick={() => onDelete(repo)} expandable>
          <IonIcon slot="icon-only" icon={trashOutline} style={{ fontSize: '24px' }} />
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};

export default RepoItem;