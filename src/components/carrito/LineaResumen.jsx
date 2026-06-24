export function LineaResumen({ nombre, cantidad }) {
  return (
    <div className="linea-resumen">
      <span>{nombre} x {cantidad}</span>
      <span className="linea-resumen__cotizar">A cotizar</span>
    </div>
  );
}
