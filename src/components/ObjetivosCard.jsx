import React from 'react';

function ObjetivosCard({ competencia, indicadorLogro }) {
    return (
        <div style={{ 
            border: '1px solid var(--border)', 
            padding: '20px', 
            borderRadius: '12px', 
            marginBottom: '20px', 
            background: 'var(--bg)',
            textAlign: 'left',
            boxShadow: 'var(--shadow)'
        }}>
            <h2 style={{ color: 'var(--accent)', fontSize: '18px', margin: '0 0 8px 0' }}>🎯 Competencia</h2>
            <p style={{ color: 'var(--text)', margin: '0 0 16px 0' }}>{competencia}</p>
            
            <h2 style={{ color: 'var(--accent)', fontSize: '18px', margin: '0 0 8px 0' }}>📈 Indicador de Logro</h2>
            <p style={{ color: 'var(--text)', margin: 0 }}>{indicadorLogro}</p>
        </div>
    );
}

export default ObjetivosCard;