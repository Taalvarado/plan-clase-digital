import React from 'react';
import HeaderClase from './components/HeaderClase';
import ObjetivosCard from './components/ObjetivosCard';
import ActividadItem from './components/ActividadItem';

function App() {
    return (
        <div style={{ padding: '24px 16px', width: '100%', boxSizing: 'border-box' }}>
            <HeaderClase 
                tituloTema="Plan de Clase Digital - AMI" 
                nombreDocente="Tonny Alvarado" 
                horario="Sábados 07:00 - 09:20 AM" 
            />

            <ObjetivosCard 
                competencia="Comprender la arquitectura de desarrollo basada en componentes con React, Vite y la sintaxis JSX." 
                indicadorLogro="Dominar el paso de props y aplicar estado local interactivo con el Hook useState." 
            />

            <h2 style={{ color: 'var(--text-h)', textAlign: 'left', margin: '24px 0 16px 0' }}>Secuencia Didáctica de la Semana</h2>
            <div>
                <ActividadItem titulo="Introducción al paradigma modular y Vite" tiempo="1.5 horas" tipo="Teórica" />
                <ActividadItem titulo="Taller práctico de componentes y props" tiempo="3 horas" tipo="Práctica" />
                <ActividadItem titulo="Sincronización y control de versiones en GitHub" tiempo="2 horas" tipo="Git" />
            </div>
        </div>
    );
}

export default App;