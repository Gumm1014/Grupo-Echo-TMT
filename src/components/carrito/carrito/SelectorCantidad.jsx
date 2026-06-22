export function SelectorCantidad() {
  return (
    <div className="selector-cantidad">
      <button type="button" aria-label="Restar">–</button>
      <span className="selector-cantidad__valor">1</span>
      <button type="button" aria-label="Sumar">+</button>
    </div>
  );
}
