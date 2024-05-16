import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Importe o hook useHistory
import './Criarconta.css';

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
    history.push('/Esqueci');
  };

  return (
    <div>
      <h2 className='Inicial'>Esqueci Minha Senha</h2>
      <p>Problemas para fazer o login?</p>
      <p>Digite seu email e enviaremos um link para redefinir sua senha.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Enviar</button>
      </form>
      {mensagem && <div>{mensagem}</div>}
    </div>
  );
};

export default Esqueci;
