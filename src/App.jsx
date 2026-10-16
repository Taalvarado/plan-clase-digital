import React from 'react';
import HeaderClase from './components/HeaderClase';
import ObjetivosCard from './components/ObjetivosCard';
import ActividadItem from './components/ActividadItem';

function App() {
    return (
        <div style={{ maxWidth: '700px', margin: '20px auto', padding: '20px', fontFamily: 'Segoe UI' }}>
            <HeaderClase 
                tituloTema="Plan de Clase Digital - AMI" 
                nombreDocente="Tonny Alvarado" 
                horario="Sábados 07:00 - 09:20 AM" 
            />

            <ObjetivosCard 
                competencia="Comprender la arquitectura de desarrollo basada en componentes con React, Vite y la sintaxis JSX." 
                indicadorLogro="Dominar el paso de props y aplicar estado local interactivo con el Hook useState." 
            />

            <h3 style={{ color: '#0f4c81', marginTop: '20px' }}>Secuencia Didáctica de la Semana</h3>
            <div>
                <ActividadItem titulo="Introducción al paradigma modular y Vite" tiempo="1.5 horas" tipo="Teórica" />
                <ActividadItem titulo="Taller práctico de componentes y props" tiempo="3 horas" tipo="Práctica" />
                <ActividadItem titulo="Sincronización y control de versiones en GitHub" tiempo="2 horas" tipo="Git" />
            </div>
        </div>
    );
}

export default App;