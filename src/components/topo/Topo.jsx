import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.png';
import './Topo.css';

const Topo = () => {
  return (
    <div className='frame1'>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='title'>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/cliente">Cadastre-se</Link>
          <Link to="/cadastro">Carrinho de Compras</Link>
          <Link to="/relatorio">Seus Pedidos</Link>
        </nav>
      </div>
    </div>
  )
}

export default Topo;
