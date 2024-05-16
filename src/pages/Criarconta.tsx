import React, { useState } from 'react';
import { IonPage, IonImg, IonInput } from '@ionic/react';
import { useHistory } from 'react-router-dom'; // Importe o hook useHistory
import './Criarconta.css';

const SignUpPage: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory(); // Obtenha o objeto history usando o hook useHistory

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!firstName || !lastName || !username || !password) {
      setErrorMessage('Por favor, preencha todos os campos.');
    } else {
      console.log('Nome:', firstName);
      console.log('Sobrenome:', lastName);
      console.log('Usuário:', username);
      console.log('Senha:', password);

      setFirstName('');
      setLastName('');
      setUsername('');
      setPassword('');
      setErrorMessage('');
      alert('Conta criada com sucesso!');

      // Navegar para a página Esqueci após criar a conta
      history.push('/Esqueci');
    }
  };

  return (
    <IonPage style={{ backgroundColor: '#7974ff' }}>
      <div className="ion-padding">
        <div className="logo">
          <IonImg src="./resources/icone.png"></IonImg>
        </div>
      </div>
      <div className="inputs">
        <h2 className='inicial'>Criar Conta</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="first-name"></label>
          <input
            placeholder='Nome'
            type="text"
            id="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          /><br />

          <label htmlFor="last-name"></label>
          <input
            placeholder='Sobrenome'
            type="text"
            id="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          /><br />

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

          <button className='criar' type="submit">Criar!</button>
        </form>

        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      </div>
    </IonPage>
  );
};

export default SignUpPage;

