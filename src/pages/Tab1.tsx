import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar, useIonViewDidEnter, useIonAlert, useIonToast } from '@ionic/react';
import { useState } from 'react';

import './Tab1.css';
import RepoItem from '../components/RepoItem';
import { RepositoryItem } from '../interfaces/RepositoryItem';
import { fetchRepositories, updateRepository, deleteRepository } from '../services/GithubServices';
import LoadingSpinner from '../components/LoadingSpinner';

const Tab1: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState<RepositoryItem[]>([]);
  const [presentAlert] = useIonAlert();
  const [presentToast] = useIonToast();

  const loadRepos = async () => {
    setLoading(true);
    const reposData = await fetchRepositories();
    setRepos(reposData);
    setLoading(false);
  };

  useIonViewDidEnter(() => {
    console.log ("IonViewDidEnter: Cargando repositorios...");  
    loadRepos();
  });

  const handleEdit = (repo: RepositoryItem) => {
    presentAlert({
      header: 'Editar Repositorio',
      message: `Editar: ${repo.name}`,
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Nombre del repositorio',
          value: repo.name,
        },
        {
          name: 'description',
          type: 'textarea',
          placeholder: 'Descripción',
          value: repo.description || '',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Guardar',
          handler: async (data) => {
            try {
              await updateRepository(repo.name, {
                name: data.name,
                description: data.description,
                owner: repo.owner,
              });
              
              presentToast({
                message: 'Repositorio actualizado exitosamente',
                duration: 2000,
                color: 'success',
              });
              
              loadRepos();
            } catch (error) {
              presentToast({
                message: 'Error al actualizar el repositorio',
                duration: 2000,
                color: 'danger',
              });
            }
          },
        },
      ],
    });
  };

  const handleDelete = (repo: RepositoryItem) => {
    presentAlert({
      header: 'Confirmar eliminación',
      message: `¿Estás seguro de que deseas eliminar el repositorio "${repo.name}"?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: async () => {
            try {
              if (repo.owner) {
                await deleteRepository(repo.owner, repo.name);
                
                presentToast({
                  message: 'Repositorio eliminado exitosamente',
                  duration: 2000,
                  color: 'success',
                });
                
                loadRepos();
              }
            } catch (error) {
              presentToast({
                message: 'Error al eliminar el repositorio',
                duration: 2000,
                color: 'danger',
              });
            }
          },
        },
      ],
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Repositorios</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Repositorios</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          {repos.map((repo, index) => (
            <RepoItem 
              key={index}
              repo={repo}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </IonList>
        <LoadingSpinner isOpen={loading} />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;