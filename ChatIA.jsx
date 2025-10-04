import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
const MODEL = process.env.REACT_APP_OPENAI_MODEL || 'gpt-4o-mini';

export default function ChatIA() {
  const [mensajes, setMensajes] = useState([
    { tipo: 'ia', texto: 'Hola 👋, soy tu asistente de facturación IA. ¿Qué deseas hacer hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const enviarMensaje = async () => {
    if (!input.trim()) return;
    const userMsg = { tipo: 'user', texto: input };
    setMensajes(prev => [...prev, userMsg]);
    setInput('');
    // If no API key, use demo fallback
    if (!OPENAI_KEY) {
      setMensajes(prev => [...prev, { tipo: 'ia', texto: 'Modo demo: He generado un borrador de factura. (Para respuestas reales añade tu REACT_APP_OPENAI_KEY)' }]);
      return;
    }

    setLoading(true);
    try {
      const messagesForApi = [
        { role: 'system', content: 'Eres un asistente que ayuda con facturación: crea resúmenes cortos y acciones claras.' },
        ...mensajes.filter(m => m.tipo).map(m => ({ role: m.tipo === 'user' ? 'user' : 'assistant', content: m.texto })),
        { role: 'user', content: input }
      ];

      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_KEY}`
        },
        body: JSON.stringify({
          model: MODEL,
          messages: messagesForApi,
          max_tokens: 500,
          temperature: 0.2
        })
      });

      if (!res.ok) {
        const errTxt = await res.text();
        throw new Error(errTxt || 'Error en la API');
      }

      const data = await res.json();
      const texto = data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content
        ? data.choices[0].message.content
        : 'Respuesta vacía de la API';

      setMensajes(prev => [...prev, { tipo: 'ia', texto }]);
    } catch (err) {
      console.error(err);
      setMensajes(prev => [...prev, { tipo: 'ia', texto: 'Error: no se pudo contactar la API. Revisa tu clave y CORS.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='p-8 h-screen flex flex-col'>
      <h2 className='text-2xl font-bold text-blue-600 mb-4'>Chat con IA</h2>
      {!OPENAI_KEY && (
        <div className='mb-4 p-3 rounded bg-yellow-100 text-yellow-800'>
          <strong>Clave no configurada:</strong> Estás en modo demo. Para respuestas reales añade `REACT_APP_OPENAI_KEY` en las variables de entorno.
        </div>
      )}
      <div className='flex-1 bg-white rounded-xl shadow-md p-4 overflow-y-auto'>
        {mensajes.map((m, i) => (
          <div key={i} className={`my-2 flex ${m.tipo === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`p-3 rounded-xl max-w-xs ${m.tipo === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}>
              {m.texto}
            </div>
          </div>
        ))}
        {loading && <div className='text-gray-500 mt-2'>Escribiendo...</div>}
      </div>
      <div className='mt-4 flex'>
        <input value={input} onChange={e => setInput(e.target.value)} placeholder='Escribe un mensaje...' className='flex-1 p-2 border rounded-l-xl' />
        <button onClick={enviarMensaje} className='bg-blue-600 text-white px-4 rounded-r-xl hover:bg-blue-700 transition'>Enviar</button>
      </div>
      <div className='mt-4'>
        <Link to='/dashboard' className='text-blue-600 underline'>Volver al Dashboard</Link>
      </div>
    </div>
  );
}
