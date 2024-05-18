import React, { useState } from 'react';
import { IonPage } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Criarconta.css';
import FormInput from '../components/formInput/formInput';

const SignUpPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!username || !password) {
      setErrorMessage('Por favor, preencha todos os campos.');
    } else {
      console.log('Usuário:', username);
      console.log('Senha:', password);
      setUsername('');
      setPassword('');
      setErrorMessage('');

      history.push('/solicitaservico');
    }
  };

  return (
    <IonPage style={{ backgroundColor: '#7974ff' }}>
      <FormInput
        username={username}
        password={password}
        errorMessage={errorMessage}
        setUsername={setUsername}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    </IonPage>
  );
};

export default SignUpPage;
