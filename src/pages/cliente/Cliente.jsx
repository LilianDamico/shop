import React from 'react';
import Topo from '../../components/topo/Topo';
import CadastroCliente from '../../components/clientes/CadastroCliente';
import Rodape from '../../components/rodape/Rodape'

function Cliente() {
  return (
    <div>
        <Topo />
        <CadastroCliente />
        <Rodape />
    </div>
  )
}

export default Cliente