import React from 'react';
import { Link } from 'react-router-dom';
import './formInput.css';
import { IonImg } from '@ionic/react';

interface FormInputProps {
  username: string;
  password: string;
  errorMessage: string;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
  handleSubmit: (event: React.FormEvent) => void;
}


const FormInput: React.FC<FormInputProps> = ({ username, password, errorMessage, setUsername, setPassword, handleSubmit }) => {


  return (
    <div className='container'>
      <div className='formImg'>
        <IonImg src="./resources/icone.png"></IonImg>
      </div>

      <h2 className='title'>WORKWAVE</h2>

      <form onSubmit={handleSubmit} className='form'>
        <input
          placeholder='Nome de Usuário'
          type="text"
          id="username"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          placeholder='Senha'
          type="password"
          id="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        {errorMessage && <p className="error">{errorMessage}</p>}

        <Link to="/Esqueci" className='btn1'>Esqueci minha senha</Link>

        <button className='criar' type="submit">Entrar</button>
        
        <Link to="/Criarconta">
          <button className='criar' type="button">Criar conta</button>
        </Link>
      </form>
    </div>
  );
};

export default FormInput;
