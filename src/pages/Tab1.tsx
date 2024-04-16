import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonInput, IonItem, IonLabel, IonButton, IonList } from '@ionic/react';
import './Tab1.css';
import React, { useState } from 'react';

const YourComponent: React.FC = () => (
  <IonPage style={{ backgroundColor: 'white' }}>
    <div className="ion-padding">
      <div className="logo">
        <IonImg src="./resources/icone.png"></IonImg>
      </div>
    </div>
    <div className="nomeapp">
      WORKWAVE
      <div className='subtitulo'>
        WORK APP
      </div>
    </div>
    <div className='eslogan'>
      Ondas de facilidade e conveniência ao alcance das suas mãos!
    </div>

  </IonPage>
);



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



export default YourComponent;
