import React from 'react';
import ActividadItem from './components/ActividadItem';

export default function App() {
  return (
    <div style={{ maxWidth: '680px', margin: '30px auto', padding: '30px', fontFamily: 'Segoe UI, sans-serif', background: '#f8fafc', borderRadius: '16px', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)' }}>
      <h2 style={{ color: '#0f4c81', borderBottom: '2px solid #cbd5e1', paddingBottom: '12px', textAlign: 'center' }}>Plan de Clase Digital Interactivo</h2>
      <p style={{ textAlign: 'center', color: '#64748b', fontSize: '0.95em', marginBottom: '25px' }}>Facultad de Humanidades | Profesorados con Especialidad TIC</p>

      <ActividadItem titulo="Trivia Rápida Interactiva" tiempo="5 minutos" tipo="Diagnóstica" descripcion="Evaluación inicial de presaberes mediante preguntas gamificadas." />
      <ActividadItem titulo="Taller Guiado de Componentes" tiempo="25 minutos" tipo="Construcción" descripcion="Construcción modular de interfaces con React, Vite y despliegue en Vercel." />
      <ActividadItem titulo="Pruebas de Estado con useState" tiempo="25 minutos" tipo="Aplicación" descripcion="Implementación de interactividad para expandir y contraer detalles pedagógicos." />
    </div>
  );
}