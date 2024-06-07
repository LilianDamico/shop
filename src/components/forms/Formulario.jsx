import React from 'react';
import './Formulario.css';

const Formulario = () => {
  return (
    <div className='container'>
      <section className='frame2'>
        <form className='frame3' action="/pagina-processa-dados-do-form" method="post">
          <div>
            <label htmlFor="produto">Produto:</label>
            <input type="text" id="produto" />
          </div>
          <div>
            <label htmlFor="date">Data da compra:</label>
            <input type="datetime-local" id="date" />
          </div>
          <div>
            <label htmlFor="codigoProduto">Código do produto:</label>
            <input type="number" id="codigoProduto" />
          </div>
          <div>
            <label htmlFor="quantidade">Quantidade:</label>
            <input type="number" id="quantidade" />
          </div>
          <div>
            <label htmlFor="valorUnitario">Valor unitário:</label>
            <input type="number" id="valorUnitario" />
          </div>
          <div>
            <label htmlFor="valorTotal">Valor total:</label>
            <input type="number" id="valorTotal" />
          </div>
          <div>
            <label htmlFor="msg">Mensagem:</label>
            <textarea id="msg"></textarea>
          </div> 
          <div className='button-container'>
            <button className='custom-button green' type='submit'>Enviar</button>
            <button className='custom-button blue' type='button'>Consultar</button>
            <button className='custom-button yellow' type='button'>Editar</button>
            <button className='custom-button red' type='button'>Excluir</button>
          </div>    
        </form>
      </section>       
    </div>
  )
}

export default Formulario;
