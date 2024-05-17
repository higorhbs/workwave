import React, { useState } from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonButton, IonInput, IonItem, IonLabel } from '@ionic/react';
import { useHistory } from 'react-router-dom'; // Importe o hook useHistory
import './Esqueci.css';

const Esqueci: React.FC = () => {
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const history = useHistory(); // Obtenha o objeto history usando o hook useHistory

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Simulação de envio de e-mail para recuperar a senha
    // Aqui você pode implementar a lógica para enviar um e-mail de recuperação de senha para o endereço fornecido

    if (email) {
      setMensagem(`Um e-mail de recuperação foi enviado para ${email}`);
    } else {
      setMensagem('Por favor, insira um endereço de e-mail válido.');
    }
  };

  const handleClick = () => {
    history.push('/Criarconta');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Esqueci minha senha</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="logo2">
          <img src="./resources/Escudo.png" alt="Logo" className='logo2' />
        </div>
        <div className='subtitulo2'>

          <p>Problemas para fazer o login?</p>
          <p>Digite seu email e enviaremos um link para redefinir sua senha.</p>

        </div>

        <form onSubmit={handleSubmit} className='form-container'>
          <IonItem className="custom-input">
            <IonLabel position="floating" >E-mail</IonLabel>
            <IonInput
              type="email"
              value={email}
              onIonChange={(e) => setEmail(e.detail.value!)}
              required
            />
          </IonItem>

          <IonButton type="submit" expand="block" style={{ marginBottom: '10px' }}>Enviar</IonButton>
        </form>
        {mensagem && <div>{mensagem}</div>}
        <IonButton onClick={handleClick} expand="block" >Criar conta</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Esqueci;
