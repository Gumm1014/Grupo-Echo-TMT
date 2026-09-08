export default function ItemProducto({ categoria, nombre, variante, imagen, cantidad, onEliminar, onSumar, onRestar }) {
  return (
    <div className="item-producto">
      <div className="img-wrap">
        {imagen && <img src={imagen} alt={nombre} />}
      </div>

      <div className="info">
        <p className="categoria">{categoria}</p>
        <p className="nombre">{nombre}</p>
        <p className="variante">{variante}</p>
      </div>

      <div className="acciones">
        <button className="btn-eliminar" aria-label="Eliminar" onClick={onEliminar}>✕</button>
        <div className="control-cant">
          <button className="btn-cant" aria-label="Restar" onClick={onRestar}>−</button>
          <span className="cant">{cantidad}</span>
          <button className="btn-cant" aria-label="Sumar" onClick={onSumar}>+</button>
        </div>
        <span className="precio-label">A cotizar</span>
      </div>
    </div>
  );
}