import React from 'react';
import { IonPage, IonImg, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom'; // Importe o useHistory hook
import './Home.css';

const YourComponent: React.FC = () => {
  const history = useHistory(); // Inicialize o useHistory hook

  const handleClick = () => {
    history.push('/Esqueci');
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
      <div className='eslogan'>
        Ondas de facilidade e conveniência <br></br>ao alcance das suas mãos!
      </div>
      <IonButton className='criar' type="submit" onClick={handleClick}>Entrar</IonButton>
      <IonButton className='criar' type="submit" onClick={handleClick}>Criar conta</IonButton>
    </IonPage>
  );
};

export default YourComponent;
