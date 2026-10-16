import React from 'react';

function ObjetivosCard({ competencia, indicadorLogro }) {
    return (
        <div style={{ border: '1px solid #cbd5e1', padding: '15px', borderRadius: '8px', marginBottom: '15px', background: '#f8fafc' }}>
            <h2 style={{ color: '#0f172a', fontSize: '1.2rem', margin: '0 0 8px 0' }}>🎯 Competencia</h2>
            <p style={{ color: '#334155', margin: '0 0 10px 0' }}>{competencia}</p>
            <h2 style={{ color: '#0f172a', fontSize: '1.2rem', margin: '0 0 8px 0' }}>📈 Indicador de Logro</h2>
            <p style={{ color: '#334155', margin: 0 }}>{indicadorLogro}</p>
        </div>
    );
}

export default ObjetivosCard;