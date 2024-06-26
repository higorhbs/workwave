import React from 'react';
import { IonPage, IonImg, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Home.css';

const YourComponent: React.FC = () => {
  const history = useHistory();

  const handleClickEntrar = () => {
    history.push('/login'); // Redireciona para a tela de login
  };



  return (
    <IonPage style={{ backgroundColor: 'white' }}>
      <div className="ion-padding">
        <div className="logo">
          <IonImg src="./resources/icone.png" />
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

      <IonButton className='customButton' type="submit" onClick={handleClickEntrar}>Entrar</IonButton>
      
    </IonPage>
  );
};

export default YourComponent;
