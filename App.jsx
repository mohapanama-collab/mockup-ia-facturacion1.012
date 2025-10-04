import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Facturas from './components/Facturas';
import ChatIA from './components/ChatIA';
import Configuracion from './components/Configuracion';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 font-sans">
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/facturas' element={<Facturas />} />
          <Route path='/chat' element={<ChatIA />} />
          <Route path='/configuracion' element={<Configuracion />} />
        </Routes>
      </div>
    </Router>
  );
}
