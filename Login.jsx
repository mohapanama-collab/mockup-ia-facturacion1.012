import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className='flex items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-blue-300'>
      <div className='bg-white p-10 rounded-2xl shadow-xl w-96'>
        <h1 className='text-3xl font-bold text-blue-600 mb-6 text-center'>SmartInvoice AI</h1>
        <input className='w-full p-2 mb-4 border rounded' placeholder='Email' />
        <input type='password' className='w-full p-2 mb-6 border rounded' placeholder='Contraseña' />
        <button onClick={() => navigate('/dashboard')} className='w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition'>Iniciar sesión</button>
        <button onClick={() => navigate('/dashboard')} className='w-full mt-3 p-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition'>Probar demo IA</button>
      </div>
    </div>
  );
}
