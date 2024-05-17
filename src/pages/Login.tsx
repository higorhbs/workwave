import React, { useState } from 'react';
import { IonPage, IonImg, IonInput } from '@ionic/react';
import { useHistory } from 'react-router-dom'; // Importe o hook useHistory
import './Criarconta.css';
import FormInput from '../components/formInput/formInput';

const SignUpPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory(); // Obtenha o objeto history usando o hook useHistory

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!username || !password) {
      setErrorMessage('Por favor, preencha todos os campos.');
    } else {
      console.log('Usuário:', username);
      console.log('Senha:', password);
      ;
      setUsername('');
      setPassword('');

      history.push('/Esqueci');
    }
  };

  return (
    <IonPage style={{ backgroundColor: '#7974ff' }}>

      {/* <div className="ion-padding">
        <div className="logo">
          <IonImg src="./resources/icone.png"></IonImg>
        </div>
      </div>
      <div className="nomeapp">
        WORKWAVE
      </div>
      <div className="inputs">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username"></label>
          <input
            placeholder='Nome de Usuário'
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          /><br />

          <label htmlFor="password"></label>
          <input
            placeholder='Senha'
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          /><br />

          <button className='criar' type="submit">Esqueci minha senha</button>
          <button className='criar' type="submit">Entrar!</button>
        </form>

        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      </div> */}

      <FormInput />
    </IonPage>
  );
};

export default SignUpPage;

