import { useState, useEffect } from 'react';

export default function ListaActividades() {
  const [actividades, setActividades] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [errorServidor, setErrorServidor] = useState(null);

  // URL exacta de tu tabla en NocoDB Cloud
  const NOCODB_URL = 'https://app.nocodb.com/api/v3/data/pfdphpuwb0pi1zc/m9lp8d3m5s5wpf6/records?pageSize=25&viewId=vwkyxnkl18isvjga';
  
  // Tu token real de NocoDB
  const API_TOKEN = 'nc_pat_RUQhno8JwreOIbeBpXyuRbbRVBZMT7l8mGOe7WVh';

  useEffect(() => {
    async function obtenerDatosSeguros() {
      try {
        const respuesta = await fetch(NOCODB_URL, {
          method: 'GET',
          headers: {
            'xc-token': API_TOKEN,
            'Content-Type': 'application/json'
          }
        });

        if (!respuesta.ok) {
          throw new Error(`Error en el servidor: Estado HTTP ${respuesta.status}`);
        }

        const datos = await respuesta.json();
        console.log("Datos recibidos de NocoDB:", datos);
        const registros = datos.list || datos.records || [];
        setActividades(registros);
        setErrorServidor(null);

      } catch (error) {
        console.error('Fallo detectado al conectar con NocoDB:', error.message);
        setErrorServidor('No se pudo establecer conexión con la base de datos en la nube. Verifique su red o su API Token.');
      } finally {
        setCargando(false);
      }
    }

    obtenerDatosSeguros();
  }, []);

  if (cargando) return <p style={{ textAlign: 'center', color: '#64748b' }}>Cargando datos desde el servidor en la nube...</p>;

  if (errorServidor) {
    return (
      <div style={{ padding: '15px', background: '#fee2e2', border: '1px solid #ef4444', borderRadius: '8px', color: '#b91c1c', marginTop: '20px' }}>
        <p style={{ margin: 0, fontWeight: 'bold' }}>⚠️ Atención Docente / Estudiante:</p>
        <p style={{ margin: '5px 0 0 0', fontSize: '0.9em' }}>{errorServidor}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #cbd5e1', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', marginTop: '20px' }}>
      <h3 style={{ color: '#0f4c81', borderBottom: '2px solid #e2e8f0', paddingBottom: '8px' }}>📋 Lista de Actividades (Sistema Blindado)</h3>
      {actividades.length === 0 ? (
        <p style={{ color: '#64748b' }}>No se encontraron registros o la tabla está vacía.</p>
      ) : (
        <ul style={{ paddingLeft: '20px', margin: '15px 0' }}>
          {actividades.map((item, index) => {
            const campos = item.fields || item;

            const titulo = campos.title || campos.Titulo || campos.titulo || campos.Title || 'Sin título';
            const duracion = campos.duration || campos.Duracion || campos.duracion || campos.Duration || 0;
            const categoria = campos.category || campos.Categoria || campos.categoria || campos.Category || 'General';
            const completado = campos.completed !== undefined ? campos.completed : (campos.Completo !== undefined ? campos.Completo : false);

            return (
              <li key={item.id || index} style={{ marginBottom: '10px', color: '#334155' }}>
                <strong>{titulo}</strong> — {duracion}
                <span style={{ color: '#1b6ca8', marginLeft: '8px', background: '#e0f2fe', padding: '2px 8px', borderRadius: '6px', fontSize: '0.85em', fontWeight: '600' }}>[{categoria}]</span>
                {completado ? ' ✅' : ' ⏳'}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}