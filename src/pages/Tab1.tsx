import React, { useState } from 'react';
import { IonContent, IonPage, IonImg, IonInput, IonItem, IonLabel, IonButton, IonList } from '@ionic/react';
import './Tab1.css';

const YourComponent: React.FC = () => {
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [showEslogan, setShowEslogan] = useState(true);

  const handleClick = () => {
    setShowEslogan(false);
    setShowLoginPage(true);
  };

  return (
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
      {showEslogan && (
        <div className='eslogan'>
          Ondas de facilidade e conveniência <br></br>ao alcance das suas mãos!
        </div>
      )}
      {!showLoginPage && (
        <IonButton className='criar' type="submit" onClick={handleClick}>Entrar</IonButton>
      )}
      {showLoginPage && <LoginPage setShowLoginPage={setShowLoginPage} />}
    </IonPage>
  );
};

const LoginPage: React.FC<{ setShowLoginPage: (show: boolean) => void }> = ({ setShowLoginPage }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de login aqui
    console.log('Usuário:', username, 'Senha:', password);
    // Você pode adicionar aqui a lógica de autenticação, navegação para a próxima página, etc.
    setShowLoginPage(false); // Oculta a página de login após o login
  };

  return (
    <IonContent className='loginuser'>
      <div className="botlogin">
        <IonList>
          <IonItem>
            <IonLabel className='caixa' position="floating" >Nome de usuário</IonLabel>
            <IonInput type="text" value={username} onIonChange={e => setUsername(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel className='caixa' position="floating">Senha</IonLabel>
            <IonInput type="password" value={password} onIonChange={e => setPassword(e.detail.value!)}></IonInput>
          </IonItem>
        </IonList>
      </div>
      <div className="botlogin">
        <IonButton className='login' expand="block" onClick={handleLogin}>Login</IonButton>
        <IonButton className='criar' type="submit">Criar conta</IonButton>
      </div>
    </IonContent>
  );
};

export default YourComponent;
