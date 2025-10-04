import React from 'react';
import { Link } from 'react-router-dom';

export default function Configuracion() {
  return (
    <div className='p-8'>
      <h2 className='text-2xl font-bold text-blue-600 mb-4'>Configuración</h2>
      <div className='bg-white rounded-xl shadow-md p-6 space-y-4'>
        <div>
          <h3 className='font-semibold mb-2'>Datos de la Empresa</h3>
          <input className='w-full p-2 border rounded mb-2' placeholder='Nombre de la empresa' />
          <input className='w-full p-2 border rounded mb-2' placeholder='CIF / NIF' />
          <input className='w-full p-2 border rounded mb-2' placeholder='Dirección fiscal' />
        </div>
        <div>
          <h3 className='font-semibold mb-2'>Métodos de Pago</h3>
          <select className='w-full p-2 border rounded'>
            <option>Transferencia Bancaria</option>
            <option>PayPal</option>
            <option>Stripe</option>
          </select>
        </div>
        <div>
          <h3 className='font-semibold mb-2'>Personalización del Asistente IA</h3>
          <input className='w-full p-2 border rounded' placeholder='Nombre del asistente' />
        </div>
      </div>
      <div className='mt-6'>
        <Link to='/dashboard' className='text-blue-600 underline'>Volver al Dashboard</Link>
      </div>
    </div>
  );
}
