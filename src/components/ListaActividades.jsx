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

  if (cargando) return <p style={{ textAlign: 'center', color: 'var(--text)' }}>⏳ Cargando datos desde el servidor en la nube...</p>;

  if (errorServidor) {
    return (
      <div style={{ padding: '15px', background: 'var(--code-bg)', border: '1px solid var(--accent-border)', borderRadius: '8px', color: 'var(--text-h)', marginTop: '20px' }}>
        <p style={{ margin: 0, fontWeight: 'bold' }}>⚠️ Atención Docente / Estudiante:</p>
        <p style={{ margin: '5px 0 0 0', fontSize: '0.9em' }}>{errorServidor}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', marginTop: '20px' }}>
      <h3 style={{ color: 'var(--text-h)', borderBottom: '2px solid var(--border)', paddingBottom: '8px', marginBottom: '20px' }}>
        📋 Lista de Actividades (Sistema Blindado)
      </h3>
      {actividades.length === 0 ? (
        <p style={{ color: 'var(--text)' }}>No se encontraron registros o la tabla está vacía.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {actividades.map((item, index) => {
            const campos = item.fields || item;

            const titulo = campos.title || campos.Titulo || campos.titulo || campos.Title || 'Sin título';
            const duracion = campos.duration || campos.Duracion || campos.duracion || campos.Duration || 0;
            const categoria = campos.category || campos.Categoria || campos.categoria || campos.Category || 'General';
            const completado = campos.completed !== undefined ? campos.completed : (campos.Completo !== undefined ? campos.Completo : false);

            return (
              <div key={item.id || index} className="tarjeta-actividad">
                <div style={{ marginBottom: '8px' }}>
                  <span style={{
                    background: 'var(--accent-bg)',
                    border: '1px solid var(--accent-border)',
                    color: 'var(--accent)',
                    padding: '2px 10px',
                    borderRadius: '6px',
                    fontSize: '0.85em',
                    fontWeight: '600'
                  }}>
                    {categoria}
                  </span>
                </div>
                <h4 style={{ color: 'var(--text-h)', margin: '8px 0 6px 0', fontSize: '1.1em' }}>
                  {titulo}
                </h4>
                <p style={{ color: 'var(--text)', fontSize: '0.9em', margin: 0 }}>
                  ⏱️ Duración: {duracion} minutos {completado ? '✅' : '⏳'}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}