export default function ItemProducto({ categoria, nombre, variante, imagen }) {
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
        <button className="btn-eliminar" aria-label="Eliminar">✕</button>
        <div className="control-cant">
          <button className="btn-cant" aria-label="Restar">−</button>
          <span className="cant">1</span>
          <button className="btn-cant" aria-label="Sumar">+</button>
        </div>
        <span className="precio-label">A cotizar</span>
      </div>
    </div>
  );
}
