import React from 'react';

function HeaderClase({ tituloTema, nombreDocente, horario }) {
    return (
        <header style={{ 
            background: 'var(--code-bg)', 
            border: '1px solid var(--border)', 
            padding: '24px', 
            borderRadius: '12px', 
            marginBottom: '20px',
            textAlign: 'left',
            boxShadow: 'var(--shadow)'
        }}>
            <h1 style={{ fontSize: '28px', margin: '0 0 10px 0', color: 'var(--accent)' }}>{tituloTema}</h1>
            <p style={{ color: 'var(--text-h)', margin: '0 0 6px 0', fontWeight: '500' }}>👨‍🏫 Docente: {nombreDocente}</p>
            <p style={{ color: 'var(--text)', margin: 0, fontSize: '0.9em' }}>⏰ Horario: {horario}</p>
        </header>
    );
}

export default HeaderClase;