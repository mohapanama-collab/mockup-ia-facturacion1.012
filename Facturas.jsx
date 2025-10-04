import React from 'react';
import { Link } from 'react-router-dom';

const facturas = [
  { id: 1, cliente: 'Cliente A', fecha: '2025-09-01', estado: 'Pagada' },
  { id: 2, cliente: 'Cliente B', fecha: '2025-09-10', estado: 'Pendiente' },
  { id: 3, cliente: 'Cliente C', fecha: '2025-09-15', estado: 'Vencida' },
];

export default function Facturas() {
  const colorEstado = estado => {
    if (estado === 'Pagada') return 'text-green-600';
    if (estado === 'Pendiente') return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className='p-8'>
      <h2 className='text-2xl font-bold text-blue-600 mb-4'>Gestión de Facturas</h2>
      <table className='w-full bg-white rounded-xl shadow-md'>
        <thead>
          <tr className='bg-blue-100 text-left'>
            <th className='p-3'>Cliente</th>
            <th className='p-3'>Fecha</th>
            <th className='p-3'>Estado</th>
          </tr>
        </thead>
        <tbody>
          {facturas.map(f => (
            <tr key={f.id} className='border-b'>
              <td className='p-3'>{f.cliente}</td>
              <td className='p-3'>{f.fecha}</td>
              <td className={`p-3 font-semibold ${colorEstado(f.estado)}`}>{f.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className='mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'>Generar factura con IA</button>
      <div className='mt-6'>
        <Link to='/dashboard' className='text-blue-600 underline'>Volver al Dashboard</Link>
      </div>
    </div>
  );
}
