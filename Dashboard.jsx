import React from 'react';
import { Link } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Ingresos', value: 7000 },
  { name: 'Gastos', value: 3000 }
];
const COLORS = ['#1A73E8', '#E53935'];

export default function Dashboard() {
  return (
    <div className='p-8'>
      <h2 className='text-2xl font-bold text-blue-600 mb-4'>Panel de Control</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div className='bg-white rounded-xl shadow p-6'>
          <h3 className='font-semibold mb-2'>Facturación Mensual</h3>
          <ResponsiveContainer width='100%' height={200}>
            <PieChart>
              <Pie data={data} dataKey='value' innerRadius={50} outerRadius={80}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className='bg-white rounded-xl shadow p-6 col-span-2 flex flex-col justify-between'>
          <h3 className='font-semibold mb-2'>Notificaciones del Agente IA</h3>
          <p className='text-gray-600 mb-4'>He detectado <span className='font-semibold'>3 facturas pendientes</span> por validar.</p>
          <Link to='/facturas' className='bg-blue-600 text-white p-2 rounded text-center hover:bg-blue-700 transition'>Ver facturas</Link>
        </div>
      </div>
      <div className='mt-8 flex space-x-4'>
        <Link to='/chat' className='text-blue-600 underline'>Chat con IA</Link>
        <Link to='/configuracion' className='text-blue-600 underline'>Configuración</Link>
      </div>
    </div>
  );
}
