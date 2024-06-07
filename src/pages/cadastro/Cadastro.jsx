import React from 'react';
import Topo from '../../components/topo/Topo';
import Rodape from '../../components/rodape/Rodape';
import Formulario from '../../components/forms/Formulario';
import './Cadastro.css';

function Cadastro() {
  return (
    <div>
      <Topo />
      <Formulario />
      <Rodape />
    </div>
  )
}

export default Cadastro;