import React from 'react';
import ListaActividades from './components/ListaActividades';
import './App.css';

export default function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '20px', fontFamily: 'Segoe UI, sans-serif' }}>
      <h1 style={{ color: '#0f4c81', textAlign: 'center' }}>Plan de Clase Digital Interactivo</h1>
      <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '30px' }}>
        Bienvenido al puente entre el Frontend (React) y el Backend en la nube (NocoDB).
      </p>
      
      {/* Renderizamos nuestro componente conectado a NocoDB */}
      <ListaActividades />
    </div>
  );
}