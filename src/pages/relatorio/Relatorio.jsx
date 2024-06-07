import React from 'react';
import Topo from '../../components/topo/Topo';
import Rodape from '../../components/rodape/Rodape';
import './Relatorio.css';

function Relatorio() {
  const compras = [
    {
      produto: 'Produto A',
      dataCompra: '2023-06-01',
      codigoProduto: 12345,
      quantidade: 2,
      precoUnitario: 50.00,
      mensagem: 'Entrega rápida, por favor!'
    },
    {
      produto: 'Produto B',
      dataCompra: '2023-06-02',
      codigoProduto: 67890,
      quantidade: 1,
      precoUnitario: 150.00,
      mensagem: 'Embalagem para presente.'
    }
  ];

  return (
    <div>
      <Topo />
      <section className='pedidos'>
        <h3>Demonstrativo de Compras</h3>
        <table>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Data da Compra</th>
              <th>Código do Produto</th>
              <th>Quantidade</th>
              <th>Preço Unitário</th>
              <th>Preço Total</th>
              <th>Mensagem do Cliente</th>
            </tr>
          </thead>
          <tbody>
            {compras.map((compra, index) => (
              <tr key={index}>
                <td>{compra.produto}</td>
                <td>{compra.dataCompra}</td>
                <td>{compra.codigoProduto}</td>
                <td>{compra.quantidade}</td>
                <td>{compra.precoUnitario.toFixed(2)}</td>
                <td>{(compra.quantidade * compra.precoUnitario).toFixed(2)}</td>
                <td>{compra.mensagem}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <Rodape />
    </div>
  );
}

export default Relatorio;
