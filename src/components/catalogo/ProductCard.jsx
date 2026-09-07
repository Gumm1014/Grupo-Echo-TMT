
import "./ProductCard.css";

function ProductCard({ producto }) {
  return (
    <article className="product-card">

      <div className="product-card__image-wrap">
        <img className="product-card__image" src={producto.imagen1} alt={producto.nombre} />
      </div>

      <div className="product-card__body">
        <span className="product-card__category">{producto.categoria}</span>
        <h3 className="product-card__title">{producto.nombre}</h3>
        <p className="product-card__description">
          {producto.descripcion}
        </p>

        <div className="product-card__footer">
          <span className="product-card__material">{producto.materiales}</span>
          <span className="product-card__link">
            Ver detalle <span aria-hidden="true">&rarr;</span>
          </span>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;