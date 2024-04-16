import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg } from '@ionic/react';
import './Tab1.css';

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

export default YourComponent;
