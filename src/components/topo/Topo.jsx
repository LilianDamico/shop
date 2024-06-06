import React from 'react';
import logo from '../../assets/icons/logo.png'
import  './Topo.css';

const Topo = () => {
  return (
    <div className='frame1'>
        <div className='logo'>
            <img src={ logo } alt='logo' />
        </div>
        <div className='title'>
            <h1>Shop - Seu ponto de compras na internet !!</h1>
        </div>
    </div>
  )
}

export default Topo;