import React, { useState } from 'react';
import { 
  IonInput, IonSelect, IonSelectOption, IonCheckbox, IonButton, IonItem, IonLabel, 
  IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar 
} from '@ionic/react';
import './solicitaservico.css';

const ServiceRequestScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [descricao, setDescription] = useState('');
  const [urgencia, setUrgency] = useState('normal');
  const [tiposServicos, setAdditionalServices] = useState<string[]>([]);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const request = {
      serviceType,
      descricao,
      urgencia,
      tiposServicos,
    };

    console.log('Request submitted:', request);

    // API VAI AQUI
  };

  const handleUrgencyChange = (event: CustomEvent) => {
    setUrgency(event.detail.value);
  };

  const handleAdditionalServiceChange = (event: CustomEvent) => {
    const { checked, value } = event.detail;
    setAdditionalServices((prevServices) =>
      checked ? [...prevServices, value] : prevServices.filter((service) => service !== value)
    );
  };

  const tipoServicos = [
    { name: 'Remoto', value: 'remoto' },
    { name: 'Presencial', value: 'presencial' },
  ];

  return (
    <>
      <IonMenu side="start" contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">This is the menu content.</IonContent>
      </IonMenu>

      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Solicitar Serviço</IonTitle>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <form onSubmit={handleSubmit}>
            <div className='items'>

            <div className='form1'>
            <IonItem>
              <IonInput 
                type="text"
                placeholder="Tipo de Profissional:"
                value={name}
                onIonChange={(event) => setName(event.detail.value!)}
              />
            </IonItem>
            <IonItem>
              <IonInput
                type="text"
                placeholder="Descrição do serviço:"
                value={descricao}
                onIonChange={(event) => setDescription(event.detail.value!)}
              />
            </IonItem>
            
            <IonItem>
              <IonLabel>Urgência:</IonLabel>
              <IonSelect value={urgencia} placeholder="Selecione a urgência" onIonChange={handleUrgencyChange}>
                <IonSelectOption value="normal">Normal</IonSelectOption>
                <IonSelectOption value="urgent">Urgente</IonSelectOption>
                <IonSelectOption value="emergency">Emergência</IonSelectOption>
              </IonSelect>
            </IonItem>
  
            <IonItem className='caixaservico'>
              <IonLabel>Tipo de Serviço:</IonLabel>
              {tipoServicos.map((option) => (
                <IonItem className="custom-input-wrapper" key={option.value} lines="none">
                  <IonLabel>{option.name}</IonLabel>
                  <IonCheckbox 
                    value={option.value}
                    checked={tiposServicos.includes(option.value)}
                    onIonChange={handleAdditionalServiceChange}
                  />
                </IonItem>
              ))}
            </IonItem>
            </div>
            <IonLabel>AQUI FICARÁ O MAPA</IonLabel> <br />
            <IonButton className='criar' type="submit">Solicitar</IonButton>
            </div>
            
          </form>
        </IonContent>
      </IonPage>
    </>
  );
};

export default ServiceRequestScreen;
