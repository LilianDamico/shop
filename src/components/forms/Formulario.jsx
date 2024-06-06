import React from 'react';
import './Formulario.css'

const Formulario = () => {
  return (
    <div className='container'>
      <section className='frame2'>
        <form className='frame3' action="/pagina-processa-dados-do-form" method="post">
          <div>
            <label for="produto">Produto:</label>
            <input type="text" id="produto" />
          </div>
          <div>
            <label for="date">Data da compra:</label>
            <input type="datetime-local" id="date" />
          </div>
          <div>
            <label>Código do produto</label>
            <input type="number" id="number" />
          </div>
          <div>
            <label>Quantidade</label>
            <input type="number" id="number" />
          </div>
          <div>
          <label>Valor unitário</label>
          <input type="number" id="number" />
          </div>
          <div>
          <label>Valor total</label>
          <input type="number" id="number" />
          </div>
          <div>
            <label for="msg">Mensagem:</label>
            <textarea id="msg"></textarea>
          </div>      
        </form>
      </section>       
    </div>
  )
}

export default Formulario;