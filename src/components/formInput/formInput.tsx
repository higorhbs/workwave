import { Link } from 'react-router-dom';
import './formInput.css';
import { IonImg } from '@ionic/react';

const FormInput: React.FC = () => {
  return (
    <div className='container'>
      <div className='formImg'>
        <IonImg src="./resources/icone.png"></IonImg>
      </div>

      <h2 className='title'>WORKWAVE</h2>

      <form action="" className='form'>
        <input
          placeholder='Nome de Usuário'
          type="text"
          id="username"
        />

        <input
          placeholder='Senha'
          type="password"
          id="password"
        />

        <Link to="/Esqueci" className='btn1'>Esqueci minha senha</Link>
        <button className='criar' type="submit">Entrar</button>        
      </form>
    </div>
  );
};

export default FormInput;
