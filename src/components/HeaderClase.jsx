import React from 'react';

function HeaderClase({ tituloTema, nombreDocente, horario }) {
    return (
        <header style={{ background: '#0f4c81', color: 'white', padding: '20px', borderRadius: '8px', marginBottom: '15px' }}>
            <h1 style={{ margin: '0 0 8px 0', fontSize: '1.8rem' }}>{tituloTema}</h1>
            <p style={{ margin: '0 0 4px 0' }}>👨‍🏫 Docente: {nombreDocente}</p>
            <p style={{ margin: 0, fontSize: '0.9em' }}>⏰ Horario: {horario}</p>
        </header>
    );
}

export default HeaderClase;