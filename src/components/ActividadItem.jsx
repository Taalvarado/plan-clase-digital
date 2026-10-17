import React, { useState } from 'react';

function ActividadItem({ titulo, tiempo, tipo }) {
    const [completado, setCompletado] = useState(false);

    return (
        <div style={{ 
            border: '1px solid #cbd5e1', 
            padding: '15px', 
            borderRadius: '8px', 
            marginBottom: '10px', 
            background: completado ? '#d1fae5' : '#f8fafc',
            transition: 'background 0.3s'
        }}>
            <span style={{ background: '#0ea5e9', color: 'white', padding: '2px 8px', borderRadius: '4px', fontSize: '0.8em' }}>{tipo}</span>
            <h3 style={{ margin: '8px 0 4px 0', color: '#0f172a' }}>{titulo}</h3>
            <p style={{ margin: '0 0 10px 0', fontSize: '0.85em', color: '#64748b' }}>⏱️ Duración: {tiempo}</p>
            <button 
                onClick={() => setCompletado(!completado)}
                style={{ 
                    background: completado ? '#10b981' : '#3b82f6', 
                    color: 'white', 
                    border: 'none', 
                    padding: '6px 12px', 
                    borderRadius: '4px', 
                    cursor: 'pointer',
                    fontSize: '0.85em'
                }}
            >
                {completado ? 'Completado ✓' : 'Marcar como completado'}
            </button>
        </div>
    );
}

// 
export default ActividadItem;