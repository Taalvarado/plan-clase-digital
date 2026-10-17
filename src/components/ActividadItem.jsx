import React, { useState } from 'react';

function ActividadItem({ titulo, tiempo, tipo }) {
    const [completado, setCompletado] = useState(false);

    return (
        <div style={{ 
            border: completado ? '1px solid var(--accent)' : '1px solid var(--border)', 
            padding: '16px', 
            borderRadius: '10px', 
            marginBottom: '12px', 
            background: completado ? 'var(--accent-bg)' : 'var(--code-bg)',
            transition: 'all 0.3s ease',
            textAlign: 'left'
        }}>
            <span style={{ 
                background: 'var(--accent-bg)', 
                color: 'var(--accent)', 
                border: '1px solid var(--accent-border)',
                padding: '3px 10px', 
                borderRadius: '6px', 
                fontSize: '0.8em',
                fontWeight: 'bold'
            }}>
                {tipo}
            </span>
            <h3 style={{ margin: '10px 0 6px 0', color: 'var(--text-h)', fontSize: '18px' }}>{titulo}</h3>
            <p style={{ margin: '0 0 12px 0', fontSize: '0.85em', color: 'var(--text)' }}>⏱️ Duración: {tiempo}</p>
            <button 
                onClick={() => setCompletado(!completado)}
                style={{ 
                    background: completado ? 'var(--accent)' : 'transparent', 
                    color: completado ? '#fff' : 'var(--text-h)', 
                    border: '1px solid var(--accent-border)',
                    fontWeight: 'bold',
                    padding: '8px 16px', 
                    borderRadius: '6px', 
                    cursor: 'pointer',
                    fontSize: '0.85em',
                    transition: 'all 0.2s'
                }}
            >
                {completado ? 'Completado ✓' : 'Marcar como completado'}
            </button>
        </div>
    );
}

export default ActividadItem;