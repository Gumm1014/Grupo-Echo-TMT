
import "./ProductCard.css";

function ProductCard() {
  return (
    <article className="product-card">

      <div className="product-card__image-wrap">
        <img className="product-card__image" src="/prod 4.png" alt="Sofá" />
      </div>

      <div className="product-card__body">
        <span className="product-card__category">Dormitorio</span>
        <h3 className="product-card__title">Cama dos plazas</h3>
        <p className="product-card__description">
          Estructura robusta en madera maciza. Cabecera tallada. Disponible.
        </p>

        <div className="product-card__footer">
          <span className="product-card__material">Roble / Pino.</span>
          <span className="product-card__link">
            Ver detalle <span aria-hidden="true">&rarr;</span>
          </span>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
