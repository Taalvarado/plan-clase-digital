import { useState } from 'react';

export default function ActividadItem({ titulo, tiempo, tipo, descripcion }) {
  const [expandido, setExpandido] = useState(false);

  return (
    <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', padding: '20px', margin: '16px 0', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <span style={{ fontSize: '0.75em', background: '#ffedd5', color: '#c2410c', padding: '4px 10px', borderRadius: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>{tipo}</span>
        <span style={{ fontSize: '0.85em', color: '#64748b', fontWeight: '500' }}>⏱️ {tiempo}</span>
      </div>
      <h4 style={{ margin: '8px 0 12px 0', color: '#1e293b', fontSize: '1.15em' }}>{titulo}</h4>
      <button onClick={() => setExpandido(!expandido)} style={{ background: '#0f4c81', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85em', fontWeight: '600' }}>
        {expandido ? '▲ Ocultar descripción' : '▼ Ver detalle pedagógico'}
      </button>
      {expandido && (
        <p style={{ marginTop: '14px', padding: '14px', background: '#f8fafc', borderRadius: '8px', color: '#334155', fontSize: '0.9em', borderLeft: '4px solid #0f4c81', lineHeight: '1.5' }}>
          {descripcion}
        </p>
      )}
    </div>
  );
}