import { IonHeader, IonPage, IonTitle, IonToolbar, IonContent, IonInput, IonItem, IonLabel, IonButton, IonList } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import React, { useState } from 'react';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Modelos DWTT As5</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 23</IonTitle>
          </IonToolbar>
        </IonHeader>
        <LoginPage /> {/* Renderize o componente LoginPage aqui */}
      </IonContent>
    </IonPage>
  );
};

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    // Lógica de login aqui
    console.log('Usuário:', username, 'Senha:', password);
    // Você pode adicionar aqui a lógica de autenticação, navegação para a próxima página, etc.
  };

  return (
    <IonContent>
      <IonList>
        <IonItem>
          <IonLabel position="floating">Nome de usuário</IonLabel>
          <IonInput type="text" value={username} onIonChange={e => setUsername(e.detail.value!)}></IonInput>
        </IonItem>
        
        <IonItem>
          <IonLabel position="floating">Senha</IonLabel>
          <IonInput type="password" value={password} onIonChange={e => setPassword(e.detail.value!)}></IonInput>
        </IonItem>
      </IonList>
      
      <IonButton expand="block" onClick={handleLogin}>Login</IonButton>
    </IonContent>
  );
};

export default LoginPage;
