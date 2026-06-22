export function SelectorCantidad({ cantidad }) {
  return (
    <div className="selector-cantidad">
      <button type="button" aria-label="Restar">–</button>
      <span className="selector-cantidad__valor">{cantidad}</span>
      <button type="button" aria-label="Sumar">+</button>
    </div>
  );
}
