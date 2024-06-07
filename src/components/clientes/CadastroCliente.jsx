import React from 'react';
import './CadastroCliente.css';

const CadastroCliente = () => {
  return (
    <div className='container1'>
      <form className='form'>
        <h2>Cadastro de Cliente</h2>
        <div className='input-group'>
          <label htmlFor='nome'>Nome:</label>
          <input type='text' id='nome' />
        </div>
        <div className='input-group'>
          <label htmlFor='cpf'>CPF:</label>
          <input type='text' id='nome' />
        </div>
        <div className='input-group'>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' />
        </div>
        <div className='input-group'>
          <label htmlFor='telefone'>Telefone:</label>
          <input type='tel' id='telefone' />
        </div>
        <div className='input-group'>
          <label htmlFor='endereco'>Endereço:</label>
          <input type='text' id='endereco' />
        </div>
        <button type='submit'>Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastroCliente;
